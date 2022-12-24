<script lang="ts">
    import { useClickOutside } from '$lib';

    import { fade } from 'svelte/transition';

    export let position: 'left' | 'right' | 'center' = 'right';
    export let isOpen: boolean;
    export let onClickOutside: () => void = () => {
        return;
    };
</script>

<div use:useClickOutside={onClickOutside} class="dropdown-container">
    <!-- Dropdown button -->
    <slot name="button" />
    <!-- Dropdown content -->
    {#if isOpen}
        <div
            transition:fade={{ duration: 100 }}
            class="dropdown {position}"
            class:position
        >
            <slot name="content" />
        </div>
    {/if}
</div>

<style>
    .dropdown-container {
        position: relative;
    }
    .dropdown {
        display: flex;
        width: fit-content;
        z-index: 10;
        margin-top: 0.5rem /* 8px */;
        border-radius: 0.5rem;
        position: absolute;
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
