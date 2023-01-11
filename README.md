<p align="center">
  <a href="https://github.com/mpiorowski/svelte-init/#readme" target="_blank">
    <img width="300" src="./static/logo.png" alt="SvelteInit">
  </a>
</p>

<p align="center">
  A low-overhead Svelte UI library with the basic, most useful components and functions, to help with the initial development.
</p>

<div align="center">

[![npm](https://img.shields.io/github/license/mpiorowski/svelte-init)](https://github.com/mpiorowski/svelte-init/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/@mpiorowski/svelte-init)](https://www.npmjs.com/package/@mpiorowski/svelte-init)
[![npm](https://img.shields.io/bundlephobia/min/@mpiorowski/svelte-init)](https://www.npmjs.com/package/@mpiorowski/svelte-init)

</div>

## Demo

[svelte-init.vercel.app](https://svelte-init.vercel.app)

## Features

-   Working out of the box most useful components, without any additional configuration.
-   Written fully in [TypeScript](https://typescriptlang.org/)
-   Using [Tailwind](https://tailwindcss.com) for styling. But can be done with pure css also :).
-   No dark / light theme included, but can be easly achived using tailwind theme.

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
-   [Modal](https://github.com/mpiorowski/svelte-init/blob/main/docs/MODAL.md)
-   [Dropdown](https://github.com/mpiorowski/svelte-init/blob/main/docs/DROPDOWN.md)
-   [Tooltip](https://github.com/mpiorowski/svelte-init/blob/main/docs/TOOLTIP.md)
-   [Spinner](https://github.com/mpiorowski/svelte-init/blob/main/docs/SPINNER.md)

## Functions

-   [useMediaQuery](https://github.com/mpiorowski/svelte-init/blob/main/docs/FUNCTIONS.md#useMediaQuery)
-   [useAccordion](https://github.com/mpiorowski/svelte-init/blob/main/docs/FUNCTIONS.md#useAccordion)
-   [usePagination](https://github.com/mpiorowski/svelte-init/blob/main/docs/FUNCTIONS.md#usePagination)
-   [useClickOutside](https://github.com/mpiorowski/svelte-init/blob/main/docs/FUNCTIONS.md#useClickOutside)

## Instalation

```
npm install @mpiorowski/svelte-init
```
Inside Your main *.css file (imported in root layout) paste color/shadow configuration:
```
:focus {
    outline: none;
}

.no-scroll {
    overflow: hidden;
}

.input {
    @apply shadow transition bg-white border border-gray-300 hover:border-gray-400 focus:ring focus:ring-gray-200 placeholder-gray-300;
}
.input.error {
    @apply border border-red-500 placeholder-red-500;
}
.text-error {
    @apply text-red-500;
}
input[type="checkbox"], input[type="radio"] {
    @apply accent-slate-600;
}
.button {
    @apply shadow transition;
}
.button.primary {
    @apply bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-600 focus:ring;
}
.button.error {
    @apply bg-red-500 text-white hover:bg-red-600 focus:ring-red-600 focus:ring;
}
.button.ghost {
    @apply bg-gray-200 text-gray-600 hover:bg-gray-300 focus:ring-gray-300 focus:ring;
}
.button.primary.link {
    @apply text-blue-500 hover:underline hover:bg-white;
}
.button.error.link {
    @apply text-red-500 hover:underline hover:bg-white;
}
.button.ghost.link {
    @apply text-gray-600 hover:underline hover:bg-white;
}
.toast {
    @apply shadow-md;
}
.toast.success {
    @apply bg-green-500 text-white;
}
.toast.error {
    @apply bg-red-500 text-white;
}
.toast.info {
    @apply bg-blue-500 text-white;
}
.toast.warning {
    @apply bg-yellow-500 text-white;
}
.drawer, .modal {
    @apply shadow-md bg-gray-100;
}
.dropdown {
    @apply shadow transition bg-white border border-gray-300;
}
.tooltip-text {
    @apply shadow transition bg-gray-600 text-gray-200;
}
```
