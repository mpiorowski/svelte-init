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

| Prop        | Values                                                         | Default |
| ----------- | -------------------------------------------------------------- | ------- |
| value       | unknown                                                        |         |
| label       | string                                                         |         |
| name        | string                                                         | ''      |
| error       | string                                                         | ''      |
| type        | `text`, `password`, `email`, `datetime-local`, `date`, `color` | `text`  |
| placeholder | string                                                         | ''      |
| require     | boolean                                                        | false   |
| disabled    | boolean                                                        | false   |
| small       | boolean                                                        | false   |
| maxlength   | number                                                         |         |
