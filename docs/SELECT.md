### [Go back](https://github.com/mpiorowski/svelte-init#components)

# Select

```
import { Select } from "@mpiorowski/svelte-init";
```

# Usage

```
<Select
    label="Select label"
    bind:value={selectValue}
  >
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Select>
```

```
<Select
    label="Select label"
    bind:value={selectValue}
    required={true}
    disabled={false}
    error="Field must not be empty"
  >
    <option disabled value="">Chose one...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Select>
```

| Prop     | Values  | Default |
| -------- | ------- | ------- |
| value    | unknown |         |
| label    | string  |         |
| error    | string  | ""      |
| require  | boolean | false   |
| disabled | boolean | false   |
