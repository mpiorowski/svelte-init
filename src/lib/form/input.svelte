<script lang="ts">
  export let value: unknown;
  export let label: string;
  export let name = '';
  export let error = '';
  export let type:
    | 'text'
    | 'password'
    | 'email'
    | 'datetime-local'
    | 'date'
    | 'color' = 'text';
  export let required = false;
  export let disabled = false;
  export let small = false;
  export let placeholder = '';
  export let maxlength: number | undefined;

  function typeAction(node: HTMLInputElement) {
    node.type = type;
  }
</script>

<label class="input">
  {label}
  {#if required}<span class="text-error">*</span>{/if}
  <input
    use:typeAction
    bind:value
    {name}
    {disabled}
    {maxlength}
    {placeholder}
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
  .input {
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
    transition: all 0.1s ease-in-out;

    background-color: var(--input-primary);
    outline: 0px solid var(--input-primary);

    box-shadow: var(--shadow);
  }
  input.small {
    height: 1.75rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  input.error {
    outline: 2px solid var(--input-error);
  }
  input:focus {
    outline: 2px solid var(--input-focus);
  }
  input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .text-error {
    height: 1.25rem;
    margin-top: 0.25rem;
    font-weight: bold;
    color: var(--input-error);
  }
</style>
