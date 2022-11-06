<script lang="ts">
    import { fade } from 'svelte/transition';
    import { Checkbox, InputNumber, Spinner } from '$lib';

    let center = false;
    let visible = true;
    let size = 40;
</script>

<div in:fade class="content">
    <h1>Spinner</h1>

    <Checkbox bind:checked={center}>Center</Checkbox>
    <Checkbox bind:checked={visible}>Visible</Checkbox>
    <InputNumber bind:value={size} label="Size" max={200} min={1} />

    <Spinner {center} {size} {visible} />
</div>
