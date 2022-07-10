<script>
    import { onMount} from 'svelte';
    import AutoLobby from "./AutoLobby.svelte";
    import AutoScout from "./AutoScout.svelte";
    import {autoStage} from "./stores";
    let stage;

    const autoStageSub = autoStage.subscribe(value => {
        stage = value;
    });


</script>


{#if stage===1}
    <AutoLobby/>
    {:else}
    <AutoScout/>
    {/if}


