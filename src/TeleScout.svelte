<script>
    import TeleScoutControls from "./TeleScoutControls.svelte";
    import TeleScoutEndgame from "./TeleScoutEndgame.svelte";
</script>

<div class="grid overflow-hidden grid-cols-2 grid-rows-1 gap-2 w-full h-full fixed">
    <div class="box row-start-1 row-span-1 col-start-1 col-span-1">
        <TeleScoutControls/>

    </div>
    <div class="box row-start-1 row-end-2 col-start-2 col-span-1 absolute z-20">
        <TeleScoutEndgame/>
    </div>
</div>