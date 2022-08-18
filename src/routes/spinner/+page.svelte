<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Spinner } from '../../lib';
  import Checkbox from '../../lib/form/checkbox.svelte';
  import InputNumber from '../../lib/form/inputNumber.svelte';

  let center = false;
  let size = 40;
</script>

<div in:fade style="display: flex; gap: 20px; flex-direction: column;">
  <h1>Spinner</h1>
  <Checkbox bind:checked={center}>Center spinner</Checkbox>
  <InputNumber bind:value={size} label="Size" max={200} min={1} />

  <Spinner {center} {size} />
</div>
