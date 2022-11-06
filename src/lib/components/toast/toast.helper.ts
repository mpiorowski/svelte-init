import { writable } from 'svelte/store';
type Toast = {
    id: string;
    type: ToastType;
    message: string;
    icon?: string;
};

export enum ToastType {
    INFO = 'info',
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
}

export const notifications = writable<Toast[]>([]);

export const toast = (
    message: string,
    type: ToastType,
    timeout = 3000
): void => {
    const id = crypto.randomUUID();
    notifications.update((state) => {
        return [...state, { id: id, message, type }];
    });
    setTimeout(() => {
        notifications.update((state) => {
            return state.filter((t) => t.id !== id);
        });
    }, timeout);
};

export const removeToast = (id: string): void => {
    notifications.update((state) => {
        return state.filter((t) => t.id !== id);
    });
};

export const toastSave = (): void =>
    toast('common.saved', ToastType.SUCCESS, 3000);
export const toastError = (): void =>
    toast('common.error', ToastType.ERROR, 3000);
export const toastDelete = (): void =>
    toast('common.deleted', ToastType.WARNING, 3000);
