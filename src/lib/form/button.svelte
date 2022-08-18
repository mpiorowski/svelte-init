<script lang="ts">
  import Spinner from '../spinner.svelte';

  export let form = '';
  export let style: 'primary' | 'error' | 'ghost' = 'primary';
  export let type: 'button' | 'submit' = 'button';
  export let submitting = false;
  export let disabled = false;
</script>

<button
  aria-label="button"
  {form}
  on:click
  {type}
  class={style}
  disabled={disabled || submitting}
  class:submitting
>
  {#if submitting}
    <div class="spinner">
      <Spinner />
    </div>
  {/if}
  <slot />
</button>

<style>
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.25rem;
    padding-left: 1rem;
    padding-right: 1rem;

    user-select: none;
    font-weight: bold;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;

    transition: all 0.1s ease-in-out;

    outline: 0px solid var(--btn-primary);
    box-shadow: var(--shadow);
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
  button.primary {
    background-color: var(--btn-primary);
  }
  button.primary:hover:not(:disabled) {
    background-color: var(--btn-primary-hover);
  }
  button.primary:focus {
    outline: 2px solid var(--btn-primary-focus);
  }

  button.error {
    background-color: var(--btn-error);
  }
  button.error:hover:not(:disabled) {
    background-color: var(--btn-error-hover);
  }
  button.error:focus {
    box-shadow: 0 0 0 2px var(--btn-error-focus), 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }

  button.ghost {
    background-color: var(--btn-ghost);
  }
  button.ghost:hover:not(:disabled) {
    background-color: var(--btn-ghost-hover);
  }
  button.ghost:focus {
    box-shadow: 0 0 0 2px var(--btn-ghost-focus), 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }
</style>
