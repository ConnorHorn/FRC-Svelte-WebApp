<script>
    import {matchStage, name, teamNumber, alliance} from "./stores";


    //changes the alliance button whenever you click it
    function updateAlliance(){

        if($alliance === "Red"){
            alliance.update(n=>"Blue")
        }
        else{
            alliance.update(n=>"Red")
        }
    }

    function startMatch(){
        matchStage.update(n=>n+1)
    }
</script>



<!--the big text-->
<div tabindex="0" class="collapse border border-base-300 bg-base-100 rounded-box text-6xl font-bold text-secondary" style="font-family: Roboto,sans-serif">
    <div class="collapse-title font-6xl">
        AdvantageScout_Scuffed
    </div>
    <div class="collapse-content">
<!--        funny gif-->
        <p><img src="https://c.tenor.com/bGHiHQn8kwUAAAAM/huh-huhh.gif" alt="HUH Cat"></p>
    </div>
</div>


<div class="ml-[385px] mt-[100px] absolute">
<!--    Name Input-->
    <input type="text" bind:value={$name} placeholder="Name" class="input input-bordered border-primary w-[260px] h-[50px] text-xl text-primary" />
    <br>
<!--    Team Number input, could be a dropdown-->
    <input type="text" bind:value={$teamNumber} placeholder="Team #" class="input input-bordered border-primary w-[260px] h-[50px] mt-3 text-xl text-primary" />
    <br>
<!--Alliance Button-->
    {#if $alliance==="Red"}
    <button on:click={updateAlliance} class="btn btn-outline btn-error w-[260px] h-[75px] mt-3 text-2xl">Red Alliance</button>
        {:else}
        <button on:click={updateAlliance} class="btn btn-outline btn-primary w-[260px] h-[75px] mt-3 text-2xl">Blue Alliance</button>
        {/if}
    <br>
    <button on:click = {startMatch} class="btn btn-outline btn-success w-[260px] h-[75px] mt-3 text-2xl">Start</button>
</div>
