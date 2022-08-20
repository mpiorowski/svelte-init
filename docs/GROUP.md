### [Go back](https://github.com/mpiorowski/svelte-init#components)

# Checkbox

```
import { Checkbox } from "@mpiorowski/svelte-init";
```

# Usage

```
<Checkbox bind:checked={chekboxValue}>True / false values</Checkbox>
```

```
<Checkbox bind:checked={chekboxValue} onChange={(e) => console.log(e)}>True / false values</Checkbox>
```

| Prop     | Values                                                        | Default   |
| -------- | ------------------------------------------------------------- | --------- |
| checked  | boolean                                                       |           |
| onChange | (e: {currentTarget: EventTarget & HTMLInputElement} ) => void | undefined |
