<script>

    import {attentionAlert} from "./stores";
    import { fade, fly } from 'svelte/transition';
    import {teleUpperScore, teleUpperFail, teleLowerFail, teleLowerScore} from "./stores";

    let elapsed = 0;
    let duration = 15000;
    let alertDuration = 25000;
    let countDownElapsed=false;

    let last_time = window.performance.now();
    let frame;
    let hasUpdatedAttention = false;

    let attentionAlertValue;
    const attentionAlertSubscription = attentionAlert.subscribe(value => {
        attentionAlertValue = value;
    });


    let teleUpperScoreValue;
    let teleUpperFailValue;
    let teleLowerScoreValue;
    let teleLowerFailValue;



    const teleUpperScoreSub = teleUpperScore.subscribe(value => {
        teleUpperScoreValue = value;
    });
    const teleoUpperFailSub = teleUpperFail.subscribe(value => {
        teleUpperFailValue = value;
    });
    const teleLowerScoreSub = teleLowerScore.subscribe(value => {
        teleLowerScoreValue = value;
    });
    const teleLowerFailSub = teleLowerFail.subscribe(value => {
        teleLowerFailValue = value;
    });

    function upperScorePlus(){
        teleUpperScore.update(n=>n+1)
    }
    function upperScoreMinus(){
        teleUpperScore.update(n=>n-1)
    }
    function lowerScorePlus(){
        teleLowerScore.update(n=>n+1)
    }
    function lowerScoreMinus(){
        teleLowerScore.update(n=>n-1)
    }
    function upperFailPlus(){
        teleUpperFail.update(n=>n+1)
    }
    function upperFailMinus(){
        teleUpperFail.update(n=>n-1)
    }
    function lowerFailPlus(){
        teleLowerFail.update(n=>n+1)
    }
    function lowerFailMinus(){
        teleLowerFail.update(n=>n-1)
    }











</script>



<div class="grid overflow-hidden grid-cols-1 grid-rows-2 gap-2 w-full h-full absolute z-10 " in:fade="{{duration:800}}">
    <div class="box row-start-1 row-span-1 col-start-1 col-span-1">






        <div class="grid overflow-hidden grid-cols-3 grid-rows-3 gap-2 w-2/5 h-2/5 absolute ml-36 mt-1">
            <div class="box row-start-1 row-span-1 col-start-1 col-span-1 absolute">
                <!--        Tele Upper Score Add-->
                <button on:click={upperScorePlus}   class="btn btn-success btn-square w-36 h-24">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>
            <div class="box row-start-2 row-span-1 col-start-1 col-span-1  content-center">
                <!--        Tele Upper Score Count-->
                <span class="countdown text-5xl ml-11 mt-3 font-bold">
  <span style="--value:{teleUpperScoreValue};"></span>
</span>
            </div>
            <div class="box row-start-3 row-span-1 col-start-1 col-span-1">
                <!--        Tele Upper Score Minus-->
                <button on:click={upperScoreMinus}  class="btn btn-success btn-square w-36 h-24 -mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20 12H4" /></svg>
                </button>
            </div>
            <div class="box row-start-1 row-span-3 col-start-2 col-span-1">
                <!--        Upper Indicator-->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-6 mt-20" fill="none" viewBox="0 0 28 28" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M8 7l4-4m0 0l4 4m-4-4v18" /></svg>
            </div>
            <div class="box row-start-1 row-span-1 col-start-3 col-span-1">
                <!--        Tele Upper Fail Add-->
                <button on:click={upperFailPlus} class="btn btn-error btn-square w-36 h-24 -ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>
            <div class="box row-start-2 row-span-1 col-start-3 col-span-1">
                <!--        Tele Upper Fail Count-->
                <span class="countdown text-5xl ml-8 mt-3 font-bold">
  <span style="--value:{teleUpperFailValue};"></span>
</span>
            </div>
            <div class="box row-start-3 row-span-1 col-start-3 col-span-1">
                <!--        Tele Upper Fail Minus-->
                <button on:click={upperFailMinus} class="btn btn-error btn-square w-36 h-24 -ml-3 -mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20 12H4" /></svg>
                </button>
            </div>
        </div>










    </div>
    <div class="box row-start-2 row-span-1 col-start-1 col-span-1">





        <div class="grid overflow-hidden grid-cols-3 grid-rows-3 gap-2 w-2/5 h-2/5 absolute ml-36 -mt-9">
            <div class="box row-start-1 row-span-1 col-start-1 col-span-1 absolute">
                <!--        Tele Lower Score Add-->
                <button on:click={lowerScorePlus} class="btn btn-success btn-square w-36 h-24">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>
            <div class="box row-start-2 row-span-1 col-start-1 col-span-1">
                <!--        Tele Lower Score Count-->
                <span class="countdown text-5xl ml-11 mt-3 font-bold">
  <span style="--value:{teleLowerScoreValue};"></span>
</span>
            </div>
            <div class="box row-start-3 row-span-1 col-start-1 col-span-1">
                <!--        Tele Lower Score Minus-->
                <button on:click={lowerScoreMinus} class="btn btn-success btn-square w-36 h-24 -mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20 12H4" /></svg>
                </button>
            </div>
            <div class="box row-start-1 row-span-3 col-start-2 col-span-1">
                <!--        Lower Indicator-->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-6 mt-20" fill="none" viewBox="0 0 28 28" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg>
            </div>
            <div class="box row-start-1 row-span-1 col-start-3 col-span-1">
                <!--        Tele Upper Fail Add-->
                <button on:click={lowerFailPlus} class="btn btn-error btn-square w-36 h-24 -ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>
            <div class="box row-start-2 row-span-1 col-start-3 col-span-1">
                <!--        Tele Upper Fail Count-->
                <span class="countdown text-5xl ml-8 mt-3 font-bold">
  <span style="--value:{teleLowerFailValue};"></span>
</span>
            </div>
            <div class="box row-start-3 row-span-1 col-start-3 col-span-1">
                <!--        Tele Upper Fail Minus-->
                <button on:click={lowerFailMinus} class="btn btn-error btn-square w-36 h-24 -ml-3 -mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20 12H4" /></svg>
                </button>
            </div>


        </div>











    </div>
</div>


