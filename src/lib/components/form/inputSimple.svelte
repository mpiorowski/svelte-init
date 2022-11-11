<script lang="ts">
    export let placeholder: string;
    export let value: unknown;
    export let type:
        | 'text'
        | 'number'
        | 'password'
        | 'email'
        | 'datetime-local'
        | 'date'
        | 'color' = 'text';
    export let disabled = false;
    export let error = '';

    function typeAction(node: HTMLInputElement) {
        node.type = type;
    }
</script>

<input
    use:typeAction
    bind:value
    aria-label={placeholder}
    placeholder={error || placeholder}
    class:error
    {disabled}
/>

<style>
    input {
        display: block;
        width: 100%;
        height: 2.25rem;

        font-size: 0.875rem /* 14px */;
        line-height: 1.25rem /* 20px */;
        font-weight: 500;
        padding-left: 0.8rem;
        padding-right: 0.8rem;
        border-radius: 0.5rem;
        transition: all 0.1s ease-in-out;

        background-color: var(--input-primary);
        outline: 0px solid var(--input-primary);

        box-shadow: var(--shadow);
    }
    input::placeholder {
        color: var(--input-placeholder);
    }
    input:focus {
        outline: 2px solid var(--input-focus);
    }
    input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    input.error::placeholder {
        color: var(--input-error);
    }
    input.error {
        outline: 2px solid var(--input-error);
    }
</style>
