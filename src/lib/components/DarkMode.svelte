<script lang="ts">
  import { onMount } from "svelte";

  let theme = "dark";

  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
  }

  onMount(() => {
    if (localStorage.getItem("theme") === "light") {
      toggleTheme();
    }
  });
</script>

<button id="toggle-dark-mode" class="button" on:click={toggleTheme}>
  {#if theme === "dark"}
    <i class="bx bx-sm bxs-sun" />
  {:else}
    <i class="bx bx-sm bxs-moon" />
  {/if}
</button>

<style lang="scss">
  @use "/src/variables.scss" as *;

  #toggle-dark-mode {
    margin-left: -0.4rem;
    background: none;
    border: none;
  }

  button:has(i.bxs-sun),
  button:has(i.bxs-sun):focus {
    color: #ffe08a;
  }

  button:has(i.bxs-sun):hover {
    color: #946c00;
  }

  button:has(i.bxs-moon),
  button:has(i.bxs-moon):focus {
    color: #6700c7;
  }

  button:has(i.bxs-moon):hover {
    color: #6700c7;
  }
</style>
