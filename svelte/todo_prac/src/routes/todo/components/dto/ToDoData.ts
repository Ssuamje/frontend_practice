export interface ToDoData {
    id: number;
    content: string;
    startedAt: Date;
    doneAt?: Date;
}