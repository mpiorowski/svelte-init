import { writable, type Writable } from 'svelte/store';

export const accordionReducer = (
    index: number | string,
    openedIndex: Writable<(number | string)[]>
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
    const openedIndex = writable<(number | string)[]>([]);
    const toggleIndex = (index: number | string) => {
        initReducer(index, openedIndex);
    };

    return {
        openedIndex: openedIndex,
        toggleIndex: toggleIndex,
    };
};
