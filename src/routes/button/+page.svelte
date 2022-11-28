<script lang="ts">
    import { fade } from 'svelte/transition';
    import { Button, Checkbox } from '$lib';
    let disabled = false;
    let loading = false;
    let full = true;
    let link = false;
</script>

<div in:fade class="content">
    <h1>Button</h1>
    <Checkbox bind:checked={disabled}>Disabled</Checkbox>
    <Checkbox bind:checked={loading}>Submitting</Checkbox>
    <Checkbox bind:checked={full}>Full width</Checkbox>
    <Checkbox bind:checked={link}>Link</Checkbox>

    <div class="grid">
        <Button {disabled} {loading} {full} {link}>Primary button</Button>
        <Button {disabled} {loading} type="ghost" {full} {link}>
            Ghost button
        </Button>
        <Button {disabled} {loading} type="error" {full} {link}>
            Error button
        </Button>
    </div>
</div>

<style>
    .grid {
        display: flex;
        gap: 1rem;
    }
</style>
