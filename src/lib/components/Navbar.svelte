<script lang="ts">
  import { onMount } from "svelte";
  import { navigating } from "$app/stores";

  import DarkMode from "./DarkMode.svelte";

  const pages = {
    about_me: "/about",
    education: "/education",
    work_experience: "/work_experience",
    projects: "/projects",
  };

  function toggle_menu() {
    const menu = document.getElementById("burger-menu")!;
    menu.classList.toggle("is-active");
    document
      .getElementById(menu.getAttribute("data-target")!)!
      .classList.toggle("is-active");
  }

  onMount(async () => {
    document
      .querySelector(`.navbar-item[href="${document.location.pathname}"]`)
      ?.classList.add("is-current-page");
  });

  $: if ($navigating) {
    toggle_menu();
    document
      .querySelector(".is-current-page")
      ?.classList.remove("is-current-page");
    document
      .querySelector(`.navbar-item[href="${$navigating.to?.url.pathname}"]`)
      ?.classList.add("is-current-page");
  }
</script>

<nav
  class="navbar is-fixed-top has-shadow"
  aria-label="main navigation"
>
  <div class="navbar-brand">
    <a href="/" class="navbar-item">Jeremy Meadows</a>
    <DarkMode />
    {#if !true}
      <!-- prevents Svelte from optimizing out `.is-current-page` from the css since it's only set via script -->
      <div class="is-current-page" hidden />
    {/if}

    <a
      id="burger-menu"
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbar-menu"
      tabindex="0"
      on:click={toggle_menu}
      on:keypress={toggle_menu}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div id="navbar-menu" class="navbar-menu">
    <div class="navbar-start" />

    <div class="navbar-end">
      {#each Object.entries(pages) as [page, url]}
        <a href={url} class="navbar-item">{page}</a>
      {/each}
    </div>
  </div>
</nav>

<style lang="scss">
  nav.navbar {
    margin: -8px;
    margin-bottom: 100%;
    padding: 8px 8px 0 8px;
    background-color: var(--bg);
    box-shadow: 0 2px 0 0 var(--bg-alt);
  }
  @media (min-width: 1200px) {
    nav {
      padding-left: calc((100vw - 1200px) / 2);
      padding-right: calc((100vw - 1200px) / 2);
    }
  }

  .navbar-menu {
    background-color: var(--bg);
  }

  .navbar-item {
    color: var(--green);
    font-family: monospace;
    padding: 0.5rem, 0.75rem;
    gap: 0;
  }

  .navbar-item:hover,
  .navbar-item:focus {
    background: none;
  }

  .navbar-item::before,
  .navbar-item::after {
    content: "\a0";
  }

  .is-current-page::before,
  .navbar-item:hover::before {
    content: "[";
  }

  .is-current-page::after,
  .navbar-item:hover::after {
    content: "]";
  }

  .navbar-item:not(.is-current-page):hover::before,
  .navbar-item:not(.is-current-page):hover::after {
    color: var(--grey);
  }
</style>
