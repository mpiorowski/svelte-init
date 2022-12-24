<script lang="ts">
    import { fade } from 'svelte/transition';
    import { Button, Drawer } from '$lib';

    let isDrawerOpen = false;
</script>

<div in:fade class="content">
    <h1>Drawer</h1>
    <Drawer isOpen={isDrawerOpen} onClose={() => (isDrawerOpen = false)}>
        <svelte:fragment slot="content">
            <h1>Drawer Title</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nonne, inquit, iudicas me, quamquam te ipse adiutus es, si ista
                dicere non possum? Quis istud possit, inquit, negare? Duo Reges:
                constructio interrete. Sed quid sentiat, non videtis. Quodsi
                ipsam honestatem undique pertectam atque absolutam describere
                nemo potest, tamen ad haec mera refereatur.
            </p>
        </svelte:fragment>
        <svelte:fragment slot="footer">
            <Button on:click={() => (isDrawerOpen = false)} type="ghost">
                Close
            </Button>
            <Button on:click={() => alert('Submitting!')}>Submit</Button>
        </svelte:fragment>
    </Drawer>

    <Button on:click={() => (isDrawerOpen = true)}>Open drawer</Button>
</div>
