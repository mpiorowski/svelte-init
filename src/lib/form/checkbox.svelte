<script lang="ts">
  export let checked: boolean;
  export let onChange: (() => void) | undefined = undefined;
</script>

<label class="checkbox">
  <input bind:checked on:change={onChange} type="checkbox" />
  <slot />
</label>

<style>
  .checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    user-select: none;
    font-weight: bold;
  }
  .checkbox:hover {
    cursor: pointer;
  }
  input {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.25rem;
    accent-color: var(--accent);
  }
  input:hover {
    cursor: pointer;
  }
</style>
