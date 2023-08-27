export interface TodoDto {
    content: string;
    startedAt: Date;
    doneAt?: Date;
}