<script lang="ts">
  import { page } from '$app/stores';
  import '../preflight.css';
  import '../app.css';
  import Config from './config.svelte';
  $: url = $page.url.pathname;
</script>

<svelte:head>
  <title>SvelteInit</title>
  <meta name="description" content="SvelteInit" />
</svelte:head>

<div class="main">
  <div class="navigation">
    <a href="/" class={url === '/' ? 'active' : ''}>Instalation</a>
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
  .main {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    overflow: auto;
    height: 100vh;
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
