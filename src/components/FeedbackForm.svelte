<script>
    import {v4 as uuid4} from 'uuid'
    import { FeedbackStore } from '../stores/stores';

    import Card from "../ui/card.svelte";
    import Button from "../ui/button.svelte";
    import FeedbackRating from "./FeedbackRating.svelte";

    let text = ''
    let rating="10"
    let btnDisabled = true
    let minInputLength = 10
    let message

    const handleInput = ()=> {
        if(text.trim().length < minInputLength){
            btnDisabled = true
            message = `Text must be at least ${minInputLength} characters`  
        }
        else{
            btnDisabled = false
            message = ''
        }
    }

    const submitForm = ()=> {
        if(text.trim().length > minInputLength){
            const newFeedback = {
                id:uuid4(),
                text,
                rating:Number(rating)
            }
            FeedbackStore.update(storeValue =>{
                return [newFeedback, ...storeValue]
            })
            text = ""
            btnDisabled = true
        }
    }
</script>

<Card>
    <header>
        <h2>How would you rate your service with us?</h2>
    </header>
    <form on:submit|preventDefault={submitForm}>
        <div class="input-group">
            <FeedbackRating bind:rating ={rating}  />
            <input type="text" on:input={handleInput} bind:value={text} placeholder="Tell us something that keeps you coming back">
            <span class="button-container">
                <Button  disabled={btnDisabled} type="submit">Send</Button>
            </span>
        </div>
    </form>
    {#if message}
        <p class="message">{message}</p>
    {/if}
</Card>

<style>
    h2{
        margin-top: 0;
        margin-bottom: 1em;
    }
    header,
    .message{
        text-align: center;
    }
    .button-container{
        display: block;
        text-align: center;
        margin-top: 1em;
    }
    input{
        width: 100%;
        height: 40px;
        border-radius: 8px;
        outline: 1px solid #202142;
    }
    @media only screen and (min-width: 720px) {
        .button-container{
            display: inline;
            margin-left:-104.8px;
        }
        input{
            border-right: 3px solid #202142;
        }
}
    
</style>