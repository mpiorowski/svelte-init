<script lang="ts">
    import { fade } from 'svelte/transition';
    import { InputNumber, Tooltip } from '$lib';

    let move = 0.2;
</script>

<div in:fade class="content">
    <h1>Tooltip</h1>
    <InputNumber bind:value={move} label="Move tooltip" />
    <Tooltip tooltip={'tooltip text'} position={'top'} {move}>
        <div class="border border-gray-300 bg-gray-100 p-2 w-20 text-center rounded">Top</div>
    </Tooltip>
    <Tooltip tooltip={'tooltip text'} {move} position={'right'}>
        <div class="border border-gray-300 bg-gray-100 p-2 w-20 text-center rounded">Right</div>
    </Tooltip>
    <Tooltip tooltip={'tooltip text'} position={'left'} {move}>
        <div class="border border-gray-300 bg-gray-100 p-2 w-20 text-center rounded">Left</div>
    </Tooltip>
    <Tooltip tooltip={'tooltip text'} position={'bottom'} {move}>
        <div class="border border-gray-300 bg-gray-100 p-2 w-20 text-center rounded">Bottom</div>
    </Tooltip>
</div>

