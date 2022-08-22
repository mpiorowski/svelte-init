<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Button, Drawer } from '../../lib';

  let isDrawerOpen = false;
</script>

<div in:fade class="content">
  <h1>Drawer</h1>
  <Drawer
    isOpen={isDrawerOpen}
    onClose={() => (isDrawerOpen = false)}
    title="Drawer Title"
  >
    <svelte:fragment slot="content">
      <p>This is a drawer body that can count to ten.</p>
      {#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as number}
        <div>{number}</div>
      {/each}
    </svelte:fragment>
    <svelte:fragment slot="footer">
      <Button on:click={() => (isDrawerOpen = false)} type="ghost">
        Close
      </Button>
      <Button on:click={() => alert('Submitting!')}>Submit</Button>
    </svelte:fragment>
  </Drawer>

  <Button on:click={() => (isDrawerOpen = true)}>Open drawer</Button>
</div>
