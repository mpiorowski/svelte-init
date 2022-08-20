### [Go back](https://github.com/mpiorowski/svelte-init#components)

# Table

```
import { Table } from "@mpiorowski/svelte-init";
```

# Usage

```
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
```
