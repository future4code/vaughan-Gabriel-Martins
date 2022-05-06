import { PostDBDTO, PostInputDTO } from "../Model/Post";
import { PostData} from "../DATA/PostData";
import { HashManager } from "../SERVICES/HashManager";
import { IdGenerator } from "../SERVICES/IdGenerator";


export class PostBusiness{ 

    constructor(
        private postData: PostData ,
        private idGenerator: IdGenerator, 
        private hashManager: HashManager
    ){}

    public createPost =(post:PostInputDTO)=> { 
        try{
        if(!post.picture || !post.description || !post.type){ 
             throw new Error("Uma ou mais entradas não são validas!");
        }
        const id = this.idGenerator.generate();

        const createdAt = (new Date()).toISOString().split("T")[0]
        
        const postToDB: PostDBDTO ={ 
            id: id,
            picture: post.picture, 
            description: post.description, 
            type: post.type,
            created_at: createdAt
        }

        this.postData.createPost(postToDB)
       } 
       catch(error:any){ 
           throw new Error("error bussines");
           
       }
        
    }

}