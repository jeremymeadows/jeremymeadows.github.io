<script lang="ts">
    import { onMount } from 'svelte';

    onMount(() => {
        let body = document.getElementsByTagName('body')[0];
        
        if (body.clientHeight < window.innerHeight) {
            // document.getElementById('copyright')!.style.position = 'absolute';
        }
    });
</script>

<div style="height: 64px"/>

<!-- <p id="copyright" class="center">©2022 Jeremy Meadows</p> -->

<!-- <div style="height: 16px"></div> -->

<style lang="scss">
    @import '../../style.scss';

    p {
        font-size: 10px;
        // top: calc(100vh - 2em - 19px);
        // right: 0;
    }
</style>