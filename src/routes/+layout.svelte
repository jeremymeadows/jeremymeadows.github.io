<script lang="ts">
    import { onMount } from 'svelte';

    let active = "home";

    function set_active(el: Element) {
        Array.from(document.getElementsByClassName('navbar-item')).forEach(
            (e) => {
                if (e === el) {
                    e.classList.add('is-active');
                } else {
                    if (e.classList.contains('is-active')) {
                        e.classList.remove('is-active');
                        e.innerHTML = `&nbsp;${e.innerHTML.slice(1, -1)}&nbsp;`;
                    }
                }
            }
        );
    }

    onMount(async () => {
        Array.from(document.getElementsByClassName('navbar-item')).forEach(
            (e) => {
                e.innerHTML = `&nbsp;${e.innerHTML}&nbsp;`;

                e.addEventListener('mouseenter', () => {
                    // if (document.URL.split('/')[-1] !== e.getAttribute('name')) {
                    if (!e.classList.contains('is-active')) {
                        e.innerHTML = `[${e.innerHTML.slice(6, -6)}]`;
                    }
                });
                e.addEventListener('mouseleave', () => {
                    // if (document.URL.split('/')[-1] !== e.getAttribute('name')) {
                    if (!e.classList.contains('is-active')) {
                        e.innerHTML = `&nbsp;${e.innerHTML.slice(1, -1)}&nbsp;`;
                    }
                });

                e.addEventListener('click', () => {
                    set_active(e);
                    active = e.getAttribute('name') || 'home';
                });
            }
        );
    });
</script>

<nav class="navbar is-fixed-top has-shadow" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">Jeremy Meadows</a>

        <!-- svelte-ignore a11y-missing-attribute -->
        <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
        >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start" />

        <div class="navbar-end">
            <a href="/about" name="about" class="navbar-item">about_me</a>
            <a href="/education" name="education" class="navbar-item">education</a>
            <a href="/skills" name="skills" class="navbar-item">skills</a>
        </div>
    </div>
</nav>

<div style="height: 86px" />

<slot />

<div style="height: 64px"/>

<style lang="scss">
    $navbar-item-hover-background-color: #00000000;

    @import '../style.scss';

    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

    nav {
        margin: -8px;
        padding: 8px 8px 0 8px;
    }

    .navbar-item {
        color: $link;
        font-family: 'Roboto Mono', monospace;
    }
</style>