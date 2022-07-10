<script>
  import AutoScoutControls from "./AutoScoutControls.svelte";
  import AutoScoutDisplay from "./AutoScoutSpecific.svelte";
  let temp=true;
</script>

<main style="overflow: hidden">
<div class="grid overflow-hidden grid-cols-2 grid-rows-1 gap-2 w-full h-full fixed">
  <div class="box row-start-1 row-span-1 col-start-1 col-span-1">
    <AutoScoutControls/>

  </div>
  <div class="box row-start-1 row-end-2 col-start-2 col-span-1 absolute z-20">
    <AutoScoutDisplay/>
  </div>
</div>

</main>

<style>
  main{overflow-x: auto;}
</style>
