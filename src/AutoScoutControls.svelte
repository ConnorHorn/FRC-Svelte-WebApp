<script>

    import {attentionAlert, matchStage} from "./stores";
    import { fade, fly } from 'svelte/transition';
    import {autoStage, autoUpperScore, autoUpperFail, autoLowerFail, autoLowerScore} from "./stores";

    let elapsed = 0;
    let duration = 15000;
    let alertDuration = 25000;
    let countDownElapsed=false;
    let matchStageValue;

    let last_time = window.performance.now();
    let frame;
    let hasUpdatedAttention = false;

    let attentionAlertValue;
    const attentionAlertSubscription = attentionAlert.subscribe(value => {
        attentionAlertValue = value;
    });
    let autoModeValue;

    let autoUpperScoreValue;
    let autoUpperFailValue;
    let autoLowerScoreValue;
    let autoLowerFailValue;

    let autoStageValue;

    const autoStageSub = autoStage.subscribe(value => {
        autoStageValue = value;
    });



    const autoUpperScoreSub = autoUpperScore.subscribe(value => {
      autoUpperScoreValue = value;
    });
    const autoUpperFailSub = autoUpperFail.subscribe(value => {
      autoUpperFailValue = value;
    });
    const autoLowerScoreSub = autoLowerScore.subscribe(value => {
      autoLowerScoreValue = value;
    });
    const autoLowerFailSub = autoLowerFail.subscribe(value => {
      autoLowerFailValue = value;
    });
    const matchStageSub = matchStage.subscribe(value => {
        matchStageValue = value;
    });

    function upperScorePlus(){
      autoUpperScore.update(n=>n+1)
    }
    function upperScoreMinus(){
      autoUpperScore.update(n=>n-1)
    }
    function lowerScorePlus(){
      autoLowerScore.update(n=>n+1)
    }
    function lowerScoreMinus(){
      autoLowerScore.update(n=>n-1)
    }
    function upperFailPlus(){
      autoUpperFail.update(n=>n+1)
    }
    function upperFailMinus(){
      autoUpperFail.update(n=>n-1)
    }
    function lowerFailPlus(){
      autoLowerFail.update(n=>n+1)
    }
    function lowerFailMinus(){
      autoLowerFail.update(n=>n-1)
    }







    (function update() {
        frame = requestAnimationFrame(update);

        const time = window.performance.now();
        elapsed += time - last_time;
        last_time = time;
        if(elapsed >= alertDuration && !hasUpdatedAttention && matchStageValue===1 && autoStageValue===2){
            attentionAlert.update(n=>true);
            hasUpdatedAttention=true;
        }
        if(elapsed >= alertDuration && !hasUpdatedAttention && (matchStageValue!==1 || autoStageValue!==2)){
        elapsed=0;
        }
      countDownElapsed = elapsed >= alertDuration;
    }());

    function backButton(){
      autoStage.update(n=>n-1);
    }

</script>



<div class="grid  grid-cols-1 grid-rows-2 gap-2 w-full h-full absolute z-10 " in:fade="{{duration:800}}">
  <div class="box row-start-1 row-span-1 col-start-1 col-span-1">






    <div class="grid  grid-cols-3 grid-rows-3 gap-2 w-2/5 h-2/5 absolute ml-36 mt-1">
      <div class="box row-start-1 row-span-1 col-start-1 col-span-1 absolute z-20">
<!--        Auto Upper Score Add-->
        <button on:click={upperScorePlus}   class="btn btn-success btn-outline btn-square w-36 h-24">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" /></svg>
        </button>
      </div>
      <div class="box row-start-2 row-span-1 col-start-1 col-span-1  content-center z-10">
<!--        Auto Upper Score Count-->
        <span class="countdown text-5xl ml-11 mt-3 font-bold">
  <span style="--value:{autoUpperScoreValue};"></span>
</span>
      </div>
      <div class="box row-start-3 row-span-1 col-start-1 col-span-1">
<!--        Auto Upper Score Minus-->
        <button on:click={upperScoreMinus}  class="btn btn-success btn-outline btn-square w-36 h-24 -mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20 12H4" /></svg>
        </button>
      </div>
      <div class="box row-start-1 row-span-3 col-start-2 col-span-1">
<!--        Upper Indicator-->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-6 mt-20" fill="none" viewBox="0 0 28 28" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M8 7l4-4m0 0l4 4m-4-4v18" /></svg>
      </div>
      <div class="box row-start-1 row-span-1 col-start-3 col-span-1 z-20">
<!--        Auto Upper Fail Add-->
        <button on:click={upperFailPlus} class="btn btn-error btn-outline btn-square w-36 h-24 -ml-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" /></svg>
        </button>
      </div>
      <div class="box row-start-2 row-span-1 col-start-3 col-span-1 z-10">
<!--        Auto Upper Fail Count-->
        <span class="countdown text-5xl ml-8 mt-3 font-bold">
  <span style="--value:{autoUpperFailValue};"></span>
</span>
      </div>
      <div class="box row-start-3 row-span-1 col-start-3 col-span-1">
<!--        Auto Upper Fail Minus-->
        <button on:click={upperFailMinus} class="btn btn-error btn-outline btn-square w-36 h-24 -ml-3 -mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20 12H4" /></svg>
        </button>
      </div>
    </div>










  </div>
  <div class="box row-start-2 row-span-1 col-start-1 col-span-1 -mt-[10px]">





    <div class="grid  grid-cols-3 grid-rows-3 gap-2 w-2/5 h-2/5 absolute ml-36 -mt-9">
      <div class="box row-start-1 row-span-1 col-start-1 col-span-1 absolute z-20">
        <!--        Auto Lower Score Add-->
        <button on:click={lowerScorePlus} class="btn btn-success btn-outline btn-square w-36 h-24">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" /></svg>
        </button>
      </div>
      <div class="box row-start-2 row-span-1 col-start-1 col-span-1 z-10">
        <!--        Auto Lower Score Count-->
        <span class="countdown text-5xl ml-11 mt-3 font-bold">
  <span style="--value:{autoLowerScoreValue};"></span>
</span>
      </div>
      <div class="box row-start-3 row-span-1 col-start-1 col-span-1">
        <!--        Auto Lower Score Minus-->
        <button on:click={lowerScoreMinus} class="btn btn-success btn-outline btn-square w-36 h-24 -mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20 12H4" /></svg>
        </button>
      </div>
      <div class="box row-start-1 row-span-3 col-start-2 col-span-1">
        <!--        Lower Indicator-->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-6 mt-20" fill="none" viewBox="0 0 28 28" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg>
      </div>
      <div class="box row-start-1 row-span-1 col-start-3 col-span-1 z-20">
        <!--        Auto Upper Fail Add-->
        <button on:click={lowerFailPlus} class="btn btn-error btn-outline btn-square w-36 h-24 -ml-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" /></svg>
        </button>
      </div>
      <div class="box row-start-2 row-span-1 col-start-3 col-span-1 z-10">
        <!--        Auto Upper Fail Count-->
        <span class="countdown text-5xl ml-8 mt-3 font-bold">
  <span style="--value:{autoLowerFailValue};"></span>
</span>
      </div>
      <div class="box row-start-3 row-span-1 col-start-3 col-span-1">
        <!--        Auto Upper Fail Minus-->
        <button on:click={lowerFailMinus} class="btn btn-error btn-outline btn-square w-36 h-24 -ml-3 -mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24  ml-9 mt-4" fill="none" viewBox="0 0 39 39" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20 12H4" /></svg>
        </button>
      </div>


    </div>











  </div>
</div>

<span in:fly="{{ y: -50, duration: 500 }}" class="countdown font-mono text-6xl ml-6 mt-6 relative absolute z-30" style="color: #fbbf24">
  <span style="--value:{parseInt((duration/1000-elapsed/1000)+0.99)};"></span>
</span>

  <button on:click={backButton} class="btn btn-square btn-outline btn-primary absolute z-30 mt-24 -ml-20 w-24 h-20">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-14 -mt-2 -ml-1" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
  </button>


