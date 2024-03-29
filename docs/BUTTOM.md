### [Go back](https://github.com/mpiorowski/svelte-init#components)

# Button

```
import { Button } from "@mpiorowski/svelte-init";
```

# Usage

```
<Button>Save</Button>
```

```
<Button type="ghost" loading={true} disabled={false} link={true}>Save</Button>
```

| Prop     | Values                      | Default   |
| -------- | --------------------------- | --------- |
| type     | `primary`, `error`, `ghost` | `primary` |
| loading  | boolean                     | false     |
| disabled | boolean                     | false     |
| form     | string                      | ""        |
| link     | boolean                     | false     |

If `form` prop is set, the button type is changed to `submit`.
