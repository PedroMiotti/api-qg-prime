export type CreateUserAnswerDto = {
    userId: number;
    answerId: number;
}

export type UserAnswerDto = {
    id: number;
    userId: number;
    answerId: number;
    createdAt: string;
}