<script lang="ts">
  import { fade } from 'svelte/transition';
  import { LogoIcon } from '../lib';
</script>

<div in:fade class="content">
  <LogoIcon />

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
</div>

<style>
  a {
    font-size: 1.5rem;
    text-decoration: underline;
  }
</style>
