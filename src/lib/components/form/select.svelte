<script lang="ts">
    export let label: string;
    export let value: unknown;
    export let error = '';
    export let required = false;
    export let disabled = false;
</script>

<label>
    {label}
    {#if required}<span class="text-error">*</span>{/if}
    <select class="input" {disabled} bind:value class:error>
        <slot />
    </select>
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
    select {
        display: block;
        width: 100%;

        height: 2.25rem;
        margin-top: 0.25rem;
        padding-left: 0.8rem;
        padding-right: 0.8rem;
        border-radius: 0.5rem;
    }
    select:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    .text-error {
        height: 1.25rem;
        margin-top: 0.25rem;
        font-weight: bold;
    }
</style>
