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
        <button on:click={onClose} aria-label="close" class="modal-close">
            &times;
        </button>
        <div class="modal-content">
            <slot name="content" />
        </div>
        <div class="modal-footer">
            <slot name="footer" />
        </div>
    </div>
{/if}

<style>
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
        width: calc(100% - 2rem);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
    .modal-content {
        padding: 1rem;
        padding-bottom: 0;
    }
    .modal-footer {
        display: flex;
        justify-content: flex-end;
        padding: 1rem;
        gap: 1rem;
    }
    .modal-close {
        font-weight: bold;
        position: absolute;
        font-size: 1.875rem /* 30px */;
        line-height: 1.5rem;
        top: 0.8rem;
        right: 0.8rem;
    }
</style>
