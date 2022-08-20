### [Go back](https://github.com/mpiorowski/svelte-init#components)

# Input

```
import { Input } from "@mpiorowski/svelte-init";
```

# Usage

```
<Input />
```

```
<Input label="Input label" name="email" bind:value={inputValue} error="Field must not be empty" type="email" required={true} disabled={false} small={false} placeholder="Email"  />
```

| Prop     | Values                  | Default   |
| -------- | ----------------------- | --------- |
| type     | `primary`, `error`, `g` | `primary` |
| loading  | boolean                 | false     |
| disabled | boolean                 | false     |
| form     | string                  | ''        |

If `form` prop is set, the button type is changed to `submit`.
