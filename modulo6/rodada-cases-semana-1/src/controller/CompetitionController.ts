import {Request, Response } from "express"; 
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { CompetitionInputDTO } from "./model/competitionModel";






// {
//     "competicao": "100m classificatoria 1", 
//     "atleta": "Joao das Neves", 
//     "value": "10.234", 
//     "unidade": "s"
//   }


 export class CompetitionController { 
     constructor(
         private competitionBusiness : CompetitionBusiness
     ){}

    //  public creating = async (request: Request, response: Response): Promise<void> => { 
     public creating =  (request: Request, response: Response): void => { 
         try{ 
             const input = request.body;
             
             const competition : CompetitionInputDTO = { 
                competitionName: input.competitionName,
                 status: input.status
                }
                //    await this.competitionBusiness.creating(competition) 
                this.competitionBusiness.creating(competition) 
            }catch(error: any){ 
                response.status(400).send(error.message)
            }
     }

     

 }