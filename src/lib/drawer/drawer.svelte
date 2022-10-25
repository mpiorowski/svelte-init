<script lang="ts">
  import { browser } from '$app/environment';
  import { fade, fly } from 'svelte/transition';

  export let onClose: () => void;
  export let isOpen: boolean;
  export let title = '';

  $: if (browser) document.body.classList.toggle('no-scroll', isOpen);
</script>

{#if isOpen}
  <div
    class="drawer-overlay"
    transition:fade={{ duration: 200 }}
    on:click={onClose}
    id="drawer-overlay"
  />

  <div class="drawer" transition:fly={{ duration: 400, x: 400 }}>
    <div class="drawer-header">
      <h2>{title}</h2>
      <button on:click={onClose} aria-label="close" class="close-btn">
        &times;
      </button>
    </div>
    <div class="drawer-content">
      <slot name="content" />
    </div>
    <div class="drawer-footer">
      <slot name="footer" />
    </div>
  </div>
{/if}

<style>
  .drawer-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .drawer {
    display: grid;
    grid-template-rows: 60px 1fr auto;
    height: 100%; /* 100% Full-height */
    width: 100%;
    max-width: 600px; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 999; /* Stay on top */
    top: 0; /* Stay at the top */
    right: 0;

    background-color: var(--drawer-background);
  }
  .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-weight: bold;
  }
  .drawer-content {
    overflow: auto;
    padding: 1rem;
  }
  .drawer-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    gap: 0.5rem;
    padding: 1rem;
  }
  .close-btn {
    font-weight: bold;
    font-size: 1.875rem /* 30px */;
    line-height: 2.25rem /* 36px */;
  }
</style>
