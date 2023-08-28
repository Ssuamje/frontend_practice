<script lang="ts">
    import Button from "./components/Button.svelte";
    import InputBox from "./components/InputBox.svelte";
    import type {ToDoData} from "./components/dto/ToDoData";
    import ToDo from "./components/ToDo.svelte";

    let todoInput = "";
    let todos: ToDoData[] = [];

    function pushTodo() {
        if (todoInput.length === 0) return;
        todos = [...todos, {
            id: todos.length + 1,
            content: todoInput,
            startedAt: new Date(Date.now())
        }];
        todoInput = "";
    }
</script>

<h1> TODO </h1>
<InputBox bind:inputValue={todoInput} handleEnterPress={pushTodo}
          placeholder="할 일을 적어주세요"/>
<Button backgroundColor="black" handleClick={pushTodo} hoverBackgroundColor="skyblue"
        text="Add"/>
{#each todos as todo (todo.id)}
    <ToDo todo={todo}/>
{/each}

