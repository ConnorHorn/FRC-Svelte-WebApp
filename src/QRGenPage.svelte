<script>
    import {alliance, teamNumber, name, matchStage, taxi, startPosX, startPosY, autoUpperScore, autoUpperFail, autoLowerScore, autoLowerFail, teleUpperScore, teleUpperFail, teleLowerScore, teleLowerFail, climbAttemptLevel, climbSuccessLevel, playDefenseDuration, playDefenseQuality, receiveDefenseDuration, drivingQuality, sauceQuality, intakeQuality, error, comment, matchStageString, attentionAlert, autoStage} from "./stores";
    import QrCode from "svelte-qrcode"
    let commentNoCommas = $comment.replaceAll(",", "")
    let qrString = $alliance +","+ $teamNumber +","+ $name +","+ $startPosX +","+ $startPosY+","+$taxi+","+$autoUpperScore+","+$autoUpperFail+","+$autoLowerScore+","+$autoLowerFail+","+$teleUpperScore+","+$teleUpperFail+","+$teleLowerScore+","+$teleLowerFail+","+$climbAttemptLevel+","+$climbSuccessLevel+","+$playDefenseDuration+","+$playDefenseQuality+","+$receiveDefenseDuration+","+$drivingQuality+","+$sauceQuality+","+$intakeQuality+","+$error+","+commentNoCommas

    function restart(){
        alliance.update(n=>"Red")
        teamNumber.update(n=>null)
        name.update(n=>"")
        matchStageString.update(n=>"auto")
        taxi.update(n=>false)
        attentionAlert.update(n=>false)
        startPosX.update(n=>-500)
        startPosY.update(n=>-500)
        autoStage.update(n=>1)
        autoUpperScore.update(n=>0)
        autoUpperFail.update(n=>0)
        autoLowerScore.update(n=>0)
        autoLowerFail.update(n=>0)
        teleUpperScore.update(n=>0)
        teleUpperFail.update(n=>0)
        teleLowerScore.update(n=>0)
        teleLowerFail.update(n=>0)
        climbAttemptLevel.update(n=>0)
        climbSuccessLevel.update(n=>0)
        playDefenseDuration.update(n=>0)
        playDefenseQuality.update(n=>0)
        receiveDefenseDuration.update(n=>0)
        drivingQuality.update(n=>0)
        sauceQuality.update(n=>0)
        intakeQuality.update(n=>0)
        error.update(n=>false)
        comment.update(n=>"")
        matchStage.update(n=>0)
    }
</script>
<div class="ml-[292px] mt-[30px] absolute">
<QrCode size=440 color="#fbbf24" background="#171212" errorCorrection="Q" value={qrString} />
</div>

<button on:click = {restart} class="btn btn-square btn-success btn-outline w-[200px] h-[100px] ml-[775px] mt-[330px] text-xl">
    Restart
</button>

