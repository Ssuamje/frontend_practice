<script lang="ts">
    import type {ToDoData} from "./dto/ToDoData";
    import Button from "./Button.svelte";

    export let todo: ToDoData;
    $: disabled = !!todo.doneAt;
</script>

<div class="todo-box">
    <div class="todo-content">
        <h3>{`할일 : ${todo.content}`}</h3>
        <h3>{`시작 : ${todo.startedAt.toLocaleDateString()}`}</h3>
        {#if todo.doneAt}
            <h3>{`종료 : ${todo.doneAt.toLocaleDateString()}`}</h3>
        {/if}
    </div>
    <div class="button-div">
        <Button bind:disabled={disabled}
                disabledText="완료"
                handleClick={() => {
                    todo.doneAt = new Date(Date.now());
                }} normalText="끝내기!">
        </Button>
    </div>
</div>

<style>
    .todo-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 70%;
        border: 1px solid #ccc;
        padding: 1rem;
        margin: 1rem auto;
        border-radius: 3px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }

    .todo-box h3 {
        font-family: "D2Coding", serif;
        margin: 4px;
    }

    .todo-content {
        flex-grow: 1;
    }

    .button-div {
        display: grid;
        place-items: center;
    }
</style>