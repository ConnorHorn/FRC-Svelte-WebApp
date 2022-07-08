<script>
    import HeaderBlob from "./HeaderBlob.svelte";
    import { fade, fly } from 'svelte/transition';
    import {clicks} from "./stores";
    import {attentionAlert} from "./stores";
    import AutoLobby from "./AutoLobby.svelte";
    import AutoManager from "./AutoManager.svelte";
    import {matchStage} from "./stores";

    let clicksValue;
    let attentionAlertValue;
    let matchStageValue;

    const clickSubscription = clicks.subscribe(value => {
        clicksValue = value;
    });
    const matchValueSubscription = matchStage.subscribe(value => {
        matchStageValue = value;
    });
    const attentionAlertSubscription = attentionAlert.subscribe(value => {
        attentionAlertValue = value;
    });


</script>


<HeaderBlob/>
{#if matchStageValue===1}
    <AutoManager/>
{:else if matchStageValue===2}
{:else}
{/if}







