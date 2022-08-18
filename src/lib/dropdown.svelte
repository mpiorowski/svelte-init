<script lang="ts">
  import { fade } from 'svelte/transition';
  import { useClickOutside } from './useClickOutside';

  export let position: 'left' | 'right' | 'center' = 'right';
  let isOpen = false;
</script>

<!-- Dropdown button -->
<div use:useClickOutside={() => (isOpen = false)} class="dropdown">
  <div class="dropdown-btn" on:click={() => (isOpen = !isOpen)}>
    <slot name="button" />
  </div>
  <!-- Dropdown content -->
  {#if isOpen}
    <div
      transition:fade={{ duration: 100 }}
      class="dropdown-content {position}"
      class:position
    >
      <slot name="content" />
    </div>
  {/if}
</div>

<style>
  .dropdown {
    position: relative;
  }
  .dropdown-content {
    display: flex;
    width: fit-content;
    z-index: 10;
    margin-top: 0.5rem /* 8px */;
    border-radius: 0.5rem;
    position: absolute;

    box-shadow: var(--shadow);
    background-color: var(--dropdown-background);
  }
  .right {
    right: 0;
  }
  .left {
    left: 0;
  }
  .center {
    left: 50%;
    transform: translateX(-50%);
  }
</style>
