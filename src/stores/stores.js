import { writable } from 'svelte/store'

export const FeedbackStore = writable([
    {
        id:1,
        rating:7,
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
])