<script lang="ts">
    import { useClickOutside } from '$lib';

    import { fade } from 'svelte/transition';

    export let position: 'left' | 'right' | 'center' = 'right';
    export let isOpen: boolean;
    export let onClickOutside: () => void = () => {
        return;
    };
</script>

<!-- Dropdown button -->
<div use:useClickOutside={onClickOutside} class="dropdown">
    <slot name="button" />
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
