<script lang="ts">
    export let label: string;
    export let value: unknown;
    export let error = '';
    export let required = false;
    export let disabled = false;
</script>

<label class="select">
    {label}
    {#if required}<span class="text-error">*</span>{/if}
    <select {disabled} bind:value class:error>
        <slot />
    </select>
    <p class="text-error">
        {#if error}
            {error}
        {/if}
    </p>
</label>

<style>
    .select {
        display: block;
        font-size: 0.875rem /* 14px */;
        line-height: 1.25rem /* 20px */;
        font-weight: 500;
        width: 100%;
    }
    select {
        display: block;
        width: 100%;
        transition: all 0.1s ease-in-out;

        height: 2.25rem;
        margin-top: 0.25rem;
        padding-left: 0.8rem;
        padding-right: 0.8rem;
        border-radius: 0.5rem;

        background-color: var(--input-primary);
        outline: 0px solid var(--input-primary);

        box-shadow: var(--shadow);
    }
    select.error {
        outline: 2px solid var(--input-error);
    }
    select:focus {
        outline: 2px solid var(--input-focus);
    }
    select:disabled {
        color: var(--input-disabled);
        cursor: not-allowed;
    }
    .text-error {
        height: 1.25rem;
        margin-top: 0.25rem;
        font-weight: bold;
        color: var(--input-error);
    }
</style>
