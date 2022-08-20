### [Go back](https://github.com/mpiorowski/svelte-init#components)

# Tooltip

```
import { Tooltip } from "@mpiorowski/svelte-init";
```

# Usage

```
<Tooltip tooltip={'tooltip text'} position={'top'} move={0.2}>
  <div>Hoverable element with tooltip</div>
</Tooltip>
```

| Prop     | Values                           | Default |
| -------- | -------------------------------- | ------- |
| tooltip  | string                           |         |
| position | `top`, `right`, `left`, `bottom` | `top`   |
| move     | number                           | 0       |

`Move` prop is for small adjustments to tooltip position.
