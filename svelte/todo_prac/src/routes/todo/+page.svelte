<script lang="ts">
    import Button from "./components/Button.svelte";
    import InputBox from "./components/InputBox.svelte";
    import type {ToDoData} from "./components/dto/ToDoData";

    let todoInput = "";
    let todos: ToDoData[] = [];

    function pushTodo(content: string) {
        todos = [...todos, {
            id: todos.length + 1,
            content: content,
            startedAt: new Date(Date.now())
        }];
    }
</script>

<h1> TODO </h1>
<h2>{todoInput}</h2>
<InputBox placeholder="할 일을 적어주세요" bind:inputValue ={todoInput}
    handleEnterPress={() => {
        pushTodo(todoInput);
        todoInput = "";
        console.log(todos);
    }}
/>
<Button text="Add" backgroundColor="black" hoverBackgroundColor="skyblue"
        handleClick={() => {
            pushTodo(todoInput);
            todoInput = "";
            console.log(todos);
        }}/>
{#each todos as todo (todo.id)}
    <div>
        <h3>{todo.id}</h3>
        <h3>{todo.content}</h3>
        <h3>{todo.startedAt}</h3>
    </div>
{/each}

