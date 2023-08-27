<script lang="ts">
    import type {ToDoData} from "./dto/ToDoData";

    export function markAsDone(todo: ToDoData): void {
        todo.doneAt = new Date(Date.now());
    }
    export function isDone(todo: ToDoData): boolean {
        return todo.doneAt !== undefined;
    }
</script>