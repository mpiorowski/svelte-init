<script lang="ts">
    export let group: boolean | string | string[];
    export let values: {
        value: string | boolean;
        label: string;
    }[];
    export let type: 'radio' | 'checkbox' = 'checkbox';
</script>

{#each values as value}
    {#if type === 'checkbox'}
        <label class="group">
            <input bind:group value={value.value} type="checkbox" />
            {value.label}
        </label>
    {/if}
    {#if type === 'radio'}
        <label class="group">
            <input bind:group value={value.value} type="radio" />
            {value.label}
        </label>
    {/if}
{/each}

<style>
    .group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        user-select: none;
        font-weight: bold;
    }
    .group:hover {
        cursor: pointer;
    }
    input {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 0.25rem;
        accent-color: var(--accent);
    }
    input:hover {
        cursor: pointer;
    }
</style>
