<script>
    import AutoLobby from "./AutoLobby.svelte";
    import AutoScout from "./AutoScout.svelte";
    import {autoStage} from "./stores";
    let stage;

    const autoStageSub = autoStage.subscribe(value => {
        stage = value;
    });


</script>

<!--legit just holds the two sections of auto and switches appropriately. Probably too convoluted but ¯\_(ツ)_/¯ -->
{#if stage===1}
    <AutoLobby/>
    {:else}
    <AutoScout/>
    {/if}


