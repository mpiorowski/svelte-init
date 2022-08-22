<script lang="ts">
  import { Input } from '$lib';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { background, text } from '../store';
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
    shadow,
  } from '../store';

  let styles: CSSStyleDeclaration;
  onMount(() => {
    styles = document.body.style;
  });
  $: if (styles) {
    styles.setProperty('--text', $text);
    styles.setProperty('--background', $background);
  }
</script>

<div class="content" in:fade>
  <h1>Config</h1>

  <h3>
    Set up background and text color to play with different color
    configurations.
  </h3>
  <Input small type="color" label="--background" bind:value={$background} />
  <Input small type="color" label="--text" bind:value={$text} />

  <h3>
    Here You get the color configuration You have used throughtout this demo.
    Copy / pase it into Your main css file in Your project.
  </h3>
  <pre>
  {`
  :root {
    --btn-text: ${$btnText};
    --btn-primary: ${$btnPrimary};
    --btn-primary-hover: ${$btnPrimaryHover};
    --btn-primary-focus: ${$btnPrimaryFocus};
    --btn-error: ${$btnError};
    --btn-error-hover: ${$btnErrorHover};
    --btn-error-focus: ${$btnErrorFocus};
    --btn-ghost: ${$btnGhost};
    --btn-ghost-hover: ${$btnGhostHover};
    --btn-ghost-focus: ${$btnGhostFocus};

    --input-primary: ${$inputPrimary};
    --input-focus: ${$inputFocus};
    --input-error: ${$inputError};
    --input-placeholder: ${$inputPlaceholder};

    --accent: ${$accent};

    --toast-text: ${$toastText};
    --toast-success: ${$toastSuccess};
    --toast-error: ${$toastError};
    --toast-warning: ${$toastWarning};
    --toast-info: ${$toastInfo};
    --toast-info-text: ${$toastInfoText};

    --drawer-background: ${$drawerBackground};

    --table-header: ${$tableHeader};
    --table-body: ${$tableBody};
    --table-footer: ${$tableFooter};

    --dropdown-background: ${$dropdownBackground};

    --tooltip-background: ${$tooltipBackground};
    --tooltip-text: ${$tooltipText};

    --shadow: ${$shadow};
  }
  `}
  </pre>
</div>

<style>
  .content {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  pre {
    padding: 1rem;
    background-color: gray;
    border-radius: 6px;
    overflow: auto;
  }
</style>
