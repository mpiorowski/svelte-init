<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Checkbox } from '../../lib';

  import Select from '../../lib/form/select.svelte';
  let select = '';
  let disabled = false;
  let required = false;
  let withError = false;
</script>

<div in:fade style="display: flex; gap: 20px; flex-direction: column;">
  <h1>Select</h1>
  <Checkbox bind:checked={withError}>With errror</Checkbox>
  <Checkbox bind:checked={required}>Required</Checkbox>
  <Checkbox bind:checked={disabled}>Disabled</Checkbox>
  <Select
    bind:value={select}
    {required}
    {disabled}
    error={withError ? 'This must be filled' : ''}
    label="Select"
  >
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Select>
</div>
