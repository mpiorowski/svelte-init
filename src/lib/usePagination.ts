import { writable } from 'svelte/store';

export const pagination = writable({ pageNumber: 1, pageCount: 0 });

export const usePagination = () => {
  const pageSize = 10;

  const increment = () => {
    pagination.update((data) => {
      const newPage = data.pageNumber + 1;
      if (newPage <= data.pageCount) {
        return { ...data, pageNumber: newPage };
      }
      return { ...data };
    });
  };
  const decrement = () => {
    pagination.update((data) => {
      const newPage = data.pageNumber - 1;
      if (newPage > 0) {
        return { ...data, pageNumber: newPage };
      }
      return { ...data };
    });
  };

  const changePage = (index: number) =>
    pagination.update((data) => ({ ...data, pageNumber: index }));

  const calcPageCount = (dataCount: number) => {
    pagination.update((data) => {
      return { ...data, pageCount: Math.floor(dataCount / pageSize) };
    });
  };

  const paginate = <T>(array: T[], pageNumber: number) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  };

  return {
    paginate,
    pagination,
    pageSize,
    calcPageCount,
    actions: {
      changePage,
      increment,
      decrement,
    },
  };
};
