import { FriendShipData } from "../DATA/FriendShipData";
import { UserData } from "../DATA/UserData";
import { friendShipDBOutputtDTO, friendShipInputDTO, unfriendShipDBOutputtDTO } from "../Model/FriendShip";
import { UserOutputDBDTO } from "../Model/User";
import { Authenticator } from "../SERVICES/Authenticator";
import { IdGenerator } from "../SERVICES/IdGenerator";


export class FriendShipBusiness { 
    constructor(
       private authenticator : Authenticator,
       private idGenerator : IdGenerator,
       private friendShipData : FriendShipData,
       private userData : UserData
    ){}

    // Method that shares same coding / reducing size 
    public validation =(makeFriendInput : friendShipInputDTO) => { 
        const token = makeFriendInput.token;
        const idFriend = makeFriendInput.id;
        if(!idFriend || !token){
            throw new Error("Uma ou mais entradas não são validas!");
        }
        const tokenData = this.authenticator.tokenData(token)
        return {tokenData , idFriend }
    }
    public makeFriend = async(makeFriendInput : friendShipInputDTO): Promise<void>=> {
        
        const{tokenData , idFriend } = this.validation(makeFriendInput)
        const id = this.idGenerator.generate()
        await this.userExistsById(idFriend)

        const makeFriendInput2DB : friendShipDBOutputtDTO ={ 
            id, 
            id_user: tokenData.id, 
            id_friend: idFriend,
        }
        await this.friendShipData.makeFriend(makeFriendInput2DB)
    }
    
    public unFriend = async(unFriendInput : friendShipInputDTO): Promise<void>=> {
        
        const{tokenData , idFriend } = this.validation(unFriendInput)
        console.log()
         //cheking is users exists at User tables
         await this.userExistsById(idFriend)
         //cheking is users friendships existe -  at User tables
        await this.userFriendTableById(idFriend)

        const unFriendInputDB: unfriendShipDBOutputtDTO = { 
            id_user: tokenData.id, 
            id_friend: idFriend,
        }
        await this.friendShipData.unFriend(unFriendInputDB)
    }
    
    public userExistsById = async(id: string): Promise<UserOutputDBDTO[]> =>{ 
    //   *** UsersTable *** 
    //   This method has a return just is case is needed later. 
    //   It checks wheather or not the user exists at user's table. 

        const isUser: UserOutputDBDTO[] = await this.userData.userFriendById(id)

        if(isUser.length === 0 || !isUser  ) { 
            throw new Error("Este usuario não existe!");
        }
        return isUser
    }

    public userFriendTableById = async(id: string): Promise<friendShipDBOutputtDTO[]> =>{ 
         //  *** Friendship table ***
        //   This method has a return just is case is needed later. 
        //   It checks wheather or not the user exists at user's table. 

        const isUser :friendShipDBOutputtDTO[] = await this.friendShipData.userFriendByIdFriendShipTable(id)
    
         if(isUser.length === 0 || !isUser  ) { 
             throw new Error("Esta amizade não existe!");
         }
         return isUser 
     }
}