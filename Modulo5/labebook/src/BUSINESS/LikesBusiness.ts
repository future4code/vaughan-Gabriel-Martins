import { Request , Response } from "express";
import { LikesData } from "../DATA/LikesData";
import { likesInputDTO, likesOutputDBDTO } from "../Model/LIkes";
import { Authenticator } from "../SERVICES/Authenticator";
import { IdGenerator } from "../SERVICES/IdGenerator";



export class LikesBusiness { 
    constructor (
       private authenticator : Authenticator,
       private likesData: LikesData, 
       private idGenerator: IdGenerator
       
    ){}

    public validation =(input : likesInputDTO) => { 
        const token = input.token;
        const postId = input.postId
        if(!postId || !token){
            throw new Error("Uma ou mais entradas não são validas!");
        }
        const tokenData = this.authenticator.tokenData(token)
        return {tokenData , postId }
    }

    public likeIt = async(input:likesInputDTO) => { 
        
        const{tokenData , postId } = this.validation(input)
    
        const userId = tokenData.id;

        const id = this.idGenerator.generate()

        const inputDB : likesOutputDBDTO = { 
            id : id ,
            user_id: userId, 
            post_id: postId 
        }

        const result = await this.likesData.insertLikeIt(inputDB)
        return result;
    }

}
        


    

