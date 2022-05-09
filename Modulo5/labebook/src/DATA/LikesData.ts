import { connect } from "http2";
import { likesOutputDBDTO } from "../Model/LIkes";
import { BaseDataBase } from "./BaseDateBase";



export class LikesData extends BaseDataBase {
    public insertLikeIt = async (input: likesOutputDBDTO) => {
        try {
            return BaseDataBase.connection("LABOOK_POST_LIKES_USERS").insert(input)
        }
        catch (error: any) {
            throw new Error(error.sqlmessage || error.message);
        }
    }
    public deleteLikeIt = async (input: likesOutputDBDTO) => { 
         try {
             
            return BaseDataBase.connection("LABOOK_POST_LIKES_USERS")
                 .where({post_id :input.post_id})
                 .andWhere({user_id :input.user_id})
                 .delete()

         } catch (error: any) {
            throw new Error(error.sqlmessage || error.message);
         }
    }
    public postLiked = async (input: likesOutputDBDTO) => {
        try {
            return BaseDataBase.connection("LABOOK_POST_LIKES_USERS")
                .where({ post_id: input.post_id })
                .select()
        }
        catch (error: any) {
            throw new Error(error.sqlmessage || error.message);
        }
    }
    public postExists = async (input: likesOutputDBDTO) => {
        try {
            return BaseDataBase.connection("LABOOK_POST")
                .where({ id : input.post_id })
                .select()
        }
        catch (error: any) {
            throw new Error(error.sqlmessage || error.message);
        }
    }
}