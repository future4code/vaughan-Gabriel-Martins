import { Request, Response } from "express";
import { FriendShipBusiness } from "../BUSINESS/FriendShipBusiness";
import { friendShipInputDTO } from "../Model/FriendShip";


export class FriendShipController {

    constructor(
        private friendShipBusiness: FriendShipBusiness
    ) { }

    public makeFriend = async (request: Request, response: Response): Promise<void> => {
        try {

            const token = request.headers.authorization;
            const idFriend = request.body.idFriend;

            const makeFriendInput: friendShipInputDTO = {
                id: idFriend,
                token: token as string
            }
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
            const token = request.headers.authorization;
            const idFriend = request.body.idFriend;
            
        } catch (error: any) {
            if ( error instanceof Error) { 
                response.status(400).send(error.message || "Unexpected server error!")
                return; 
            }
            response.status(500).send("Erro no unFriend! ")
            
        }

    }
}