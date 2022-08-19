<p align="center">
  <h1 align="center">SvelteInit</h1>
</p>

<p align="center">
  A low-overhead Svelte UI library with the basic, most useful components, to help with the initial development.
</p>

<p align="center">
    
</p>

---

## [Demo](https://demo.com/)

## Features

- It just works, copy two files, and You're ready to go
- Written fully in [TypeScript](https://typescriptlang.org/)
- Basic color configuration using css variables
- No third-party dependency usage
- No dark / light theme included, but can be easly achived using:

```
document.body.style.setProperty()
```

## Instalation

```
npm install @mpiorowski/svelte-init
```

In Your `+layout.svelte` add `preflight.css` (copied from [tailwind](https://tailwindcss.com/docs/preflight)). It set's up initial css, so it's much easier to work with it.

```
import "preflight.css" from "@mpiorowski/svelte-init";
```

In Your `app.css` add basic colors variables. If it doesn't exsits, add it and import it in `+layout.svelte`.

```
:root {
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

.no-scroll {
  overflow: hidden;
}
```

## Usage

```
import { Button } '@mpiorowski/svelte-init'
```

```
<Button>Open</Button>
```

## Contributing

All contributions and new ideas are really welcome, but please remember, that we want to keep it simple :). All new features can be discussted [here](https://github.com/mpiorowski/svelte-init/discussions).
