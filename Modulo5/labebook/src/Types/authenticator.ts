import {ROLE} from "./user"

export type  AuthenticatorPayload = { 
    id: string, 
    role: ROLE
}