<script lang="ts">
    export let tooltip: boolean | string = false; // prevent blank tooltips
    export let position: 'top' | 'bottom' | 'right' | 'left' = 'top';
    export let move = 0;
</script>

<div
    data-tooltip={tooltip}
    style={`--tooltip-move:${move}rem`}
    class={position}
>
    <slot />
</div>

<style>
    [data-tooltip] {
        position: relative;
        display: block;
        width: fit-content;
    }

    [data-tooltip]::before,
    [data-tooltip]::after {
        z-index: 100;
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s ease-in-out;
    }

    [data-tooltip]::before {
        content: attr(data-tooltip);

        z-index: 100;
        position: absolute;
        width: fit-content;
        white-space: nowrap;
        text-align: center;
        border-radius: 0.5rem;
        font-size: 0.875rem /* 14px */;
        line-height: 1.25rem /* 20px */;
        padding: 0.25rem 0.5rem;

        background-color: var(--tooltip-background);
        color: var(--tooltip-text);
        box-shadow: var(--shadow);
    }

    /* TODO - add arrow */
    /* [data-tooltip]:after {
    position: absolute;
    top: auto;
    left: calc(100% + 10px);
    width: 0;
    border-top: 5px solid #000;
    border-top: 5px solid hsla(0, 0%, 20%, 0.9);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: ' ';
    font-size: 0;
    line-height: 0;
  } */

    [data-tooltip]:hover::before,
    [data-tooltip]:hover::after {
        z-index: 40;
        visibility: visible;
        opacity: 1;
        /* transform: translate(-50%, 0); */
    }
    [data-tooltip='false']:hover::before,
    [data-tooltip='false']:hover::after {
        visibility: hidden;
        opacity: 0;
    }

    .top::before {
        left: 50%;
        transform: translateX(-50%);
        bottom: calc(100% + var(--tooltip-move));
    }
    .bottom::before {
        left: 50%;
        transform: translateX(-50%);
        top: calc(100% + var(--tooltip-move));
    }
    .right::before {
        top: 50%;
        transform: translateY(-50%);
        left: calc(100% + var(--tooltip-move));
    }
    .left::before {
        top: 50%;
        transform: translateY(-50%);
        right: calc(100% + var(--tooltip-move));
    }
</style>
