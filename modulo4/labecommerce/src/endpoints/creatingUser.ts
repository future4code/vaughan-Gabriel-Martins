import { Request, Response } from "express"
import { allUser } from "../Data/dbgetingUsers";
import populateUser from "../Data/dbcreatingUsers";
import { users } from "../types";


export async function creatingUser(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password }:
      { name: string, email: string, password: string }
      = req.body
    if (name && email && password && typeof name === "string"
      && typeof email === "string" && typeof password === "string") {
      const id = Date.now().toString();
      const user: users[] = [{ id, name, email, password }]
      const response = await populateUser(user)
      res.send(response)
    } else throw new Error("Uma das entradas não é valida")
  }
  catch (error: any) {
    res.status(400).send(error.message)
  }
}

