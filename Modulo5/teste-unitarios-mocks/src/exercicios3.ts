import { validateCharacter } from "./exercicios2";
import { Personagem } from "./types";


// export interface Personagem { 
//     nome: string, 
//     vida: number, 
//     defesa: number, 
//     forca: number
// }



const performAttack = (attacker: Personagem , defender: Personagem ) => { 

     const resultCaracter1 = validateCharacter(attacker)
     const resultCaracter2 = validateCharacter(defender)
     if ( !resultCaracter1 || !resultCaracter2 )
     {
        throw new Error("Invalid Character!");
     }
     
     if(defender.defesa > attacker.forca)
     {    
         console.log("vida", defender.vida )
         console.log("forca - defesa", attacker.forca - defender.defesa )
     const newDefender = {...defender, vida : defender.vida - (attacker.forca - defender.defesa )}
     }

}

// Quando colocamos a funcao entrando como parametro transferimos a responsabilidade 
// para o local onde esta funcao sera chamada. 

export const porformAttackInverted = (
    attacker: Personagem,
    defender: Personagem , 
    validation :(character: Personagem) =>(boolean) ) => { 

        const resultCaracter1 =  validation(attacker)
        const resultCaracter2 =  validation(defender)

        if ( !resultCaracter1 || !resultCaracter2 )
        {
           throw new Error("Invalid Character!");
        }
        
        if(defender.defesa < attacker.forca)
        {
        // defender = {...defender, vida : defender.vida - (attacker.forca - defender.defesa )}
        defender.vida -=  (attacker.forca - defender.defesa )
        }
  
        console.log( "defender", defender.vida)
        }
    


