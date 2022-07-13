<script>
    import HeaderBlob from "./HeaderBlob.svelte";
    import {attentionAlert} from "./stores";
    import AutoManager from "./AutoManager.svelte";
    import {matchStage} from "./stores";
    import TeleScout from "./TeleScout.svelte";
    import PostScout from "./PostScout.svelte";
    import QRGenPage from "./QRGenPage.svelte";
    import StartPage from "./StartPage.svelte";


    let attentionAlertValue;
    let matchStageValue;
    let properSize;
    const matchValueSubscription = matchStage.subscribe(value => {
        matchStageValue = value;
    });
    const attentionAlertSubscription = attentionAlert.subscribe(value => {
        attentionAlertValue = value;
    });

    //Checks to see if the screen is the desired dimension. Only made for Kindle 7, so display outside of those dimensions will look awful because Im lazy
    properSize = window.innerWidth === 1024 &&  window.innerHeight === 600;

</script>


{#if properSize}
<main class:scroll-lock={true}>
<!--    if the stage is anything other than the preview/login screen-->
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

    <!--somehow stops the loading animation for the tarmac from doing weird scroll things-->
    <style>
    .scroll-lock {
        overflow-x: hidden;
        overflow-y: hidden;
    }
    </style>






