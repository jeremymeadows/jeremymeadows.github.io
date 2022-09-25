<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
    <title>Jeremy Meadows</title>

    <meta charset="UTF-8">
    <meta name="author" content="Jeremy Meadows">
    <meta name="description" content="150 words">
    <meta name="url" content="jeremymeadows.github.io">
    <meta name="keywords" content="Jeremy Meadows, Jeremy, Meadows">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>

<Navbar/>

<slot/>

<div id="spacer" height="0"/>

<Footer/>

<style lang="scss">
    $navbar-breakpoint: 700px;
    $navbar-item-hover-background-color: #0000;

    @import '../style.scss';

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