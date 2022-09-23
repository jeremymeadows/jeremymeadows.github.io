<script lang="ts">
    import { onMount } from 'svelte';

    let active = "home";

    function set_active(el: Element) {
        Array.from(document.getElementsByClassName('navbar-item')).forEach(e => {
            if (e === el) {
                e.classList.add('is-active');
            } else {
                if (e.classList.contains('is-active')) {
                    e.classList.remove('is-active');
                    e.innerHTML = `&nbsp;${e.innerHTML.slice(1, -1)}&nbsp;`;
                }
            }
        });
    }

    onMount(async () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Add a click event on each of them
        Array.from(document.getElementsByClassName('navbar-burger')).forEach(e => {
            e.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                const target = e.getAttribute('data-target');

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                e.classList.toggle('is-active');
                document.getElementById(target!)?.classList.toggle('is-active');
            });
        });

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

<svelte:head>
    <title>Jeremy Meadows</title>

    <meta charset="UTF-8">
    <meta name="author" content="Jeremy Meadows">
    <meta name="description" content="150 words">
    <meta name="url" content="jeremymeadows.xyz">
    <meta name="keywords" content="Jeremy Meadows, Jeremy, Meadows">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>

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
    $navbar-breakpoint: 700px;
    $navbar-item-hover-background-color: #0000;

    @import '../style.scss';

    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

    nav {
        margin: -8px;
        padding: 8px 8px 0 8px;
    }
    @media (min-width: 1200px) {
        nav {
            padding-left: calc((100vw - 1200px) / 2);
            padding-right: calc((100vw - 1200px) / 2);
        }
    }

    .navbar-item {
        color: $link;
        font-family: 'Roboto Mono', monospace;
    }
</style>