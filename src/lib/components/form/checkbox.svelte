<script lang="ts">
    export let checked: boolean;
    export let onChange: (() => void) | undefined = undefined;
</script>

<label>
    <input bind:checked on:change={onChange} type="checkbox" />
    <slot />
</label>

<style>
    label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        user-select: none;
        font-weight: bold;
    }
    label:hover {
        cursor: pointer;
    }
    input {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 0.25rem;
    }
    input:hover {
        cursor: pointer;
    }
</style>
