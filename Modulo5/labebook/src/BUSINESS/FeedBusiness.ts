import { FeedData } from "../DATA/FeedData";
import { feedInputDTO, FeedUser, inputDTO } from "../Model/Feed";
import { Authenticator } from "../SERVICES/Authenticator";



export class FeedBusiness { 
    constructor (
     private authentication : Authenticator,
      private feedData : FeedData
    ) {}

    public getPostFriends  = async(userInput: feedInputDTO)=> { 
         
        if(!userInput.token){ 
            throw new Error("O Token não está presente!");
        }
        const tokenData = this.authentication.tokenData(userInput.token)
        // I wont throw an error for [] empty. That's not a error. It can be empty. 
        const feed = await this.feedData.getFeed(tokenData.id)
         
        const FeedUser  = feed.map( item => {return {
            idPost : item.id,
            idUser:item.id_user,
            picture:item.picture,
            description:item.description,
            createdAt:(item.created_at),
            type:item.type,
            postUserID:item.post_user_id,
        }})
        

        return FeedUser;
    }
    public getFeedType = async(userInputByType: inputDTO) => {
        
        if(!userInputByType.token || (userInputByType.type.toLowerCase().trim() !== "normal" && userInputByType.type.toLowerCase().trim() !== "evento")){ 
            throw new Error("Um ou mais entradas não são validas!");
        }
        const token : feedInputDTO = {token : userInputByType.token};
        const type = userInputByType.type
        const feedByType = await this.getPostFriends(token)

        const result = feedByType.filter(item => item.type.toLowerCase() === type.toLowerCase())
        return result

    }
}
