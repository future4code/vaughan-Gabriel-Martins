import { Request, Response } from "express"
import { allUser } from "../Data/dbgetingUsers";


export async function getAllUsers(req: Request, res: Response): Promise<void> {

  const response = await allUser()

  console.log(response)
  res.send(response)
}

