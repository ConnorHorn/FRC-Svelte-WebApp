<script>
    import {
        playDefenseDuration,
        playDefenseQuality,
        error,
        receiveDefenseDuration,
        intakeQuality,
        comment,
        drivingQuality,
        sauceQuality,
        matchStage
    } from "./stores";
    let defenseRating=0;
    let drivingRating=2;
    let defenseDuration=0;
    let recDefenseDuration=0;
    let sauceRating=1;
    let intakeRating=1;
    let badStatus=false;
    let commentText="";
    let matchStageValue;

    function shiftBad(){
        badStatus=!badStatus;
    }

    const defDurSub = playDefenseDuration.subscribe(value => {
        defenseDuration = value;
    });
    const recDefDurSub = receiveDefenseDuration.subscribe(value => {
        recDefenseDuration = value;
    });
    const defRatingSub = playDefenseQuality.subscribe(value => {
        defenseRating = value;
    });
    const errorSub = error.subscribe(value => {
        badStatus = value;
    });
    const intakeSub = intakeQuality.subscribe(value => {
        intakeRating = value;
    });
    const commentSub = comment.subscribe(value => {
        commentText = value;
    });
    const drivingSub = drivingQuality.subscribe(value => {
        drivingRating = value;
    })
    const sauceSub = sauceQuality.subscribe(value => {
        sauceRating = value;
    })
    const matchStageSub = matchStage.subscribe(value => {
        matchStageValue = value;
    })



    $: {
        updateStores(defenseDuration, recDefenseDuration, defenseRating, badStatus, intakeRating, commentText, drivingRating, sauceRating);
    }


    function updateStores(){
        playDefenseDuration.update(n=>defenseDuration);
        receiveDefenseDuration.update(n=>recDefenseDuration);
        playDefenseQuality.update(n=>defenseRating);
        error.update(n=>badStatus);
        intakeQuality.update(n=>intakeRating);
        comment.update(n=>commentText);
        drivingQuality.update(n=>drivingRating);
        sauceQuality.update(n=>sauceRating);
    }

    function QRTime(){
        matchStage.update(n=>matchStageValue+1);
    }








</script>

<div class="ml-[10px] absolute font-bold text-xl leading-[40px]">
    &nbsp Played Defense<br>
<input bind:value={defenseDuration} type="range" min="0" max="100"  class="range range-secondary w-72 absolute" />
<div class="rating rating-lg rating-half absolute absolute mt-9 ml-10">
    <input type="radio" name="playDefenseRating" bind:group ={defenseRating} class="rating-hidden" value={0} />
    <input type="radio" name="playDefenseRating" bind:group ={defenseRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={0.5}/>
    <input type="radio" name="playDefenseRating" bind:group ={defenseRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={1}/>
    <input type="radio" name="playDefenseRating" bind:group ={defenseRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={1.5}/>
    <input type="radio" name="playDefenseRating" bind:group ={defenseRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={2}/>
    <input type="radio" name="playDefenseRating" bind:group ={defenseRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={2.5}/>
    <input type="radio" name="playDefenseRating" bind:group ={defenseRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={3}/>
    <input type="radio" name="playDefenseRating" bind:group ={defenseRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={3.5}/>
    <input type="radio" name="playDefenseRating" bind:group ={defenseRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={4}/>
    <input type="radio" name="playDefenseRating" bind:group ={defenseRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={4.5}/>
    <input type="radio" name="playDefenseRating" bind:group ={defenseRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={5}/>
</div>
</div>

<div class="ml-[350px] absolute font-bold text-xl leading-[40px]">
    &nbsp Received Defense<br>
    <input bind:value={recDefenseDuration} type="range" min="0" max="100"  class="range range-secondary w-72 absolute" />
</div>

<div class="ml-[700px] absolute font-bold text-xl leading-[40px] absolute">
    &nbsp Driving<br>
    <div class="rating rating-lg rating-half absolute absolute -mt-1 ml-1">
        <input type="radio" name="drivingRating" bind:group ={drivingRating} class="rating-hidden" value={0} />
        <input type="radio" name="drivingRating" bind:group ={drivingRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={0.5}/>
        <input type="radio" name="drivingRating" bind:group ={drivingRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={1}/>
        <input type="radio" name="drivingRating" bind:group ={drivingRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={1.5}/>
        <input type="radio" name="drivingRating" bind:group ={drivingRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={2}/>
        <input type="radio" name="drivingRating" bind:group ={drivingRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={2.5}/>
        <input type="radio" name="drivingRating" bind:group ={drivingRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={3}/>
        <input type="radio" name="drivingRating" bind:group ={drivingRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={3.5}/>
        <input type="radio" name="drivingRating" bind:group ={drivingRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={4}/>
        <input type="radio" name="drivingRating" bind:group ={drivingRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={4.5}/>
        <input type="radio" name="drivingRating" bind:group ={drivingRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={5}/>
    </div>
</div>

<div class="ml-[10px] mt-[160px] absolute font-bold text-xl leading-[40px]">
    &nbsp Sauce<br>
    <div class="rating rating-lg rating-half absolute absolute -mt-1 ml-1">
        <input type="radio" name="sauceRating" bind:group ={sauceRating} class="rating-hidden" value={0} />
        <input type="radio" name="sauceRating" bind:group ={sauceRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={0.5}/>
        <input type="radio" name="sauceRating" bind:group ={sauceRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={1}/>
        <input type="radio" name="sauceRating" bind:group ={sauceRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={1.5}/>
        <input type="radio" name="sauceRating" bind:group ={sauceRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={2}/>
        <input type="radio" name="sauceRating" bind:group ={sauceRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={2.5}/>
        <input type="radio" name="sauceRating" bind:group ={sauceRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={3}/>
        <input type="radio" name="sauceRating" bind:group ={sauceRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={3.5}/>
        <input type="radio" name="sauceRating" bind:group ={sauceRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={4}/>
        <input type="radio" name="sauceRating" bind:group ={sauceRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={4.5}/>
        <input type="radio" name="sauceRating" bind:group ={sauceRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={5}/>
    </div>
</div>


{#if !badStatus}
    <button on:click="{shiftBad}" class="btn btn-success btn-square btn-outline w-72 h-24 ml-[350px] mt-[150px] absolute">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-[50px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>    </button>
{:else}
    <button on:click="{shiftBad}" class="btn btn-error btn-square btn-outline w-72 h-24 ml-[350px] mt-[150px] absolute">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-[90px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>    </button>
{/if}

<div class="ml-[700px] font-bold text-xl leading-[40px] absolute mt-[160px]">
    &nbsp Intake<br>
    <div class="rating rating-lg rating-half absolute absolute -mt-1 ml-1">
        <input type="radio" name="intakeRating" bind:group ={intakeRating} class="rating-hidden" value={0} />
        <input type="radio" name="intakeRating" bind:group ={intakeRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={0.5}/>
        <input type="radio" name="intakeRating" bind:group ={intakeRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={1}/>
        <input type="radio" name="intakeRating" bind:group ={intakeRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={1.5}/>
        <input type="radio" name="intakeRating" bind:group ={intakeRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={2}/>
        <input type="radio" name="intakeRating" bind:group ={intakeRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={2.5}/>
        <input type="radio" name="intakeRating" bind:group ={intakeRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={3}/>
        <input type="radio" name="intakeRating" bind:group ={intakeRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={3.5}/>
        <input type="radio" name="intakeRating" bind:group ={intakeRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={4}/>
        <input type="radio" name="intakeRating" bind:group ={intakeRating} class="bg-amber-500 mask mask-star-2 mask-half-1" value={4.5}/>
        <input type="radio" name="intakeRating" bind:group ={intakeRating} class="bg-amber-500 mask mask-star-2 mask-half-2" value={5}/>
    </div>
</div>
<textarea bind:value = {commentText} class="textarea text-3xl textarea-primary fixed ml-5 w-[665px] h-[200px] mt-72" placeholder="Comment"></textarea>
<button on:click={QRTime} class="btn btn-square btn-success btn-outline z-40 w-[200px] h-[200px]  ml-[750px] mt-72">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    </svg></button>
