<script>
    import {attentionAlert} from "./stores";
    let attentionAlertValue;
    import { fade, fly } from 'svelte/transition';
    const attentionAlertSubscription = attentionAlert.subscribe(value => {
        attentionAlertValue = value;
    });
</script>



<button class="btn gap-2 mt-100 ml-48">
    Button
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
         stroke-width="{2}">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
    </svg>
</button>





{#if attentionAlertValue}

    <p in:fly="{{ y: 400, duration: 2000 }}" out:fade>

        <img src="static/images/tarmac.png" alt="Pic Name"  class="w-full"/>
    </p>
{:else}
    <img src="static/images/emptyTarmac.png" alt="Pic Name"  class="w-full"/>
{/if}

