### [Go back](https://github.com/mpiorowski/svelte-init#components)

# InputNumber

```
import { InputNumber } from "@mpiorowski/svelte-init";
```

# Usage

```
<InputNumber label="Input number label" bind:value={inputValue} />
```

```
<InputNumber label="Input label" name="number" bind:value={inputValue} error="Field must not be empty" required={true} disabled={false} small={false} placeholder="Email"  />
```

| Prop        | Values         | Default   |
| ----------- | -------------- | --------- |
| value       | string, number |           |
| label       | string         |           |
| name        | string         | ""        |
| error       | string         | ""        |
| placeholder | string         | ""        |
| require     | boolean        | false     |
| disabled    | boolean        | false     |
| small       | boolean        | false     |
| max         | number         | undefined |
| min         | number         | undefined |
| step        | number         | 0.01      |
