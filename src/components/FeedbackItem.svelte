<script>
    import Card from "../ui/card.svelte";
    import { createEventDispatcher } from "svelte";
    export let feedback 
    
    let dispatch = createEventDispatcher()

    const handleDelete = (id)=> {
        dispatch('delete-feedback',id)
    }

</script>

<Card>
    <div class="num-display">
        {feedback.rating}
    </div>
    <button class="close" on:click ={() => handleDelete(feedback.id)}>X</button>
    <p class="text-display">
        {feedback.text}
    </p>
</Card>

<style>
    .num-display{
        position: absolute;
        top: -5px;
        left: -5px;
        width: 50px;
        height: 50px;

        background: palevioletred;
        color: white;
        border-radius: 50%;
        font-size: 19px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .close{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;

        background:none;
        border:none;
    }
</style>