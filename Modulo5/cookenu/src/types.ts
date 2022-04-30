
export type inputUserFront = 
{ name : string, email: string , password: string  , role: ROLE}


export enum ROLE  { 
    ADMIN = "ADMIN",
    NORMAL = "NORMAL",
}
