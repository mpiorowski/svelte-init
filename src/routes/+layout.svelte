<script lang="ts">
    import { page } from '$app/stores';
    import '../app.css';
    import { Toast } from '$lib';
    import NpmIcon from '$lib/icons/npm.svelte';
    import GithubIcon from '$lib/icons/github.svelte';
    $: url = $page.url.pathname;
</script>

<svelte:head>
    <title>SvelteInit</title>
    <meta name="description" content="SvelteInit" />
</svelte:head>

<Toast />
<div class="header">
    <a href="/">
        <img alt="logo" src="/logo.png" width="120" />
    </a>
    <div class="icons">
        <a
            class="icon"
            href="https://www.npmjs.com/package/@mpiorowski/svelte-init"
        >
            <div class="fill-gray-700">
                <NpmIcon />
            </div>
        </a>
        <a class="icon" href="https://www.github.com/mpiorowski/svelte-init#readme">
            <div class="fill-gray-700">
                <GithubIcon />
            </div>
        </a>
    </div>
</div>

<div class="main">
    <div class="navigation">
        <a href="/input" class={url === '/input' ? 'active' : ''}>Input</a>
        <a href="/button" class={url === '/button' ? 'active' : ''}>Button</a>
        <a href="/checkbox" class={url === '/checkbox' ? 'active' : ''}>
            Checkbox/Radio
        </a>
        <a href="/toast" class={url === '/toast' ? 'active' : ''}>Toast</a>
        <a href="/drawer" class={url === '/drawer' ? 'active' : ''}>Drawer</a>
        <a href="/modal" class={url === '/modal' ? 'active' : ''}>Modal</a>
        <a href="/dropdown" class={url === '/dropdown' ? 'active' : ''}>
            Dropdown
        </a>
        <a href="/tooltip" class={url === '/tooltip' ? 'active' : ''}>
            Tooltip
        </a>
        <a href="/spinner" class={url === '/spinner' ? 'active' : ''}>
            Spinner
        </a>
    </div>
    <div class="slot">
        <slot />
    </div>
</div>

<style>
    .header {
        height: 40px;
        border-bottom: 1px solid #434343;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.7rem;
        padding-left: 0.2rem;
        gap: 20px;
    }
    .icons {
        display: flex;
        gap: 20px;
    }
    .icon {
        color: white;
        fill: white;
    }
    .icon:hover {
        cursor: pointer;
    }
    .main {
        display: grid;
        grid-template-columns: 200px 1fr;
        overflow: auto;
        height: calc(100vh - 40px);
    }
    .navigation {
        display: flex;
        flex-direction: column;
        /* gap: 8px; */
        border-right: 1px solid #434343;
    }
    .navigation a {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #434343;
        padding: 0.7rem;
    }
    a:hover {
        opacity: 0.8;
    }
    a.active {
        opacity: 0.5;
    }
    .slot {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        padding: 2rem;
        overflow: auto;
    }
</style>
