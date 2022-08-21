# Functions

## useAccordion

```
<script lang="ts">
  import { useAccordion, accordionReducer } from '@mpiorowski/svelte-init';

  const { openedIndex, toggleIndex } = useAccordion(accordionReducer)
</script>
```

You can set up Your accordion logic by passing custom reducer into useAccordion().

## usePagination

```
<script lang="ts">
  import { usePagination } from '@mpiorowski/svelte-init';

  const { paginate, pagination, calcPageCount, actions: { changePage, increment, decrement } } = usePagination();

  const data = [ ... ];
  calcPageCount(sortedData.length);
</script>

<div>
 {#each paginate(data, $pagination.pageNumber)}
    ...
 {/each}
</div>
```

## useClickOutside

```
<script lang="ts">
  import { useClickOutside } from '@mpiorowski/svelte-init';
</script>

<div use:useClickOutside={() => console.log('clicked')}>
  ...
</div>
```