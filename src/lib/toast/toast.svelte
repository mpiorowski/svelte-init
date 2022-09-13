<script lang="ts">
  import { backOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';
  import { notifications, removeToast } from './toast.helper';
  export let saveMsg = 'Saved';
  export let errorMsg = 'Error';
  export let deleteMsg = 'Deleted';
</script>

<div class="notifications">
  {#each $notifications as notification (notification.id)}
    <div
      in:fly={{
        delay: 0,
        duration: 300,
        x: 0,
        y: -50,
        opacity: 0.1,
        easing: backOut,
      }}
      out:fade={{ duration: 200 }}
      class={['toast', notification.type].join(' ')}
    >
      <div class="toast-text">
        {#if notification.message === 'common.saved'}
          {saveMsg}
        {:else if notification.message === 'common.error'}
          {errorMsg}
        {:else if notification.message === 'common.deleted'}
          {deleteMsg}
        {:else}
          {notification.message}
        {/if}
      </div>
      <div class="close" on:click={() => removeToast(notification.id)}>
        &times;
      </div>
    </div>
  {/each}
</div>

<style>
  .notifications {
    position: fixed;
    top: 10px;
    left: 0;
    right: 0;
    width: fit-content;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .toast {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    margin: auto;
    text-align: left;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: var(--shadow);
  }
  .close {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.25rem /* 18px */;
    height: 2.5rem;
    width: 2.5rem;
    color: var(--toast-text);
  }
  .close:hover {
    opacity: 0.5;
  }
  .toast-text {
    display: block;
    font-weight: bold;
    font-size: 1rem;
    cursor: default;
    padding-left: 1rem;
    color: var(--toast-text);
  }
  .info .toast-text {
    color: var(--toast-info-text);
  }
  .info .close {
    color: var(--toast-info-text);
  }
  .success {
    background-color: var(--toast-success);
  }
  .error {
    background-color: var(--toast-error);
  }
  .info {
    background-color: var(--toast-info);
  }
  .warning {
    background-color: var(--toast-warning);
  }
</style>
