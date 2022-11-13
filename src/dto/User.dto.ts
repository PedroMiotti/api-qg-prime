export type CreateUserDto = {
    email: string;
    name: string;
    lastname: string;
    cellphone: string;
}

export type UserDto = {
    id: number;
    email: string;
    name: string;
    lastname: string;
    cellphone: string;
    userActivations?: any[];
}

export type userActivationDto = {
    id?: number;
    userId: number;
    activationStandId: number;
}