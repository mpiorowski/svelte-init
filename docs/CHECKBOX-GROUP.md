### [Go back](https://github.com/mpiorowski/svelte-init#components)

# Checkbox Group

```
import { CheckboxGroup } from "@mpiorowski/svelte-init";
```

# Usage

```
<CheckboxGroup bind:group={checkboxGroupValues} values={ [ { value: 'value1', label: 'Label1' }, { value: 'value2', label: 'Label2' } ]} />
```

```
<CheckboxGroup bind:group={radioGroupValues} values={ [ { value: 'value1', label: 'Label1' }, { value: 'value2', label: 'Label2' } ]} type='radio' />
```

| Prop   | Values                              | Default    |
| ------ | ----------------------------------- | ---------- |
| group  | string, string[]                    |            |
| values | { value: string; label: string; }[] |            |
| type   | `checkbox`, `radio`                 | `checkbox` |
