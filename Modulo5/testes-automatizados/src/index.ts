import { User } from "./model";


 export function performPurchase(user: User, value: number): User | undefined { 
     if( user.balance >= value)
     { 
      const newUser = {name: user.name, balance: user.balance - value }  
      return newUser
     }
     return 
}






