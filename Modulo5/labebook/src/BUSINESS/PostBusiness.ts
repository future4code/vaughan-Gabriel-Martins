import { PostByIdInputDTO, PostDBDTO, PostInputDTO, PostOutDTO } from "../Model/Post";
import { PostData} from "../DATA/PostData";
import { HashManager } from "../SERVICES/HashManager";
import { IdGenerator } from "../SERVICES/IdGenerator";


export class PostBusiness{ 

    constructor(
        private postData: PostData ,
        private idGenerator: IdGenerator, 
        private hashManager: HashManager
    ){}

    public createPost =(post:PostInputDTO) => { 

        if(!post.picture || !post.description || (post.type.toLowerCase() !== "normal" && post.type.toLowerCase() !=="evento")){ 
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
    public  getPostById  = async (id:PostByIdInputDTO):Promise<any> => { 
       try{ 
        console.log("id 2", id)
        if(!id.id){ 
            throw new Error("Entrada errada");
        }
        const idPost: PostByIdInputDTO  = id; 
        const post:PostDBDTO[] = await this.postData.getPostById(idPost);

        console.log("BS", post)
     
        
        if(post.length === 0 || !post ){
            throw new Error("Este post não existe");
            
        }
        return post; 
      } 
     catch(error: any ){ 

        // Erro
        

     }
     


    }
}