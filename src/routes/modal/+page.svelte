<script lang="ts">
    import { fade } from 'svelte/transition';
    import { Button, CheckboxGroup, Confirmation, Modal } from '$lib';

    let isOpen = false;
    let sizeArray = [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
    ];
    let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<div in:fade class="content">
    <h1>Modal</h1>
    <Modal {isOpen} onClose={() => (isOpen = false)} {size}>
        <svelte:fragment slot="content">
            <h2>Modal</h2>
            <p>Modal content</p>
        </svelte:fragment>
        <svelte:fragment slot="footer">
            <Button on:click={() => (isOpen = false)} type="ghost">
                Close
            </Button>
            <Button on:click={() => (isOpen = false)}>Submit</Button>
        </svelte:fragment>
        <div>Modal</div>
    </Modal>
    <CheckboxGroup type="radio" bind:group={size} bind:values={sizeArray} />
    <Button on:click={() => (isOpen = true)}>Open modal</Button>
    <h2>Confirmation modal</h2>
    <Confirmation
        {size}
        action={() => {
            alert('Confirmed');
        }}
    >
    <svelte:fragment slot="button">
        Open confirmation modal
    </svelte:fragment>
    <svelte:fragment slot="content">
        <h2>Confirmation</h2>
        <p>Confirmation content</p>
    </svelte:fragment>
    </Confirmation>
</div>
