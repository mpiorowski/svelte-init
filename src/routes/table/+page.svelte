<script lang="ts">
    import { Table } from '../../lib';
    import { fade } from 'svelte/transition';
</script>

<div in:fade class="content">
    <h1>Table</h1>
    <Table>
        <svelte:fragment slot="header">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
        </svelte:fragment>
        <svelte:fragment slot="body">
            <tr>
                <td>John</td>
                <td>25</td>
                <td>email@gmail.com</td>
            </tr>
            <tr>
                <td>Jane</td>
                <td>24</td>
                <td>email@gmail.com</td>
            </tr>
            <tr>
                <td>Jane</td>
                <td>24</td>
                <td>email@gmail.com</td>
            </tr>
        </svelte:fragment>
        <svelte:fragment slot="footer">
            <tr>
                <td>Sum</td>
                <td>56</td>
                <td />
            </tr>
        </svelte:fragment>
    </Table>
</div>
