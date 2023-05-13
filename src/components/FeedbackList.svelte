<script>
    import { onDestroy } from 'svelte';
	import {FeedbackStore} from '../stores/stores'
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte";

    let feedbacks = []

    const unsubscribe = FeedbackStore.subscribe((data) => {
        feedbacks = data
    })
    onDestroy(() => {
        unsubscribe()
    })

</script>
{#each feedbacks as fb (fb.id)}
    <div in:scale={{duration:100}} out:fade={{ duration:200 }} >
        <FeedbackItem feedback = {fb}/>
    </div>
{/each}
