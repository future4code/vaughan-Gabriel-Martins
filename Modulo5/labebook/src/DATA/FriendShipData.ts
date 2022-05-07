import { connect } from "http2";
import { friendShipDBOutputtDTO } from "../Model/FriendShip";
import { BaseDataBase } from "./BaseDateBase";




export class FriendShipData extends BaseDataBase {
    public makeFriend = async (input: friendShipDBOutputtDTO): Promise<void> => {

        await BaseDataBase.connection("LABOOK_FRIENDSHIP")
            .insert(input)

    }
}