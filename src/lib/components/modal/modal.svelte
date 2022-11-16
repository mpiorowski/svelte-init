<script lang="ts">
    import { fade } from 'svelte/transition';
    export let isOpen = false;
    export let onClose: () => void;
    export let size: 'sm' | 'md' | 'lg' = 'md';
</script>

{#if isOpen}
    <div
        class="modal-overlay"
        transition:fade={{ duration: 200 }}
        on:click={onClose}
        on:keypress={onClose}
    />
    <div class={`modal ${size}`} transition:fade={{ duration: 200 }}>
        <div class="content">
            <slot name="content" />
        </div>
        <div class="footer">
            <slot name="footer" />
        </div>
    </div>
{/if}

<style>
    .content {
        padding: 1rem;
        padding-bottom: 0;
    }
    .footer {
        padding: 1rem;
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
    }
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }
    .modal {
        position: fixed;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--modal-background);
        z-index: 1001;
        border-radius: 0.5rem;
    }
    .modal.sm {
        max-width: 400px;
    }
    .modal.md {
        max-width: 600px;
    }
    .modal.lg {
        max-width: 800px;
    }
</style>
