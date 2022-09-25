<script lang="ts">
    import { onMount } from 'svelte';

    onMount(async () => {
        let menu = document.getElementById('burger-menu')!;
        menu.addEventListener('click', () => {
            menu.classList.toggle('is-active');
            document
                .getElementById(menu.getAttribute('data-target')!)!
                .classList
                .toggle('is-active');
        });

        Array.from(document.getElementsByClassName('navbar-item')).forEach(
            (e) => {
                if (window.location.pathname === e.getAttribute('href')) {
                    e.classList.add('is-active');
                    e.innerHTML = `[${e.getAttribute('data-display')}]`;
                } else {
                    e.innerHTML = `&nbsp;${e.getAttribute(
                        'data-display'
                    )}&nbsp;`;
                }

                e.addEventListener('mouseenter', () => {
                    if (!e.classList.contains('is-active')) {
                        e.innerHTML = `[${e.getAttribute('data-display')}]`;
                    }
                });
                e.addEventListener('mouseleave', () => {
                    if (!e.classList.contains('is-active')) {
                        e.innerHTML = `&nbsp;${e.getAttribute(
                            'data-display'
                        )}&nbsp;`;
                    }
                });

                e.addEventListener('click', () => {
                    e.classList.add('is-active');
                    e.innerHTML = `[${e.getAttribute('data-display')}]`;

                    Array.from(
                        document.getElementsByClassName('navbar-item')
                    ).forEach((el) => {
                        if (el !== e) {
                            if (el.classList.contains('is-active')) {
                                el.classList.remove('is-active');
                            }
                            el.innerHTML = `&nbsp;${el.getAttribute(
                                'data-display'
                            )}&nbsp;`;
                        }
                    });
                });
            }
        );
    });
</script>

<nav class="navbar is-fixed-top has-shadow" aria-label="main navigation">
    <div class="navbar-brand">
        <a href="/" data-display="Jeremy Meadows" class="navbar-item">&nbsp;</a>

        <!-- svelte-ignore a11y-missing-attribute -->
        <a
            id="burger-menu"
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

    <div class="navbar-menu">
        <div class="navbar-start" />

        <div class="navbar-end">
            <a href="/about" data-display="about_me" class="navbar-item"
                >&nbsp;</a
            >
            <a href="/education" data-display="education" class="navbar-item"
                >&nbsp;</a
            >
            <a href="/skills" data-display="skills" class="navbar-item"
                >&nbsp;</a
            >
        </div>
    </div>
</nav>

<div style="height: 86px" />

<style lang="scss">
    $navbar-breakpoint: 700px;
    $navbar-item-hover-background-color: #0000;

    @import '../../style.scss';

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
