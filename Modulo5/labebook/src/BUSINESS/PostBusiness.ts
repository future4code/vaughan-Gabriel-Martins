import { PostByIdInputDTO, PostDBDTO, PostInputDTO, PostOutDTO } from "../Model/Post";
import { PostData } from "../DATA/PostData";
import { HashManager } from "../SERVICES/HashManager";
import { IdGenerator } from "../SERVICES/IdGenerator";
import { Authenticator } from "../SERVICES/Authenticator";



export class PostBusiness {

    constructor(
        private postData: PostData,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    public createPost = (post: PostInputDTO) => {

        if (!post.picture || !post.description || (post.type.toLowerCase() !== "normal" && post.type.toLowerCase() !== "evento")) {
            throw new Error("Uma ou mais entradas não são validas!");
        }

        const id = this.idGenerator.generate();
        const createdAt = (new Date()).toISOString().split("T")[0]

        const postToDB: PostDBDTO = {
            id: id,
            picture: post.picture,
            description: post.description,
            type: post.type,
            created_at: createdAt
        }
        this.postData.createPost(postToDB)
    }
    public getPostById = async (id: PostByIdInputDTO, token: string | undefined): Promise<any> => {

        console.log("id 2", id)
        if (!id.id) { 
            
            throw new Error("Entrada invalida!"); }
        if (!token) { throw new Error("Não está authenticado"); }

      
        // Retrieving data from token as well as testing toke is valid. 
        const isTokenValid = this.authenticator.tokenData(token)

        console.log(isTokenValid)
        
        const idUser  = isTokenValid.id;

        const idPost: PostByIdInputDTO = id;
        const post: PostDBDTO[] = await this.postData.getPostById(idPost);


        if (post.length === 0 || !post) { throw new Error("Este post não existe"); }
        return post;
    }




}