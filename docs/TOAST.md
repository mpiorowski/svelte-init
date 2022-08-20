### [Go back](https://github.com/mpiorowski/svelte-init#components)

# Toast

Import `Toast` and use it in Your **+layout.svelte**.

```
import { Toast } from "@mpiorowski/svelte-init";
<Toast />
```

Optionaly You can set default messages for predefined functions.

```
import { Toast } from "@mpiorowski/svelte-init";
<Toast saveMsg="Data saved" errorMsg="Somethign wne wrong" deleteMsg="Data deleted" />
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
