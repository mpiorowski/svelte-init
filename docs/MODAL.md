### [Go back](https://github.com/mpiorowski/svelte-init#components)

# Modal

```
import { Modal } from "@mpiorowski/svelte-init";
```

# Usage

```
<script lang="ts">
    import { Button, Modal } from "@mpiorowski/svelte-init";

    let isOpen = false;
    let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<Modal {isOpen} onClose={() => (isOpen = false)} {size}>
    <svelte:fragment slot="content">
        <h2>Modal</h2>
        <p>Modal content</p>
    </svelte:fragment>
    <svelte:fragment slot="footer">
        <Button on:click={() => (isOpen = false)} type="ghost">
            Close
        </Button>
        <Button on:click={() => (isOpen = false)}>Submit</Button>
    </svelte:fragment>
    <div>Modal</div>
</Modal>

<Button on:click={() => (isOpen = true)}>Open modal</Button>
```

# Confirmation Modal

```
import { Confirmation } from "@mpiorowski/svelte-init";
```

# Usage

```
<script lang="ts">
    import { Confirmation } from "@mpiorowski/svelte-init";
</script>

<Confirmation
    {size}
    action={() => {
        alert('Confirmed');
    }}
    actionBtn="primary"
    cancelText="Cancel"
    confirmBtn="error"
    confirmText="Confirm"
>
    <svelte:fragment slot="button">Open confirmation modal</svelte:fragment>
    <svelte:fragment slot="content">
        <h2>Confirmation</h2>
        <p>Do you really want to delete this item?</p>
    </svelte:fragment>
</Confirmation>
```
