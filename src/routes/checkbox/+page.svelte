<script lang="ts">
    import { Checkbox, CheckboxGroup } from '$lib';
    import { fade } from 'svelte/transition';

    let checked = false;

    let checkboxValues = [
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
    ];

    let groupCheckbox: string[] = ['1'];
    let groupRadio = '1';
</script>

<div in:fade class="content">
    <h1>True / false Checkbox</h1>
    <Checkbox bind:checked>True / false Checkbox</Checkbox>
    Values: {checked}
    <h1>Checkbox Group</h1>
    <CheckboxGroup
        type="checkbox"
        values={checkboxValues}
        bind:group={groupCheckbox}
    />
    Values: {groupCheckbox}
    <h1>Radio Group</h1>
    <CheckboxGroup
        type="radio"
        values={checkboxValues}
        bind:group={groupRadio}
    />
    Values: {groupRadio}
</div>
