<!-- <script lang="ts">
  export let pagination: { pageNumber: number; pageCount: number };
  export let actions: {
    increment: () => void;
    decrement: () => void;
    changePage: (index: number) => void;
  };
</script>

<nav aria-label="pagination">
  <ul class="pagination">
    <li on:click={actions.decrement}>
      <span class="previous">&lt;</span>
    </li>
    {#each Array(pagination.pageCount || 1) as _, i}
      <li on:click={() => actions.changePage(i + 1)}>
        <span
          aria-current={pagination.pageNumber === i + 1 ? 'page' : null}
          class={[
            'current',
            pagination.pageNumber === i + 1 ? 'active' : '',
          ].join(' ')}
        >
          {i + 1}
        </span>
      </li>
    {/each}
    <li on:click={actions.increment}>
      <span class="next">&gt;</span>
    </li>
  </ul>
</nav>

<style>
  .pagination {
    @apply inline-flex -space-x-px select-none;
  }
  .previous {
    @apply cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300;
  }
  .previous:hover {
    @apply bg-gray-100 text-gray-700;
  }
  .next {
    @apply cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300;
  }
  .next:hover {
    @apply bg-gray-100 text-gray-700;
  }
  .current {
    @apply cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300;
  }
  .current:hover {
    @apply bg-gray-100 text-gray-700;
  }
  .active {
    @apply bg-blue-50 text-blue-600;
  }
  .active:hover {
    @apply bg-blue-100 text-blue-700;
  }
</style> -->
