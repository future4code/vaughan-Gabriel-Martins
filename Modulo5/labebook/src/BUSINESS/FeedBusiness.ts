import { FeedData } from "../DATA/FeedData";
import { feedInputDTO, FeedUser } from "../Model/Feed";
import { Authenticator } from "../SERVICES/Authenticator";



export class FeedBusiness { 
    constructor (
     private authentication : Authenticator,
      private feedData : FeedData
    ) {}

    public getPostFriends  = async(userInput: feedInputDTO)=> { 
         
        if(!userInput.token){ 
            throw new Error("Sem Token");
        }
        const tokenData = this.authentication.tokenData(userInput.token)
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
        
        console.log(FeedUser)
        return FeedUser;
    }
}
