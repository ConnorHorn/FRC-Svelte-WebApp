<script>
    import HeaderBlob from "./HeaderBlob.svelte";
    import { fade, fly } from 'svelte/transition';
    import {clicks} from "./stores";
    import {attentionAlert} from "./stores";
    import AutoBlob from "./AutoBlob.svelte";

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
<AutoBlob/>







