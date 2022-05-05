import { PostDBDTO } from "../Model/Post";




export class PostBusiness{ 

    public createPost =(post:PostDBDTO)=> { 

        if(!post.picture || !post.description || !post.type || !post.createdAt){ 
             throw new Error("Uma ou mais entradas não são validas!");
        }



    }

}