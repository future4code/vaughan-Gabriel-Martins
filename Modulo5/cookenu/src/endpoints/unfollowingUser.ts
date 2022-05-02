import { Request, Response } from "express"
import { SnsDB } from "../data/SnsDB"
import { UserDB } from "../data/userDB"
import { Authenticator } from "../services/Authenticator";



export const unFollowingUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const followedUserId = req.body.followedUserId as string;
        const token = req.headers.authorization as string;

        const userDb = new UserDB;
        const user = await userDb.finderUserById(followedUserId)

        const authenticator = new Authenticator();
        const tokenData = authenticator.getTokeData(token)

        const followingId = tokenData.id;

        const userFollowing = await userDb.finderUserById(followedUserId)

        if (!followedUserId || !token || !user || !userFollowing) {
            res.statusCode = 422;
            throw new Error("Entradas invalidas");  // 422
        }
        const snsDB = new SnsDB();
        console.log(followedUserId, followingId)
        await snsDB.unfollowingDB(followedUserId, followingId)
        res.status(200).send("Não esta mais seguindo!")
    }
    catch (error: any) {

        if (res.statusCode === 200) {
            res.status(500).send(error.message)
        } else {
            res.send({ message: error.message } || error.sqlMessage)
        }
    }

}
