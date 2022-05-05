import { PostDBDTO } from "../Model/Post";
import { BaseDataBase } from "./BaseDateBase";





export class PostData extends BaseDataBase{ 
    public createPost = async (post: PostDBDTO): Promise<void> => { 
         BaseDataBase.connetion("POST").insert(post)

    }
}