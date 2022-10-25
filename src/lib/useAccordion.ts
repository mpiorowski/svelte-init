import { writable, type Writable } from 'svelte/store';

export const accordionReducer = (
    index: number,
    openedIndex: Writable<number[]>
) => {
    openedIndex.update((val) => {
        const closing = val.includes(index);
        if (closing) {
            return val.filter((i) => i !== index);
        } else {
            return [index];
        }
    });
};

export const useAccordion = (initReducer = accordionReducer) => {
    const openedIndex = writable<number[]>([]);
    const toggleIndex = (index: number) => {
        initReducer(index, openedIndex);
    };

    return {
        openedIndex: openedIndex,
        toggleIndex: toggleIndex,
    };
};
