<script lang="ts">
    export let tooltip: boolean | string = false; // prevent blank tooltips
    export let position: 'top' | 'bottom' | 'right' | 'left' = 'top';
    export let move = 0;
</script>

<div class="tooltip">
    <slot />
    <span
        style={`--tooltip-move:${move}rem`}
        class={'tooltip-text ' + position}
    >
        {tooltip}
    </span>
</div>

<style>
    /* Tooltip container */
    .tooltip {
        position: relative;
        width: fit-content;
    }

    /* Tooltip text */
    .tooltip .tooltip-text {
        visibility: hidden;
        width: fit-content;
        white-space: nowrap;
        text-align: center;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.3s;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
    }

    .tooltip-text.top {
        left: 50%;
        transform: translateX(-50%);
        bottom: calc(100% + var(--tooltip-move));
    }
    .tooltip-text.bottom {
        left: 50%;
        transform: translateX(-50%);
        top: calc(100% + var(--tooltip-move));
    }
    .tooltip-text.right {
        top: 50%;
        transform: translateY(-50%);
        left: calc(100% + var(--tooltip-move));
    }
    .tooltip-text.left {
        top: 50%;
        transform: translateY(-50%);
        right: calc(100% + var(--tooltip-move));
    }
</style>
