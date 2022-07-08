<script>
    import HeaderBlob from "./HeaderBlob.svelte";
    import { fade, fly } from 'svelte/transition';
    import {clicks} from "./stores";
    import {attentionAlert} from "./stores";
    import AutoLobby from "./AutoLobby.svelte";
    import AutoManager from "./AutoManager.svelte";

    let clicksValue;
    let attentionAlertValue;

    const clickSubscription = clicks.subscribe(value => {
        clicksValue = value;
    });
    const attentionAlertSubscription = attentionAlert.subscribe(value => {
        attentionAlertValue = value;
    });


</script>

<HeaderBlob/>
<AutoManager/>







