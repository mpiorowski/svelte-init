<script lang="ts">
  import { Input } from '$lib';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { background, text } from './store';

  let styles: CSSStyleDeclaration;
  onMount(() => {
    styles = document.body.style;
  });
  $: if (styles) {
    styles.setProperty('--text', $text);
    styles.setProperty('--background', $background);
  }
</script>

<div in:fade class="content">
  <h1>SvelteInit</h1>

  <h2>
    A low-overhead Svelte UI library with the basic, most useful components, to
    help with the initial development.
  </h2>

  <a
    href="https://github.com/mpiorowski/svelte-init#Instalation"
    target="_blank"
  >
    Instalation
  </a>
  <h3>Set up background color and text to play with the color configuration.</h3>
  <Input small type="color" label="--background" bind:value={$background} />
  <Input small type="color" label="--text" bind:value={$text} />
</div>

<style>
  a {
    font-size: 1.5rem;
    text-decoration: underline;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
