
<script>
    import {SvelteComponent} from "svelte";
    import { clicks } from './stores.js';
    import {attentionAlert} from "./stores.js";
    let teamNumber = 6328
    let alliance = "Blue"
    let attention = false;
    let teammate1 = 6328
    let teammate2 = 3467
    let teammate3 = 2713
    let teammate1Name = "Mechanical Advantage"
    let teammate2Name = "Windham Windup"
    let teammate3Name = "iRaiders"
    let mode = 1
    let modeString = "auto"
    function modeShift(){
        if(mode<3){
            mode++
        }
        else{
            mode=1
        }
        if(mode===1){
            modeString="auto"
        }
        else if(mode===2){
            modeString="tele"
        }
        else{
            modeString="end"
        }
    }

    function attentionShift(){
        attention = !attention
        attentionAlert.update(n=>!n)
    }

    function increment6328() {
        clicks.update(n => n + 1);
    }
</script>

<header class="flex items-start gap-x-1" >
<!--Controls Stage of Match-->
    <button style="font-size: 75px; font-family: Roboto,sans-serif"  on:click={modeShift}  class="w-2/6 h-24 btn btn-outline btn-primary">{modeString}</button>

<!--Undo Button-->
    <button style="font-size: 35px; font-family: Roboto,sans-serif" class="w-1/6 h-24 btn btn-outline btn-secondary">Undo</button>

<!--Team Number-->
    <button on:click={increment6328} style="font-size: 35px; font-family: Roboto,sans-serif" class="w-1/6 h-24 btn btn-outline btn-secondary">{teamNumber}</button>

<!--Attention Alert Button-->
    {#if attention}
        <!--Attention Button On-->
        <button on:click={attentionShift} style="font-size: 25px; font-family: Roboto,sans-serif" class="w-1/6 h-24 btn btn-error">Attention</button>

    {:else}
        <!--Attention Button Off-->
        <button on:click={attentionShift} style="font-size: 25px; font-family: Roboto,sans-serif" class="w-1/6 h-24 btn btn-outline btn-secondary">Attention</button>

    {/if}

    <!--Alliance Color-->
    {#if alliance==="Red"}
        <!--Red Alliance-->
        <label style="font-size: 25px; font-family: Roboto,sans-serif" for="my-modal-4" class="btn modal-button w-1/6 h-24 btn btn-outline btn-error">Red</label>
    {:else}
        <!--Blue Alliance-->
        <label style="font-size: 25px; font-family: Roboto,sans-serif" for="my-modal-4" class="btn modal-button w-1/6 h-24 btn btn-outline btn-primary">Blue</label>

    {/if}


    <!--Alliance Summary Modal-->
    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
    <label for="my-modal-4" class="modal cursor-pointer" style ="font-family: Roboto,sans-serif">
        <label class="modal-box relative">
            <h3 class="text-lg font-bold">{alliance} Alliance Summary</h3>
            <p class="py-4">Driver Station 1: {teammate1} - {teammate1Name}</p>
            <p class="py-4">Driver Station 2: {teammate2} - {teammate2Name}</p>
            <p class="py-4">Driver Station 3: {teammate3} - {teammate3Name}</p>
        </label>
    </label>

</header>
