<script>
    import Button from "./Button.svelte";
    import InputBox from "./InputBox.svelte";

    let todoInput = "";
</script>

<h1> TODO </h1>
<h2>{todoInput}</h2>
<InputBox placeholder="할 일을 적어주세요" bind:inputValue ={todoInput}/>
<Button text="Add" bg_color="black" hover_bg_color="violet"
        handleClick={() => {console.log(todoInput)}}/>

