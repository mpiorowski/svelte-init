<script lang="ts">
    import { fade } from 'svelte/transition';
    import {
        Button,
        Input,
        InputNumber,
        Select,
        toast,
        toastDelete,
        toastError,
        toastSave,
        ToastType,
    } from '$lib';

    let toastMsg = '';
    let toastDuration = 3000;
    let toastType = ToastType.INFO;
</script>

<div in:fade class="content">
    <h1>Predefined Toast</h1>
    <div class="flex-gap">
        <Button on:click={toastSave}>Toast save</Button>
        <Button on:click={toastError}>Toast error</Button>
        <Button on:click={toastDelete}>Toast delete</Button>
    </div>

    <h1>Custom Toast</h1>
    <Input bind:value={toastMsg} label="Toast message" />
    <Select bind:value={toastType} label="Toast type">
        <option value={ToastType.INFO}>Info</option>
        <option value={ToastType.SUCCESS}>Success</option>
        <option value={ToastType.ERROR}>Error</option>
        <option value={ToastType.WARNING}>Warning</option>
    </Select>
    <InputNumber bind:value={toastDuration} label="Toast duration" />
    <Button on:click={() => toast(toastMsg, toastType, toastDuration)}>
        Custom toast
    </Button>
</div>

<style>
    .flex-gap {
        display: flex;
        gap: 10px;
    }
</style>
