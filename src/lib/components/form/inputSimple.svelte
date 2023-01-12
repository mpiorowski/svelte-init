<script lang="ts">
    export let placeholder: string;
    export let value: unknown = undefined;
    export let name = '';
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
    class="input"
    {name}
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
    }
    input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
