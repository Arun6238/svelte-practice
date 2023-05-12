<script>
    import FeedbackItem from "./FeedbackItem.svelte";

    export let feedbacks 
</script>
{#each feedbacks as fb (fb.id)}
    <FeedbackItem feedback = {fb} on:delete-feedback />
{/each}
