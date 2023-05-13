<script>
	import FeedbackForm from "./components/FeedbackForm.svelte";
	import  FeedbackList  from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";

	// $: count = feedbacks.length
	// $: average = feedbacks.reduce((total,current)=>{
	// 	return total = (total+current.rating)
	// },0)/count

	// const addFeedback = (e)=>{
	// 	feedbacks = [ e.detail, ...feedbacks ]
	// }
</script>
<main class="container">	
	<FeedbackForm  />
	<FeedbackStats  />
	<FeedbackList />
</main>

<style>

</style>