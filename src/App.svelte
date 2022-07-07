<script>
    import HeaderBlob from "./HeaderBlob.svelte";
    import {clicks} from "./stores";
    import {attentionAlert} from "./stores";

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

{attentionAlertValue}
{clicksValue}

