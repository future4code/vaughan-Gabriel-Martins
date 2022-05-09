import { Request , Response } from "express";
import { FeedBusiness } from "../BUSINESS/FeedBusiness";
import { feedInputDTO, inputDTO } from "../Model/Feed";



export class FeedController { 

    constructor(
        private feedBusiness: FeedBusiness,
    ){}

    public getfeed = async( request:Request ,response:Response )=> {
       try{
       const token = request.headers.authorization as string;

       const input : feedInputDTO = { 
           token
        }
    
        const feed = await this.feedBusiness.getPostFriends(input)
        response.send(feed)
        return 

    } catch (error: any) {
        if (error instanceof Error) {
            response.status(400).end(error.message || "Unexpected server error!")
            return;
        }
        response.status(500).send("Erro no getPostById")
    }
    }
    public feedbyType = async( request:Request ,response:Response ): Promise<void> => { 
        try {

            const token = request.headers.authorization as string;
            const type = request.query.type as string;

            console.log(token, type)
            
            const input: inputDTO = { 
                token: token,
                type : type
            }

           const feedByType =await this.feedBusiness.getFeedType(input)
           console.log(feedByType)
           response.status(200).send(feedByType)
           
            
        } catch (error: any) {
            if (error instanceof Error) {
                response.status(400).end(error.message || "Unexpected server error!")
                return;
            }
            response.status(500).send("Erro no getPostById")
        }
    }
}