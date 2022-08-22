<script lang="ts">
  import { onMount } from 'svelte';
  import { Input } from '../lib';
  import {
    btnText,
    btnPrimary,
    btnPrimaryFocus,
    btnPrimaryHover,
    btnError,
    btnErrorFocus,
    btnErrorHover,
    btnGhost,
    btnGhostFocus,
    btnGhostHover,
    inputPrimary,
    inputFocus,
    inputError,
    inputPlaceholder,
    accent,
    toastText,
    toastSuccess,
    toastInfo,
    toastWarning,
    toastError,
    toastInfoText,
    drawerBackground,
    dropdownBackground,
    tableHeader,
    tableBody,
    tableFooter,
    tooltipBackground,
    tooltipText,
  } from './store';

  import { page } from '$app/stores';

  let styles: CSSStyleDeclaration;
  onMount(() => {
    styles = document.body.style;
  });
  $: if (styles) {
    styles.setProperty('--btn-text', $btnText);
    styles.setProperty('--btn-primary', $btnPrimary);
    styles.setProperty('--btn-primary-hover', $btnPrimaryHover);
    styles.setProperty('--btn-primary-focus', $btnPrimaryFocus);
    styles.setProperty('--btn-error', $btnError);
    styles.setProperty('--btn-error-hover', $btnErrorHover);
    styles.setProperty('--btn-error-focus', $btnErrorFocus);
    styles.setProperty('--btn-ghost', $btnGhost);
    styles.setProperty('--btn-ghost-hover', $btnGhostHover);
    styles.setProperty('--btn-ghost-focus', $btnGhostFocus);
    styles.setProperty('--input-primary', $inputPrimary);
    styles.setProperty('--input-focus', $inputFocus);
    styles.setProperty('--input-error', $inputError);
    styles.setProperty('--input-placeholder', $inputPlaceholder);
    styles.setProperty('--accent', $accent);
    styles.setProperty('--toast-text', $toastText);
    styles.setProperty('--toast-success', $toastSuccess);
    styles.setProperty('--toast-error', $toastError);
    styles.setProperty('--toast-warning', $toastWarning);
    styles.setProperty('--toast-info', $toastInfo);
    styles.setProperty('--toast-info-text', $toastInfoText);
    styles.setProperty('--drawer-background', $drawerBackground);
    styles.setProperty('--table-header', $tableHeader);
    styles.setProperty('--table-body', $tableBody);
    styles.setProperty('--table-footer', $tableFooter);
    styles.setProperty('--dropdown-background', $dropdownBackground);
    styles.setProperty('--tooltip-background', $tooltipBackground);
    styles.setProperty('--tooltip-text', $tooltipText);
  }
</script>

{#if $page.url.pathname === '/input' || $page.url.pathname === '/select' || $page.url.pathname === '/textarea'}
  <Input
    small
    type="color"
    label="--input-primary"
    bind:value={$inputPrimary}
  />
  <Input small type="color" label="--input-focus" bind:value={$inputFocus} />
  <Input small type="color" label="--input-error" bind:value={$inputError} />
  <Input
    small
    type="color"
    label="--input-placeholder"
    bind:value={$inputPlaceholder}
  />
{:else if $page.url.pathname === '/button'}
  <Input small type="color" label="--btn-text" bind:value={$btnText} />
  <Input small type="color" label="--btn-primary" bind:value={$btnPrimary} />
  <Input
    small
    type="color"
    label="--btn-primary-hover"
    bind:value={$btnPrimaryHover}
  />
  <Input
    small
    type="color"
    label="--btn-primary-focus"
    bind:value={$btnPrimaryFocus}
  />
  <Input small type="color" label="--btn-error" bind:value={$btnError} />
  <Input
    small
    type="color"
    label="--btn-error-hover"
    bind:value={$btnErrorHover}
  />
  <Input
    small
    type="color"
    label="--btn-error-focus"
    bind:value={$btnErrorFocus}
  />
  <Input small type="color" label="--btn-ghost" bind:value={$btnGhost} />
  <Input
    small
    type="color"
    label="--btn-ghost-hover"
    bind:value={$btnGhostHover}
  />
  <Input
    small
    type="color"
    label="--btn-ghost-focus"
    bind:value={$btnGhostFocus}
  />
{:else if $page.url.pathname === '/toast'}
  <Input small type="color" label="--toast-text" bind:value={$toastText} />
  <Input
    small
    type="color"
    label="--toast-success"
    bind:value={$toastSuccess}
  />
  <Input small type="color" label="--toast-error" bind:value={$toastError} />
  <Input
    small
    type="color"
    label="--toast-warning"
    bind:value={$toastWarning}
  />
  <Input small type="color" label="--toast-info" bind:value={$toastInfo} />
  <Input
    small
    type="color"
    label="--toast-info-text"
    bind:value={$toastInfoText}
  />
{:else if $page.url.pathname === '/drawer'}
  <Input
    small
    type="color"
    label="--drawer-background"
    bind:value={$drawerBackground}
  />
{:else if $page.url.pathname === '/table'}
  <Input small type="color" label="--table-header" bind:value={$tableHeader} />
  <Input small type="color" label="--table-body" bind:value={$tableBody} />
  <Input small type="color" label="--table-footer" bind:value={$tableFooter} />
{:else if $page.url.pathname === '/dropdown'}
  <Input
    small
    type="color"
    label="--dropdown-background"
    bind:value={$dropdownBackground}
  />
{:else if $page.url.pathname === '/tooltip'}
  <Input
    small
    type="color"
    label="--tooltip-background"
    bind:value={$tooltipBackground}
  />
  <Input small type="color" label="--tooltip-text" bind:value={$tooltipText} />
{:else if $page.url.pathname === '/checkbox'}
  <Input small type="color" label="--accent" bind:value={$accent} />
{/if}
