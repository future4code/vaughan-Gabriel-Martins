import * as jwt from "jsonwebtoken";
import { auth } from "./types";
import dotenv from "dotenv"; 

dotenv.config();


  const expiresIn = "1min";

  export const generateToken = (input: auth): string =>{
    
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );

    return token;
  }


