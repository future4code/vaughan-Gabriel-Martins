import { Request , Response } from "express";
import { LikesBusiness } from "../BUSINESS/LikesBusiness";
import { likesInputDTO } from "../Model/LIkes";



export class LikesController { 
    constructor (
        private likesBusiness: LikesBusiness
    ){}

    public likeIt = async(request: Request , response: Response): Promise<void>=> { 
       try{
        const token = request.headers.authorization as string; 
        const postId = request.body.postId   as string;


        const input : likesInputDTO = { 
            token, 
            postId
        }
       const liked = await this.likesBusiness.likeIt(input);

       response.status(200).send()
    }catch(error:any) { 
        if( error instanceof Error){ 
            response.status(400).send(error.message)
            return; 
        }
        response.status(500).send("Unexpected error - LikeItController!")
        
    }

    }
}
