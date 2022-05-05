import { PostInputDTO } from "../Model/Post";
import { Authenticator } from "../SERVICES/Authenticator";
import { HashManager } from "../SERVICES/HashManager";
import { IdGenerator } from "../SERVICES/IdGenerator";


export class PostBusiness{ 

    constructor(
        private authenticator: Authenticator,
        private idGenerator: IdGenerator, 
        private hashManager: HashManager
    ){}

    public createPost =(post:PostInputDTO)=> { 

        if(!post.picture || !post.description || !post.type){ 
             throw new Error("Uma ou mais entradas não são validas!");
        }

        const id = this.idGenerator.generate();

        const createdAt = Date.now();

        console.log(createdAt)

    }

}