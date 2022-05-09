import {request, Request , Response} from "express"; 
import { PostBusiness } from "../BUSINESS/PostBusiness";
import {PostByIdInputDTO, PostInputDTO } from "../Model/Post";

export class PostController { 
  
    constructor(private postBusiness:PostBusiness){}
    public createPost = async(request: Request , response: Response): Promise<void> => {
      try{
        const {picture, description, type} = request.body;
        const token = request.headers.authorization as string;
        const post: PostInputDTO = { 
            picture, 
            description, 
            type, 
            token
        }
         this.postBusiness.createPost(post)
         response.status(201).send({message : "Foto cadastrada com sucesso!"})
         
    } catch (error: any) {
        if (error instanceof Error) {
            response.status(400).end(error.message || "Unexpected server error!")

             return;
        }
        response.status(500).send("Erro no getPostById")
    }
    }
    public getPostById =async  (request: Request , response: Response): Promise<void> => { 
        try {
            const id   = request.query.id  as string;
            const token = request.headers.authorization;

            const input : PostByIdInputDTO  = {id};
            const post = await this.postBusiness.getPostById(input, token)

            response.status(200).send(post)
            
        } catch (error: any) {
            if (error instanceof Error) {
                response.status(400).end(error.message || "Unexpected server error!")
                 return;
            }
            response.status(500).send("Erro no getPostById")
        }
    }
}     

