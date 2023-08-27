<script lang="ts">
    interface Todo {
        content: string;
        isDone: boolean;
        startedAt: Date;
        doneAt: Date;
    }
    export const todos: Todo[] = [];
</script>