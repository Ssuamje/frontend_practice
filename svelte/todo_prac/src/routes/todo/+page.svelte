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

<div class="viewport">
    <div>
        <h1> TODO </h1>
        <InputBox bind:inputValue={todoInput} handleEnterPress={pushTodo}
                  placeholder="할 일을 적어주세요"/>
        <Button backgroundColor="black" handleClick={pushTodo} hoverBackgroundColor="skyblue"
                text="Add"/>
    </div>
    <div class="div-todo">
        {#each todos as todo (todo.id)}
            <ToDo todo={todo}/>
        {/each}
    </div>
</div>

<style>
    .viewport {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }

    h1 {
        font-size: 3rem;
        margin: 0;
    }

    .div-todo {
        overflow: scroll;
        width: 50%;
    }

    .div-todo::-webkit-scrollbar {
        width: 50%;
    }
</style>
