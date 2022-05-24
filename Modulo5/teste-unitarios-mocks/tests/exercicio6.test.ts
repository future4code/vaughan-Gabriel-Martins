
/* 
{ 
 input { 
    const attacker: Personagem = {
      nome: "Scorpion",
      vida: 1500,
      defesa: 200,
      forca: 600,
    };

    const defender: Personagem = {
      nome: "Kitana",
      vida: 1500,
      defesa: 400,
      forca: 800,
    };

 }
}
 */
import { Personagem } from "../src/types";
import { porformAttackInverted } from "../src/exercicios3";

 


describe("Exercicios 6" ,() =>{
    test("test 1 " , () => {
        const validatorMock = jest.fn(()=>{
            return true
        });

        const attacker: Personagem = {
            nome: "Scorpion",
            vida: 1500,
            defesa: 200,
            forca: 600,
        };
      
          const defender: Personagem = {
            nome: "Kitana",
            vida: 1500,
            defesa: 1000,
            forca: 800,
        };

        porformAttackInverted(attacker, defender , validatorMock)
        
        expect(defender.vida).toBe(1500)
        expect(defender).toEqual({   nome: "Kitana",
        vida: 1500,
        defesa: 1000,
        forca: 800,})
    })
    test("test 2 ", ()=> {
        const validationtester2 = jest.fn(()=> { 
            return false
        })

        const input1 : Personagem = 
        {  
            nome: "Gabriel", 
            vida: 10, 
            defesa: 100, 
            forca: 100
        }
        const input2 : Personagem = 
        { 
            nome: "Gabriel", 
            vida: 10, 
            defesa: -100, 
            forca: 100
        }
        try{
            
            porformAttackInverted
            (
                input1, 
                input2, 
                validationtester2
            )
        }catch(err: any)
        { 
           expect(err.message).toBe("Invalid Character!")
        }
        


    })
})