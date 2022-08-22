<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Button, Dropdown, CheckboxGroup } from '../../lib';

  let position = [
    {
      value: 'left',
      label: 'Left',
    },
    {
      value: 'right',
      label: 'Right',
    },
  ];

  let group: 'left' | 'right' = 'left';
</script>

<div in:fade class="content">
  <h1>Dropdown</h1>
  <CheckboxGroup values={position} type="radio" bind:group />

  <Dropdown position={group}>
    <svelte:fragment slot="button">
      <Button type="ghost">Dropdown</Button>
    </svelte:fragment>
    <svelte:fragment slot="content">
      <div>
        <div class="email">useremail@gmail.com</div>
        <div class="logout">Logout</div>
      </div>
    </svelte:fragment>
  </Dropdown>
</div>

<style>
  .email {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-bottom: 1px solid gray;
  }
  .logout {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  }
  .logout:hover {
    background-color: #969393;
    cursor: pointer;
  }
</style>
