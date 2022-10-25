<script lang="ts">
    export let label: string;
    export let value: unknown;
    export let error = '';
    export let placeholder = '';
    export let required = false;
    export let disabled = false;
    export let rows = 3;
</script>

<label for={label} class="textarea">
    {label}
    {#if required}<span class="text-error">*</span>{/if}
    <textarea bind:value {rows} {disabled} {placeholder} class:error />
    <p class="text-error">
        {#if error}
            {error}
        {/if}
    </p>
</label>

<style>
    .textarea {
        display: block;
        font-size: 0.875rem /* 14px */;
        line-height: 1.25rem /* 20px */;
        font-weight: 500;
        width: 100%;
    }
    textarea {
        display: block;
        width: 100%;
        transition: all 0.1s ease-in-out;

        margin-top: 0.25rem;
        padding: 0.8rem;
        border-radius: 0.5rem;

        background-color: var(--input-primary);
        outline: 0px solid var(--input-primary);

        box-shadow: var(--shadow);
    }
    textarea:disabled {
        opacity: 0.5;
    }
    textarea::placeholder {
        color: var(--input-placeholder);
    }
    textarea.error {
        outline: 2px solid var(--input-error);
    }
    textarea:focus {
        outline: 2px solid var(--input-focus);
    }
    textarea:disabled {
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
