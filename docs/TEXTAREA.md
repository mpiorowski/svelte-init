### [Go back](https://github.com/mpiorowski/svelte-init#components)

# Textarea

```
import { Textarea } from "@mpiorowski/svelte-init";
```

# Usage

```
<Textarea label="Textarea label" bind:value={textareaValue} />
```

```
<Textarea label="Textarea label" bind:value={textareaValue} error="Field must not be empty" required={true} disabled={false} placeholder="Email"  />
```

| Prop        | Values  | Default |
| ----------- | ------- | ------- |
| value       | unknown |         |
| label       | string  |         |
| error       | string  | ""      |
| placeholder | string  | ""      |
| require     | boolean | false   |
| disabled    | boolean | false   |
| rows        | number  | 3       |
