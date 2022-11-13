export type CreateActivationStandDto = {
    name: string;
    description?: string;
}

export type ActivationStandDto = {
    id: number;
    name: string;
    descriptiion?: string;
    userActivations?: string;
}