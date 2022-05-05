import {Request , Response} from "express"; 
import { PostBusiness } from "../BUSINESS/PostBusiness";
import {PostInputDTO } from "../Model/Post";


export class PostData { 
  
    constructor(private postBusiness:PostBusiness){}

    public createPost = async(request: Request , response: Response): Promise<void> => {
      try{
        const {picture, description, createdAt , type} = request.body;

        const post: PostInputDTO = { 
            picture, 
            description, 
            type
        }
         this.postBusiness.createPost(post)
    } catch(error: any){ 
        response.status(400).end(error.message || error.sqlmessage || "Unexpected server error!")
    }
    }
}

