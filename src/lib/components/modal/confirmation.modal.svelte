<script lang="ts">
    import { Button, Modal } from '$lib';

    export let size: 'sm' | 'md' | 'lg' = 'md';
    export let actionBtn: 'primary' | 'ghost' | 'error' = 'error';
    export let confirmBtm: 'primary' | 'ghost' | 'error' = 'error';
    export let action: () => Promise<void> | void;
    export let confirmText = 'Confirm';
    export let cancelText = 'Cancel';

    let isOpen = false;
    let loading = false;
</script>

<Button on:click={() => (isOpen = true)} type={actionBtn}>
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
        <Button
            on:click={async () => {
                loading = true;
                await action();
                loading = false;
                isOpen = false;
            }}
            type={confirmBtm}
            {loading}
        >
            {confirmText}
        </Button>
    </svelte:fragment>
</Modal>
