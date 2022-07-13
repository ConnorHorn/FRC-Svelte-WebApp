<script>
  import AutoScoutControls from "./AutoScoutControls.svelte";
  import AutoScoutDisplay from "./AutoScoutSpecific.svelte";
</script>


<!--stores a grid of the left hand controls and the right hand auto specific stuff(taxi). Grids are annoying to learn but can end up being useful. Handling overflow and Z levels are useful-->
<main style="overflow: hidden">
<div class="grid overflow-hidden grid-cols-2 grid-rows-1 gap-2 w-full h-full fixed">
  <div class="box row-start-1 row-span-1 col-start-1 col-span-1">
    <AutoScoutControls/>

  </div>
  <div class="box row-start-1 row-end-2 col-start-2 col-span-1 absolute">
    <AutoScoutDisplay/>
  </div>
</div>

</main>

<!--not positive if this is doing anything important but scared to remove-->
<style>
  main{overflow-x: auto;}
</style>
