import { writable } from 'svelte/store';

export const background = writable('#262626');
export const text = writable('#ffffff');

export const btnText = writable('#ffffff');
export const btnPrimary = writable('#006d75');
export const btnPrimaryHover = writable('#08979c');
export const btnPrimaryFocus = writable('#13c2c2');
export const btnError = writable('#a8071a');
export const btnErrorHover = writable('#cf1322');
export const btnErrorFocus = writable('#f5222d');
export const btnGhost = writable('#8c8c8c');
export const btnGhostHover = writable('#bfbfbf');
export const btnGhostFocus = writable('#d9d9d9');
export const inputPrimary = writable('#595959');
export const inputFocus = writable('#bfbfbf');
export const inputError = writable('#f5222d');
export const inputPlaceholder = writable('#bfbfbf');
export const accent = writable('#13c2c2');
export const toastText = writable('#ffffff');
export const toastSuccess = writable('#237804');
export const toastError = writable('#a8071a');
export const toastWarning = writable('#ad8b00');
export const toastInfo = writable('#0050b3');
export const toastInfoText = writable('#ffffff');
export const drawerBackground = writable('#434343');
export const tableHeader = writable('#434343');
export const tableBody = writable('#595959');
export const tableFooter = writable('#434343');
export const dropdownBackground = writable('#595959');
export const tooltipBackground = writable('#595959');
export const tooltipText = writable('#ffffff');
export const shadow = writable(
    '0 0 0 0px #fff, 0 0 0 0px #fff, 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
);
