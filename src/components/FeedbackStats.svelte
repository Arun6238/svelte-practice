<script>
    import { FeedbackStore } from "../stores/stores";
    $:count = $FeedbackStore.length
    $:average = $FeedbackStore.reduce((a ,item)=>{
        return a += item.rating
    },0)/count
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Rating : {average.toFixed(1)}</h4>
</div>

<style>
    .feedback-stats{
        color: white;
        display: flex;
        justify-content: space-between;
    }
</style>