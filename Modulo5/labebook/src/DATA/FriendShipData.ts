import { friendShipDBOutputtDTO, unfriendShipDBOutputtDTO } from "../Model/FriendShip";
import { BaseDataBase } from "./BaseDateBase";




export class FriendShipData extends BaseDataBase {
    
    public makeFriend = async (input: friendShipDBOutputtDTO): Promise<void> => {
        await BaseDataBase.connection("LABOOK_FRIENDSHIP")
            .insert(input)
    }
    public unFriend = async (input: unfriendShipDBOutputtDTO): Promise<void> => {
        await BaseDataBase.connection("LABOOK_FRIENDSHIP")
              .where("id_user" , input.id_user).andWhere("id_friend", input.id_friend)
              .delete()
    }

    public  userFriendByIdFriendShipTable = async (id_friend: string ): Promise<any> => { 
        try {
         return  BaseDataBase.connection("LABOOK_FRIENDSHIP")
             .where({id_friend}).select()
        } catch (error: any) {
            throw new Error(
                error.sqlmessage || error.message || "Unexpected error at DB!"
            );
        }
    }
}