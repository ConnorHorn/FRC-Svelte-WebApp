<script>

  import {attentionAlert} from "./stores";

  let elapsed = 0;
  let duration = 15000;
  let alertDuration = 25000;

  let last_time = window.performance.now();
  let frame;

  let attentionAlertValue;
  const attentionAlertSubscription = attentionAlert.subscribe(value => {
    attentionAlertValue = value;
  });



  (function update() {
    frame = requestAnimationFrame(update);

    const time = window.performance.now();
    elapsed += time - last_time;
    last_time = time;
    if(elapsed >= alertDuration){
      attentionAlert.update(n=>true);
    }
  }());


</script>

<span class="countdown font-mono text-6xl ml-6 mt-6 absolute z-30" style="color: #fbbf24">
  <span style="--value:{parseInt((duration/1000-elapsed/1000)+0.99)};"></span>
</span>