<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<div in:fade style="display: flex; gap: 20px; flex-direction: column;">
  <h1>Instalation</h1>

  <pre>npm install @mpiorowski/svelte-init</pre>

  <h2>Usage</h2>

  Import preflight.css in +layout.svelte. This is a basic Tailwind preflight,
  that clears out the browser css. Much easier to work with it.

  <pre>
  # +layout.svelte
  import "@mpiorowski/svelte-init/@preflight.css";
</pre>

  Add css config to Your main css file.

  <pre>
:root &#123;
  --btn-primary: #006d75;
  --btn-primary-hover: #08979c;
  --btn-primary-focus: #13c2c2;
  --btn-error: #a8071a;
  --btn-error-hover: #cf1322;
  --btn-error-focus: #f5222d;
  --btn-ghost: #8c8c8c;
  --btn-ghost-hover: #bfbfbf;
  --btn-ghost-focus: #d9d9d9;

  --input-primary: #595959;
  --input-focus: #bfbfbf;
  --input-error: #f5222d;
  --input-placeholder: #bfbfbf;

  --accent: #13c2c2;

  --toast-text: #ffffff;
  --toast-success: #237804;
  --toast-error: #a8071a;
  --toast-warning: #ad8b00;
  --toast-info: #0050b3;
  --toast-info-text: #ffffff;

  --drawer-background: #434343;

  --table-header: #434343;
  --table-body: #595959;
  --table-footer: #434343;

  --dropdown-background: #595959;

  --tooltip-background: #595959;
  --tooltip-text: #ffffff;

  --shadow: 0 0 0 0px #fff, 0 0 0 0px #fff, 
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);
&#125;

.no-scroll &#123;
  overflow: hidden;
&#125;
</pre>

  Import Your desired component.
  <pre>import &#123; Button &#125; from "@svelteUi";</pre>
</div>

<style>
  pre {
    background-color: #707070;
    border-radius: 0.25rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }
</style>
