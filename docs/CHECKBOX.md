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
<Checkbox bind:checked={chekboxValue} onChange={() => console.log('changed!')}>True / false values</Checkbox>
```

| Prop     | Values     | Default   |
| -------- | ---------- | --------- |
| checked  | boolean    |           |
| onChange | () => void | undefined |
