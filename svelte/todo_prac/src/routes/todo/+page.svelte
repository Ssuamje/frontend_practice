<script lang="ts">
    import Button from "./components/Button.svelte";
    import InputBox from "./components/InputBox.svelte";
    import type {TodoDto} from "./components/dto/TodoDto";

    let todoInput = "";
    let todos: TodoDto[] = [];

    function pushTodo(content: string) {
        todos.push({
            content: content,
            startedAt: new Date(Date.now())
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


