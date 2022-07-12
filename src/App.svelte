<script>
    import HeaderBlob from "./HeaderBlob.svelte";
    import { fade, fly } from 'svelte/transition';
    import {clicks} from "./stores";
    import {attentionAlert} from "./stores";
    import AutoLobby from "./AutoLobby.svelte";
    import AutoManager from "./AutoManager.svelte";
    import {matchStage} from "./stores";
    import TeleScout from "./TeleScout.svelte";
    import PostScout from "./PostScout.svelte";
    import QRGenPage from "./QRGenPage.svelte";
    import StartPage from "./StartPage.svelte";

    let clicksValue;
    let attentionAlertValue;
    let matchStageValue;
    let properSize=false;

    const clickSubscription = clicks.subscribe(value => {
        clicksValue = value;
    });
    const matchValueSubscription = matchStage.subscribe(value => {
        matchStageValue = value;
    });
    const attentionAlertSubscription = attentionAlert.subscribe(value => {
        attentionAlertValue = value;
    });

    properSize = window.innerWidth === 1024 &&  window.innerHeight === 600;

</script>


{#if properSize}
<main class:scroll-lock={true}>

    {#if matchStageValue>0}
        <HeaderBlob/>
        {/if}
{#if matchStageValue===1}
    <AutoManager/>
{:else if matchStageValue===2}
<TeleScout/>
{:else if matchStageValue===3}
    <PostScout/>
    {:else if matchStageValue===4}
    <QRGenPage/>
    {:else if matchStageValue===0}
    <StartPage/>
{/if}
</main>
    {:else}
    Please resize your window to 1024x600 🙂
    {/if}

    <style>
    .scroll-lock {
        overflow-x: hidden;
        overflow-y: hidden;
    }
    </style>






