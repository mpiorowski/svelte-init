<script lang="ts">
    export let value: number | null;
    export let label: string;
    export let name = '';
    export let error = '';
    export let required = false;
    export let disabled = false;
    export let small = false;
    export let placeholder = '';

    export let max: number | undefined = undefined;
    export let min: number | undefined = undefined;
    export let step = 0.01;

    $: if (!!max && !!value && value > max) {
        value = max;
    } else if (!!min && !!value && value < min) {
        value = min;
    }
</script>

<label>
    {label}
    {#if required}<span class="text-error">*</span>{/if}
    <input
        type="number"
        bind:value
        {name}
        {disabled}
        {step}
        {max}
        {min}
        {placeholder}
        class="input"
        class:error
        class:small
    />
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
    input {
        display: block;
        width: 100%;
        height: 2.25rem;
        margin-top: 0.25rem;
        padding-left: 0.8rem;
        padding-right: 0.8rem;
        border-radius: 0.5rem;
    }
    input.small {
        height: 1.75rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    .text-error {
        height: 1.25rem;
        margin-top: 0.25rem;
        font-weight: bold;
    }
</style>
