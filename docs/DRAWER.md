### [Go back](https://github.com/mpiorowski/svelte-init#components)

# Drawer

```
import { Drawer } from "@mpiorowski/svelte-init";
```

# Usage

```
<script lang="ts">
  import { Button, Drawer } from "@mpiorowski/svelte-init";

  let isDrawerOpen = false;
</script>

<Drawer
  isOpen={isDrawerOpen}
  onClose={() => (isDrawerOpen = false)}
  title="Drawer Title"
>
  <svelte:fragment slot="content">
    <div>Drawer Content</div>
  </svelte:fragment>
  <svelte:fragment slot="footer">
    <Button on:click={() => (isDrawerOpen = false)} style="ghost">
      Close
    </Button>
    <Button on:click={() => alert('Submitting!')}>Submit</Button>
  </svelte:fragment>
</Drawer>

<Button on:click={() => (isDrawerOpen = true)}>Open drawer</Button>
```
