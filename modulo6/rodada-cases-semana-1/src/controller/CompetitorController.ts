import {Request, Response } from "express"; 
import { CompetitorBusiness } from "../business/CompetitorBusiness";
import { CompetitorInputDTO } from "./model/competitorModel";





// {
//     "competicao": "100m classificatoria 1", 
//     "atleta": "Joao das Neves", 
//     "value": "10.234", 
//     "unidade": "s"
//   }


 export class CompetitorController { 
     constructor(
         private competitorBusiness : CompetitorBusiness
     ){}

    //  public creating = async (request: Request, response: Response): Promise<void> => { 
     public creating =  (request: Request, response: Response): void => { 
         try{ 

             
             const input = request.body;
             
             //    console.log(input)
             
             const competitor : CompetitorInputDTO = { 
                 competition: input.competition,
                 name: input.name, 
                 value: input.value
                }
                
                
                //    await this.competitorBusiness.creating(competitor) 
                this.competitorBusiness.creating(competitor) 
            }catch(error: any){ 
                response.status(400).send(error.message)
            }
     }

     

 }