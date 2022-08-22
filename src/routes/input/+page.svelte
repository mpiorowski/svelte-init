<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Checkbox, Input, Textarea } from '../../lib';
  import InputNumber from '../../lib/form/inputNumber.svelte';
  import InputSimple from '../../lib/form/inputSimple.svelte';

  let input = '';
  let textarea = '';
  let inputNumber = 0;
  let inputDate = 0;
  let disabled = false;
  let required = false;
  let withError = false;
</script>

<div in:fade class="content">
  <h1>Input</h1>
  <Checkbox bind:checked={withError}>With errror</Checkbox>
  <Checkbox bind:checked={required}>Required</Checkbox>
  <Checkbox bind:checked={disabled}>Disabled</Checkbox>
  <Input
    bind:value={input}
    {required}
    {disabled}
    error={withError ? 'Field must not be empty' : ''}
    label="Input text"
    type="text"
  />
  <Input
    bind:value={inputDate}
    {required}
    {disabled}
    error={withError ? 'Field must not be empty' : ''}
    label="Input date"
    type="date"
  />
  <h1>Input Number</h1>
  <InputNumber
    bind:value={inputNumber}
    {required}
    {disabled}
    max={100}
    error={withError ? 'Field must not be empty' : ''}
    label="Input number"
  />

  <h1>Textarea</h1>
  <Textarea
    bind:value={textarea}
    {required}
    {disabled}
    error={withError ? 'Field must not be empty' : ''}
    label="Textarea"
    placeholder="Placeholder"
  />

  <h1>Input Simple</h1>
  <InputSimple bind:value={input} placeholder="Input simple" />
</div>
