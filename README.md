<p align="center">
  <a href="https://github.com/mpiorowski/svelte-init/#readme" target="_blank">
    <img width="300" src="./static/logo.png" alt="SvelteInit">
  </a>
</p>

<p align="center">
  A low-overhead Svelte UI library with the basic, most useful components, to help with the initial development.
</p>

<div align="center">

[![npm](https://img.shields.io/github/license/mpiorowski/svelte-init)](https://github.com/mpiorowski/svelte-init/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/@mpiorowski/svelte-init)](https://www.npmjs.com/package/@mpiorowski/svelte-init)
[![npm](https://img.shields.io/bundlephobia/min/@mpiorowski/svelte-init)](https://www.npmjs.com/package/@mpiorowski/svelte-init)

</div>

## Demo

[svelte-init.vercel.app](https://svelte-init.vercel.app)

## Features

-   It just works, import one file and You're ready to go :)
-   Written fully in [TypeScript](https://typescriptlang.org/)
-   Basic color configuration using css variables
-   No third-party dependency usage
-   Using [tailwind preflight](https://tailwindcss.com/docs/preflight) css setup
-   No dark / light theme included, but can be easly achived using:

```
document.body.style.setProperty()
```

## Components

-   [Button](https://github.com/mpiorowski/svelte-init/blob/main/docs/BUTTOM.md)
-   [Input](https://github.com/mpiorowski/svelte-init/blob/main/docs/INPUT.md)
-   [InputNumber](https://github.com/mpiorowski/svelte-init/blob/main/docs/INPUT-NUMBER.md)
-   [InputSimple](https://github.com/mpiorowski/svelte-init/blob/main/docs/INPUT-SIMPLE.md)
-   [Textarea](https://github.com/mpiorowski/svelte-init/blob/main/docs/TEXTAREA.md)
-   [Select](https://github.com/mpiorowski/svelte-init/blob/main/docs/SELECT.md)
-   [Checkbox](https://github.com/mpiorowski/svelte-init/blob/main/docs/CHECKBOX.md)
-   [CheckboxGroup](https://github.com/mpiorowski/svelte-init/blob/main/docs/CHECKBOX-GROUP.md)
-   [Toast](https://github.com/mpiorowski/svelte-init/blob/main/docs/TOAST.md)
-   [Drawer](https://github.com/mpiorowski/svelte-init/blob/main/docs/DRAWER.md)
-   [Dropdown](https://github.com/mpiorowski/svelte-init/blob/main/docs/DROPDOWN.md)
-   [Tooltip](https://github.com/mpiorowski/svelte-init/blob/main/docs/TOOLTIP.md)
-   [Table](https://github.com/mpiorowski/svelte-init/blob/main/docs/TABLE.md)
-   [Spinner](https://github.com/mpiorowski/svelte-init/blob/main/docs/SPINNER.md)

## Functions

-   [useMediaQuery](https://github.com/mpiorowski/svelte-init/blob/main/docs/FUNCTIONS.md#useMediaQuery)
-   [useAccordion](https://github.com/mpiorowski/svelte-init/blob/main/docs/FUNCTIONS.md#useAccordion)
-   [usePagination](https://github.com/mpiorowski/svelte-init/blob/main/docs/FUNCTIONS.md#usePagination)
-   [useClickOutside](https://github.com/mpiorowski/svelte-init/blob/main/docs/FUNCTIONS.md#useClickOutside)

## Icons
-   [avatarIcon](https://github.com/mpiorowski/svelte-init/blob/main/docs/ICONS.md)
-   [githubIcon](https://github.com/mpiorowski/svelte-init/blob/main/docs/ICONS.md)
-   [npmIcon](https://github.com/mpiorowski/svelte-init/blob/main/docs/ICONS.md)

## Instalation

```
npm install @mpiorowski/svelte-init
```

```
import '@mpiorowski/svelte-init/styles.css';
```

Import `styles.css` as soon as possible in Your app. If using sveltekit, you can import it in Your main `+layout.svelte`.

## Optional configuration

In Your global css file (must be imported after `styles.css` to override styles) you can set any of the global variables and change the default color. List of all available variables:

```
:root {
  --btn-text: #ffffff;
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

  --shadow: 0 0 0 0px #fff, 0 0 0 0px #fff, 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}
```
