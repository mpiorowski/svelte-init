<script lang="ts">
    import { Button, Modal } from '$lib';

    export let size: 'sm' | 'md' | 'lg' = 'md';
    export let type: 'primary' | 'ghost' | 'error' = 'error';
    export let action: () => void;
    export let confirmText = 'common.confirm';
    export let cancelText = 'common.cancel';

    let isOpen = false;
</script>

<Button on:click={() => (isOpen = true)} {type}>
        <slot name="button" />
</Button>

<Modal {isOpen} onClose={() => (isOpen = false)} {size}>
    <svelte:fragment slot="content">
        <slot name="content" />
    </svelte:fragment>
    <svelte:fragment slot="footer">
        <Button on:click={() => (isOpen = false)} type="ghost">
            {cancelText}
        </Button>
        <Button on:click={action}>{confirmText}</Button>
    </svelte:fragment>
</Modal>
