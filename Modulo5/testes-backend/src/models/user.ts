export interface GetUserByIdInputDTO {
    id: string;
}
export interface GetUserByIdDBDTO {
    id: string;
}

export enum ROLE {
    ADMIN = "ADMIN",
    USER = "USER",
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: ROLE;
}

export interface UserOutputDTO {
    id: string;
    name: string;
    email: string;
    role: ROLE;
}
