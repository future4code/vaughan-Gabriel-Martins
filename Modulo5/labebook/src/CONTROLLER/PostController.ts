import {Request , Response} from "express"; 
import { PostBusiness } from "../BUSINESS/PostBusiness";
import {PostInputDTO } from "../Model/Post";


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
}

