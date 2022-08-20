<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Button, Checkbox } from '../../lib';
  let disabled = false;
  let loading = false;
</script>

<div in:fade style="display: flex; gap: 20px; flex-direction: column;">
  <h1>Button</h1>
  <Checkbox bind:checked={disabled}>Disabled</Checkbox>
  <Checkbox bind:checked={loading}>Submitting</Checkbox>
  <Button {disabled} {loading}>Primary button</Button>
  <Button {disabled} {loading} type="ghost">Ghost button</Button>
  <Button {disabled} {loading} type="error">Error button</Button>
</div>
