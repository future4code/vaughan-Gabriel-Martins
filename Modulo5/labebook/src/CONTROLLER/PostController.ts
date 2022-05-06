import {request, Request , Response} from "express"; 
import { PostBusiness } from "../BUSINESS/PostBusiness";
import {PostByIdInputDTO, PostInputDTO } from "../Model/Post";


export class PostController { 
  
    constructor(private postBusiness:PostBusiness){}

    public createPost = async(request: Request , response: Response): Promise<void> => {
      try{
        const {picture, description, type} = request.body;
        const post: PostInputDTO = { 
            picture, 
            description, 
            type
        }
         this.postBusiness.createPost(post)
         response.status(201).send({message : "Foto cadastrada com sucesso!"})
         
    } catch(error: any){ 
        response.status(400).end(error.message || error.sqlmessage || "Unexpected server error!")
    }
    }
    public getPostById =async  (request: Request , response: Response): Promise<void> => { 
        try {
            const id   = request.query.id  as string;

            const input : PostByIdInputDTO  = {id};
            const post = await this.postBusiness.getPostById(input)

            console.log("Controlller:",post)

            response.status(200).send(post)
            console.log("id 1 ", id)
            
        } catch (error: any) {
           response.status(400).send(error)
        }
    }
}     

