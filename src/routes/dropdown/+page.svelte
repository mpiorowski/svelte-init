<script lang="ts">
    import { fade } from 'svelte/transition';
    import { Button, Dropdown, CheckboxGroup } from '$lib';

    let position = [
        {
            value: 'left',
            label: 'Left',
        },
        {
            value: 'right',
            label: 'Right',
        },
    ];

    let group: 'left' | 'right' = 'left';
    let isOpen = false;
</script>

<div in:fade class="content">
    <h1>Dropdown</h1>
    <CheckboxGroup values={position} type="radio" bind:group />

    <Dropdown
        position={group}
        {isOpen}
        onClickOutside={() => {
            isOpen = false;
        }}
    >
        <svelte:fragment slot="button">
            <Button
                type="ghost"
                on:click={() => {
                    isOpen = !isOpen;
                }}
            >
                Dropdown
            </Button>
        </svelte:fragment>
        <svelte:fragment slot="content">
            <div>
                <div class="email">useremail@gmail.com</div>
                <div
                    on:click={() => {
                        isOpen = false;
                    }}
                    on:keypress={() => {
                        isOpen = false;
                    }}
                    class="logout"
                >
                    Logout
                </div>
            </div>
        </svelte:fragment>
    </Dropdown>
</div>

<style>
    .email {
        margin-top: 0.5rem;
        padding: 0.5rem;
        border-bottom: 1px solid gray;
    }
    .logout {
        margin-bottom: 0.5rem;
        padding: 0.5rem;
    }
    .logout:hover {
        background-color: #969393;
        cursor: pointer;
    }
</style>
