<script lang="ts">
    export let label: string;
    export let value: unknown = undefined;
    export let name = '';
    export let error = '';
    export let placeholder = '';
    export let required = false;
    export let disabled = false;
    export let rows = 3;
</script>

<label>
    {label}
    {#if required}<span class="text-error">*</span>{/if}
    <textarea class="input" {name} bind:value {rows} {disabled} {placeholder} class:error />
    <p class="text-error">
        {#if error}
            {error}
        {/if}
    </p>
</label>

<style>
    label {
        display: block;
        font-size: 0.875rem /* 14px */;
        line-height: 1.25rem /* 20px */;
        font-weight: 500;
        width: 100%;
    }
    textarea {
        display: block;
        width: 100%;

        margin-top: 0.25rem;
        padding: 0.8rem;
        border-radius: 0.5rem;
    }
    textarea:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    .text-error {
        height: 1.25rem;
        margin-top: 0.25rem;
        font-weight: bold;
    }
</style>
