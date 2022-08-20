### [Go back](https://github.com/mpiorowski/svelte-init#components)

# Dropdown

```
import { Dropdown } from "@mpiorowski/svelte-init";
```

# Usage

```
<script lang="ts">
  import { Button, Dropdown } from "@mpiorowski/svelte-init";
</script>

<Dropdown position="left">
  <svelte:fragment slot="button">
    <Button type="ghost">Dropdown</Button>
  </svelte:fragment>
  <svelte:fragment slot="content">
    <div>
      <p>email1@gmail.com</p>
      <p>email2@gmail.com</p>
    </div>
  </svelte:fragment>
</Dropdown>
```

| Prop     | Values                    | Default |
| -------- | ------------------------- | ------- |
| position | `left`, `right`, `center` | right   |
