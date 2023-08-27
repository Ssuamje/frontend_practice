<script lang="ts">
    import Button from "./components/Button.svelte";
    import InputBox from "./components/InputBox.svelte";
    import ToDo from "./components/ToDo.svelte";

    let todoInput = "";
    let todos = [];

    function pushTodo(content: string) {
        todos.push({
            content: content,
            isDone: false,
            startedAt: Date.now(),
            doneAt: null
        });
    }
</script>

<h1> TODO </h1>
<h2>{todoInput}</h2>
<InputBox placeholder="할 일을 적어주세요" bind:inputValue ={todoInput}/>
<Button text="Add" backgroundColor="black" hoverBackgroundColor="skyblue"
        handleClick={() => {
            pushTodo(todoInput);
            todoInput = "";
            console.log(todos);
        }}/>


