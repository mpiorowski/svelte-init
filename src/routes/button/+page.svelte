<script lang="ts">
    import { fade } from 'svelte/transition';
    import { Button, Checkbox } from '../../lib';
    let disabled = false;
    let loading = false;
    let full = true;
</script>

<div in:fade class="content">
    <h1>Button</h1>
    <Checkbox bind:checked={disabled}>Disabled</Checkbox>
    <Checkbox bind:checked={loading}>Submitting</Checkbox>
    <Checkbox bind:checked={full}>Full width</Checkbox>

    <div class="grid">
        <Button {disabled} {loading} {full}>Primary button</Button>
        <Button {disabled} {loading} type="ghost" {full}>Ghost button</Button>
        <Button {disabled} {loading} type="error" {full}>Error button</Button>
    </div>
</div>

<style>
    .grid {
        display: flex;
        gap: 1rem;
    }
</style>
