import { Personagem } from "./types";


export const validateCharacter = (personagem : Personagem)  => { 

   if(!personagem.nome || !personagem.vida || !personagem.defesa || !personagem.forca )
   {
     return false 
   }
    if(personagem.vida <=0 || personagem.forca <= 0 || personagem.defesa <=0 ){
         return false;
     }
     return  true;
}