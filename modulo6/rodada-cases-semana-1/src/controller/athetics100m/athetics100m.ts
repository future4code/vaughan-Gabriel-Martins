import {Request, Response } from "express"; 





// {
//     "competicao": "100m classificatoria 1", 
//     "atleta": "Joao das Neves", 
//     "value": "10.234", 
//     "unidade": "s"
//   }


 export class Athetics100m { 
     constructor(){}

     public competitor = async (request: Request, response: Response): Promise<void> => { 

           const { competition , name , value } = request.body;
           const competitor = { 
               competition: competition,
               name: name, 
               value: value
           }
     }

 }