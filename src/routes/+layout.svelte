<script lang="ts">
  import { page } from '$app/stores';
  import '../app.css';
  import Config from './config.svelte';
  import { GithubIcon } from '../lib';
  $: url = $page.url.pathname;
</script>

<svelte:head>
  <title>SvelteInit</title>
  <meta name="description" content="SvelteInit" />
</svelte:head>

<div class="header">
  <a href="https://svelte-init.vercel.app">SvelteInit</a>
  <a class="github" href="https://github.com/mpiorowski/svelte-init#readme">
    <GithubIcon />
  </a>
</div>

<div class="main">
  <div class="navigation">
    <a href="/button" class={url === '/button' ? 'active' : ''}>Button</a>
    <a href="/input" class={url === '/input' ? 'active' : ''}>Input</a>
    <a href="/select" class={url === '/select' ? 'active' : ''}>Select</a>
    <a href="/checkbox" class={url === '/checkbox' ? 'active' : ''}>Checkbox</a>
    <a href="/dropdown" class={url === '/dropdown' ? 'active' : ''}>Dropdown</a>
    <a href="/tooltip" class={url === '/tooltip' ? 'active' : ''}>Tooltip</a>
    <a href="/toast" class={url === '/toast' ? 'active' : ''}>Toast</a>
    <a href="/drawer" class={url === '/drawer' ? 'active' : ''}>Drawer</a>
    <a href="/table" class={url === '/table' ? 'active' : ''}>Table</a>
    <a href="/spinner" class={url === '/spinner' ? 'active' : ''}>Spinner</a>
  </div>
  <div class="content">
    <slot />
  </div>
  <div class="config">
    <Config />
  </div>
</div>

<style>
  .header {
    height: 40px;
    border-bottom: 1px solid #434343;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    gap: 20px;
  }
  .github {
    fill: white;
  }
  .github:hover {
    cursor: pointer;
  }
  .main {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    overflow: auto;
    height: calc(100vh - 40px);
  }
  .navigation {
    display: flex;
    flex-direction: column;
    /* gap: 8px; */
    border-right: 1px solid #434343;
  }
  a {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #434343;
    padding: 0.5rem;
  }
  a:hover {
    opacity: 0.8;
  }
  a.active {
    background-color: #434343;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 1rem;
    max-width: 800px;
    width: 100%;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
  }
  .config {
    border-left: 1px solid #434343;
    padding: 2rem;
  }
</style>
