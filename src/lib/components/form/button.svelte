<script lang="ts">
    import Spinner from '../spinner.svelte';

    export let type: 'primary' | 'error' | 'ghost' = 'primary';
    export let loading = false;
    export let disabled = false;
    export let full = true;
    export let form = '';
    export let link = false;
</script>

<button
    aria-label="button"
    {form}
    on:click
    type={form ? 'submit' : 'button'}
    class={'button ' + type + (full ? ' full ' : '') + (link ? ' link ' : '')}
    disabled={disabled || loading}
    class:loading
>
    {#if loading}
        <div class="spinner">
            <Spinner size={20} />
        </div>
    {/if}
    <slot />
</button>

<style>
    .full {
        width: 100%;
    }
    button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 2.25rem;
        padding-left: 1rem;
        padding-right: 1rem;
        user-select: none;
        font-weight: bold;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;

    }
    .spinner {
        height: 1.25rem;
        width: 1.25rem;
        margin-right: 0.5rem;
    }
    button:disabled:not(.submitting) {
        opacity: 0.5;
        cursor: not-allowed;
    }
    button.link {
        background-color: transparent;
        box-shadow: none;
    }
    button.link:hover:not(:disabled) {
        background-color: transparent;
        box-shadow: none;
    }
</style>
