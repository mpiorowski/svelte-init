<script lang="ts">
    import { fade } from 'svelte/transition';
    import { Tooltip } from '../../lib';
    import InputNumber from '../../lib/form/inputNumber.svelte';

    let move = 0.2;
</script>

<div in:fade class="content">
    <h1>Tooltip</h1>
    <InputNumber bind:value={move} label="Move tooltip" />
    <Tooltip tooltip={'tooltip text'} position={'top'} {move}>
        <div class="tooltip-container">Top</div>
    </Tooltip>
    <Tooltip tooltip={'tooltip text'} {move} position={'right'}>
        <div class="tooltip-container">Right</div>
    </Tooltip>
    <Tooltip tooltip={'tooltip text'} position={'left'} {move}>
        <div class="tooltip-container">Left</div>
    </Tooltip>
    <Tooltip tooltip={'tooltip text'} position={'bottom'} {move}>
        <div class="tooltip-container">Bottom</div>
    </Tooltip>
</div>

<style>
    .tooltip-container {
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid gray;
        background-color: aliceblue;
        border-radius: 0.5rem;
        width: 5rem;
        height: 2.5rem;
    }
</style>
