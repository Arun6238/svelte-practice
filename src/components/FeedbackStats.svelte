<script>
    export let average;
    export let count;
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Rating : {average}</h4>
</div>

<style>
    .feedback-stats{
        color: white;
        display: flex;
        justify-content: space-between;
    }
</style>