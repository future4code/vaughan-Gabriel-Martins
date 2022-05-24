import UserDBDTO from "../Model/User"
import { BaseDataBase } from "./BaseDateBase";

export class UserData extends BaseDataBase {

    public insertUser = async (user: UserDBDTO): Promise<void> => {
        try {
            await BaseDataBase.connection("USER").insert(user)
        } catch (error: any) {
            throw new Error(
                error.sqlmessage || error.message || "Unexpected error at DB!"
            );
        }
    }
    public userByEmail = async (email: string): Promise<UserDBDTO[]> => {
        try {
            return BaseDataBase.connection("USER").where({ email })

        } catch (error: any) {
            throw new Error(
                error.sqlmessage || error.message || "Unexpected error at DB!"
            );
        }
    }
    public userFriendById = async (id: string): Promise<any> => {
        try {
            return BaseDataBase.connection("USER")
                .where({ id }).select()
        } catch (error: any) {
            throw new Error(
                error.sqlmessage || error.message || "Unexpected error at DB!"
            );
        }
    }
}