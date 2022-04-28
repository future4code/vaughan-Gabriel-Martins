


export abstract class User  { 

    constructor(
        private id:string,
        private nome: string, 
        private email:string,
        private password: string 
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
}