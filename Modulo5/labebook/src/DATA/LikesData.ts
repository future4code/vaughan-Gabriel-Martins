import { connect } from "http2";
import { likesOutputDBDTO } from "../Model/LIkes";
import { BaseDataBase } from "./BaseDateBase";



export class LikesData  extends BaseDataBase { 

    public insertLikeIt = async(input: likesOutputDBDTO) => { 

     await BaseDataBase.connection("LABOOK_POST_LIKES_USERS").insert(input)

    }

}