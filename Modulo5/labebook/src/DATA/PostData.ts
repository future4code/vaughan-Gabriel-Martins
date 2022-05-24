import { PostByIdInputDTO, PostDBDTO } from "../Model/Post";
import { BaseDataBase } from "./BaseDateBase";

export class PostData extends BaseDataBase{ 
    public createPost = async (post: PostDBDTO): Promise<void> => { 
     try{
        console.log(post)
         await BaseDataBase.connection("LABOOK_POST").insert(post)
     }catch(error: any) {
        throw  Error(error.message || error.sqlmessage )
    } 
    }
    public getPostById = async (id:PostByIdInputDTO): Promise<PostDBDTO[]>=>{
        try {
             const post : PostDBDTO[] = await BaseDataBase
                            .connection("LABOOK_POST")
                            .orderBy("created_at")
                            .where(id)
             return post
        }catch (error: any) {
            throw new Error(
                error.sqlmessage || error.message || "Unexpected error at DB!"
            );
        }
    }
}