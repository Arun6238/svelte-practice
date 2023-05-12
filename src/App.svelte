<script>

	import FeedbackForm from "./components/FeedbackForm.svelte";
	import  FeedbackList  from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
	let feedbacks = [
		{
			id:1,
			rating:9,
			text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ea iste, delectus suscipit aspernatur ut! Ducimus, impedit. Illo, ipsa alias.'
		},
		{
			id:2,
			rating:10,
			text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat earum optio laborum veniam. Recusandae hic iusto provident quia! Ex, modi ipsum. Architecto fugiat labore commodi.'
		},
		{
			id:3,
			rating:8,
			text:'	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat earum optio laborum veniam. Recusandae hic iusto provident quia! Ex, modi ipsum.'
		}
	]

	$: count = feedbacks.length
	$: average = feedbacks.reduce((total,current)=>{
		return total = (total+current.rating)
	},0)/count

	const deleteFeedback = (e) => {
		const feedbackId = e.detail
		feedbacks = feedbacks.filter(feedback =>{
			return feedback.id != feedbackId
		})
	}
	const addFeedback = (e)=>{
		feedbacks.push(e.detail)
		feedbacks = feedbacks
	}
</script>
<main class="container">	
	<FeedbackForm on:new-feedback={addFeedback} />
	<FeedbackStats {average} {count} />
	<FeedbackList {feedbacks} on:delete-feedback = {deleteFeedback}/>
</main>

<style>

</style>