
<script>
    import {SvelteComponent} from "svelte";
    let alliance = "red"
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
</script>

<header class="flex items-start gap-x-1" >

    <div class="grid overflow-hidden grid-cols-10 grid-rows-2 gap-2 place-items-center">
        <div class="box row-start-1 row-end-3 col-start-1 col-end-5">
            <button style="font-size: 75px; font-family: Roboto,sans-serif"  on:click={modeShift}  class="w-64 h-36 btn btn-outline btn-primary">{modeString}</button>
        </div>
        <div class="box row-start-1 row-end-2 col-start-5 col-end-8">
            <button style="font-size: 35px; font-family: Roboto,sans-serif" class="w-40 h-16 btn btn-outline btn-secondary">Undo</button>
        </div>
        <div class="box row-start-1 row-end-2 col-start-8 col-end-11">
            <button style="font-size: 35px; font-family: Roboto,sans-serif" class="w-40 h-16 btn btn-outline btn-secondary">6328</button>
        </div>
        <div class="box row-start-2 row-end-3 col-start-5 col-end-8">
            <button style="font-size: 25px; font-family: Roboto,sans-serif" class="w-40 h-16 btn btn-outline btn-secondary">Attention</button>
        </div>
        <div class="box row-start-2 row-end-3 col-start-8 col-end-11">
            {#if alliance="red"}
                <button style="font-size: 25px; font-family: Roboto,sans-serif" class="w-40 h-16 btn btn-outline btn-error ">Red</button>
            {:else}
                <button style="font-size: 25px; font-family: Roboto,sans-serif" class="w-40 h-16 btn btn-outline btn-primary ">Red</button>
            {/if}
        </div>
    </div>

</header>
