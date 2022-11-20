### [Go back](https://github.com/mpiorowski/svelte-init#components)

# Dropdown

```
import { Dropdown } from "@mpiorowski/svelte-init";
```

# Usage

```
<script lang="ts">
  import { Button, Dropdown } from "@mpiorowski/svelte-init";

  let isOpen = false;
</script>

<Dropdown
    position="left"
    {isOpen}
    onClickOutside={() => {
        isOpen = false;
    }}
>
  <svelte:fragment slot="button">
    <Button type="ghost">Dropdown</Button>
  </svelte:fragment>
  <svelte:fragment slot="content">
    <button 
        on:click={() => {
            isOpen = false;
        }}
    >
        email@gmail.com
    </button>
  </svelte:fragment>
</Dropdown>
```

| Prop           | Values                    | Default   |
| -------------- | ------------------------- | --------- |
| isOpen         | `boolean`                 |           |
| onClickOutside | () => void                | undefined |
| position       | `left`, `right`, `center` | right     |
