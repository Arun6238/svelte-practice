<script>
    export let rating
</script>
    <ul class="rating-select">
      <li>
        <input bind:group={rating} type="radio" id="rating1" name="rating" value="1">
        <label for="rating1">1</label>
      </li>
      <li>
        <input bind:group={rating} type="radio" id="rating2" name="rating" value="2">
        <label for="rating2">2</label>
      </li>
      <li>
        <input bind:group={rating} type="radio" id="rating3" name="rating" value="3">
        <label for="rating3">3</label>
      </li>
      <li>
        <input bind:group={rating} type="radio" id="rating4" name="rating" value="4">
        <label for="rating4">4</label>
      </li>
      <li>
        <input bind:group={rating} type="radio" id="rating5" name="rating" value="5">
        <label for="rating5">5</label>
      </li>
      <li>
        <input bind:group={rating} type="radio" id="rating6" name="rating" value="6">
        <label for="rating6">6</label>
      </li>
      <li>
        <input bind:group={rating} type="radio" id="rating7" name="rating" value="7">
        <label for="rating7">7</label>
      </li>
      <li>
        <input bind:group={rating} type="radio" id="rating8" name="rating" value="8">
        <label for="rating8">8</label>
      </li>
      <li>
        <input bind:group={rating} type="radio" id="rating9" name="rating" value="9">
        <label for="rating9">9</label>
      </li>
      <li>
        <input  bind:group={rating} type="radio" id="rating10" name="rating" value="10">
        <label class="selected-rating" for="rating10">10</label>
      </li>
    </ul>

  <style>
    .rating-select{
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
    }
    .rating-select label{
        background-color: #E6E6E6;
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 33px;
        border-radius: 50%;
        font-weight: 600;
        margin-top: -20px;

        transition: all ease-in-out 200ms;
    }
    .rating-select label:hover{
      background-color:#FCAAC6;
      color: #FFFFFF;
    }
    .rating-select input{
        opacity: 0;
    }

    .rating-select input[type=radio]:checked + label {
        background: palevioletred;
        color: white ;
    }
  </style>