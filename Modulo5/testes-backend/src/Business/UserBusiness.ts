import { UserData } from "../Data /UserData";
import { GetUserByIdInputDTO, GetUserByIdDBDTO } from "../models/user";


export class UserBusiness {
    constructor(
        private userData: UserData,
    ) { }


    public getUserById = async (input: GetUserByIdInputDTO): Promise<any> => {

        if (!input.id) {
            throw new Error("Entrada invalida!");
        }
        const inputDB: GetUserByIdDBDTO = { id: input.id }

        const result = await this.userData.getUserById(inputDB)

    }
}