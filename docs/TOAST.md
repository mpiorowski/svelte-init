### [Go back](https://github.com/mpiorowski/svelte-init#components)

# Toast

Import `Toast` in Your +layout.svelte

```
import { Toast } from "@mpiorowski/svelte-init";
```

# Usage

Use predefined functions:

```
import { toastSave, toastError, toastDelete } from "@mpiorowski/svelte-init";
toastSave();
toastError();
toastDelete();
```

Or use custom function:

```
import { toast, ToastType } from "@mpiorowski/svelte-init";
toast('Toast Message', ToastType.INFO, 3000);
```
