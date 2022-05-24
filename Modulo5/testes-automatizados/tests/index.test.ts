import { performPurchase } from "../src/index";
import { User } from "../src/model";

describe("Exercicios 2 testes "  , ()=> {
    
   test( "teste a " , () => {

      const user : User = {name: "gabriel" , balance : 100  }
      const value = 50;

      const result =  performPurchase(user , value )
      expect(result).toEqual(
      {
          name:"gabriel", 
          balance: 50
      }
      )
       
    }) 
   test( "teste b " , () => {

      const user : User = {name: "gabriel" , balance : 100  }
      const value = 100;

      const result =  performPurchase(user , value )
      expect(result).toEqual(
      {
          name:"gabriel", 
          balance: 0
      })
       
    }) 


     test ("teste c", ()=>{

        const user : User = 
        {
          name: "gabriel",
          balance: 100
        }

        const resultc = performPurchase(user, 120)
        // expect(resultc).not.toEqual("")
        expect(resultc).not.toBeDefined()
     })
 });