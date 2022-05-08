import { Request , response, Response } from "express";
import { FeedBusiness } from "../BUSINESS/FeedBusiness";
import { feedInputDTO } from "../Model/Feed";



export class FeedController { 

    constructor(
        private feedBusiness: FeedBusiness,
    ){}

    public getfeed = async( request:Request ,response:Response ) :Promise<void> => {
       try{
       const token = request.headers.authorization as string;

       const input : feedInputDTO = { 
           token
        }
    
        const feed = await this.feedBusiness.getPostFriends(input)
        response.send(feed)

    } catch (error: any) {
        if (error instanceof Error) {
            response.status(400).end(error.message || "Unexpected server error!")
            return;
        }
        response.status(500).send("Erro no getPostById")
    }
    }

}