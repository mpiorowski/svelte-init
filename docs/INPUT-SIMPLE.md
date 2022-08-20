### [Go back](https://github.com/mpiorowski/svelte-init#components)

# InputSimple

```
import { InputSimple } from "@mpiorowski/svelte-init";
```

# Usage

```
<InputSimple placeholder="Input placeholder" bind:value={inputValue} />
```

```
<InputSimple placeholder="Input placeholder" bind:value={inputValue} disabled={false} />
```

| Prop        | Values                                                                   | Default |
| ----------- | ------------------------------------------------------------------------ | ------- |
| value       | unknown                                                                  |         |
| placeholder | string                                                                   |         |
| type        | `text`, `number`, `password`, `email`, `datetime-local`, `date`, `color` | `text`  |
| disabled    | boolean                                                                  | false   |
