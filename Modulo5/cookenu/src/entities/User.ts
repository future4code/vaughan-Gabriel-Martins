import { ROLE } from "../types"


export class User  { 

    constructor(
        private id:string,
        private name: string, 
        private email:string,
        private password: string ,
        // private role: ROLE 
        )
    {}
    getId () { 
        return this.id
    }
    getNome () { 
        return this.name
    }
    getEmail () { 
        return this.email
    }
    getPassword () { 
        return this.password
    }
    // getRole () { 
    //     return this.role
    // }

    public static toUserModel(data:any):User{ 
        return new User(data.id, data.name , data.email, data.password)
        // return new User(data.id, data.name , data.email, data.password, data.ROLE )
    }
}