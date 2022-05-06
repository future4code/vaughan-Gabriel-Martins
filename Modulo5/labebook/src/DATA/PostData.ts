import { PostDBDTO } from "../Model/Post";
import { BaseDataBase } from "./BaseDateBase";



export class PostData extends BaseDataBase{ 
    public createPost = async (post: PostDBDTO): Promise<void> => { 
    try{
        console.log(post)
         await BaseDataBase.connetion("LABOOK_POST").insert(post)
    }
 catch (error: any) {
    throw new Error(
        error.sqlmessage || error.message || "Unexpected error at DB!"
    );
    }
    } 
}