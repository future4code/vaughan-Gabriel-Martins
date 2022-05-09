import { Request, Response } from "express";
import { FriendShipBusiness } from "../BUSINESS/FriendShipBusiness";
import { friendShipInputDTO } from "../Model/FriendShip";


export class FriendShipController {

    constructor(
        private friendShipBusiness: FriendShipBusiness
    ) { }

    public makeFriend = async (request: Request, response: Response): Promise<void> => {
        try {
            
            const makeFriendInput = await this.getData(request , response)

            await this.friendShipBusiness.makeFriend(makeFriendInput)
            response.status(201).send("Nova amizade adicionada!")
            
        } catch (error: any) {
            if (error instanceof Error) {
                response.status(400).send(error.message || "Unexpected server error!")
                return;
            }
            response.status(500).send("Erro no getPostById")
        }

    }
    public unFriend = async(request : Request , response : Response): Promise<void> => { 
        try {
       
            const unFriendInput = await this.getData(request , response)
            await this.friendShipBusiness.unFriend(unFriendInput)
            response.status(201).send("Amizade desfeita!")
            
        } catch (error: any) {
            if ( error instanceof Error) { 
                response.status(400).send(error.message || "Unexpected server error!")
                return; 
            }
            response.status(500).send("Erro no unFriend! ")            
        }
    }
 
    // to be reused on the other methods 
    public getData = async(request : Request , response : Response) :Promise<friendShipInputDTO> =>  { 
        const token = request.headers.authorization;
        const idFriend = request.body.idFriend;

        const data: friendShipInputDTO = {
            id: idFriend,
            token: token as string
        }
        return data;
    }

}