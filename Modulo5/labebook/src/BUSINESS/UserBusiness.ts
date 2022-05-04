import { SignupInputUserDTO } from "../Types/signupInputUserDto";



export class UserBusiness  { 
    public signup = async (user: SignupInputUserDTO) => { 

        if(!user.email || !user.name || !user.password){
            throw new Error("Uma ou mais entradas não são validas!");
        }




    }
}