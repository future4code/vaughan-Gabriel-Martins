import { ROLE } from "../types"



export class User  { 

    constructor(
        private id:string,
        private nome: string, 
        private email:string,
        private password: string ,
        private role: ROLE 
        )
    {}
    getId () { 
        return this.id
    }
    getNome () { 
        return this.nome
    }
    getEmail () { 
        return this.email
    }
    getPassword () { 
        return this.password
    }
    getRole () { 
        return this.role
    }

    static toUserModel(data:any):User{ 
        return new User(data.id, data.name , data.email, data.password, data.ROLE )
    }
}