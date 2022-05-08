import { feedInputDBDTO, FeedUser } from "../Model/Feed";
import { BaseDataBase } from "./BaseDateBase";

export class FeedData  extends BaseDataBase { 

   public getFeed = async(userId: string) : Promise<FeedUser[]> => { 
      try{ 
       const posts: FeedUser[] = await BaseDataBase.connection("USER")
           .join("LABOOK_FRIENDSHIP" , {"LABOOK_FRIENDSHIP.id_friend":"USER.id"} )
           .join("LABOOK_POST" , {"LABOOK_FRIENDSHIP.id_friend":"LABOOK_POST.post_user_id"})
           .where({"id_user": userId})
           .select( "LABOOK_POST.id",
           "name" ,
           "id_user",
           "id_friend",
           "picture",
           "description" ,
           "created_at" ,
           "type" ,
           "post_user_id" )

        return posts
      }
      catch(error: any){ 
          throw new Error(error.sqlmessage || error.message );
      }
   }
}
