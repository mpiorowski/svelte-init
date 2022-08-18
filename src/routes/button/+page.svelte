<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Button, Checkbox } from '../../lib';
  let disabled = false;
  let submitting = false;
</script>

<div in:fade style="display: flex; gap: 20px; flex-direction: column;">
  <h1>Button</h1>
  <Checkbox bind:checked={disabled}>Disabled</Checkbox>
  <Checkbox bind:checked={submitting}>Submitting</Checkbox>
  <Button {disabled} {submitting}>Primary button</Button>
  <Button {disabled} {submitting} style="error">Error button</Button>
  <Button {disabled} {submitting} style="ghost">Ghost button</Button>
</div>
