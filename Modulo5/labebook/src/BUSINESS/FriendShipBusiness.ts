import { FriendShipData } from "../DATA/FriendShipData";
import { friendShipDBOutputtDTO, friendShipInputDTO } from "../Model/FriendShip";
import { Authenticator } from "../SERVICES/Authenticator";
import { IdGenerator } from "../SERVICES/IdGenerator";


export class FriendShipBusiness { 
    constructor(
       private authenticator : Authenticator,
       private idGenerator : IdGenerator,
       private friendShipData : FriendShipData
    ){}

    

    public makeFriend = async(makeFriendInput : friendShipInputDTO): Promise<void>=> {
        
        const token = makeFriendInput.token;
        const idFriend = makeFriendInput.id;

        if(!idFriend || !token){
            throw new Error("Uma ou mais entradas não são validas!");
        }
        const tokenData = this.authenticator.tokenData(token)

        const id = this.idGenerator.generate()

        const makeFriendInput2DB : friendShipDBOutputtDTO ={ 
            id, 
            id_user: tokenData.id, 
            id_friend: idFriend,
        }
        await this.friendShipData.makeFriend(makeFriendInput2DB)
    }
    public unFriend = async(unFriendInput : friendShipInputDTO): Promise<void>=> {
        
    //     const token = unFriendInput.token;
    //     const idFriend = unFriendInput.id;

    //     if(!idFriend || !token){
    //         throw new Error("Uma ou mais entradas não são validas!");
    //     }
    //     const tokenData = this.authenticator.tokenData(token)



    //     const unFriendInputDB  ={ 
    //         id_user: tokenData.id, 
    //         id_friend: idFriend,
    //     }
    //     await this.friendShipData.makeFriend(unFriendInputDB)
    }
}