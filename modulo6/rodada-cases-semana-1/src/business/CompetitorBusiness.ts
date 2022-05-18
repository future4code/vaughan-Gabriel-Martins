import { CompetitorInputDTO } from "../controller/model/competitorModel";
import { CompetitorDatabase } from "../database/CompetitorDatabase";
import { Competitors } from "./entities/Competitors";


import { idGenerator } from "./services/IdGenerator";


export class CompetitorBusiness { 
    constructor(
        private idGenerator: idGenerator,
        private competitorDatabase : CompetitorDatabase
     ){}
 
    // public creating = async (input:CompetitorInputDTO ): Promise<void> => { 
    public creating = (input:CompetitorInputDTO ): void => { 
         const {competition , name, value}  = input;

        if(!competition ||  !name||  !value)
        {
          throw new Error("One or more inputs are not valid!")    
        }

        // Also needs a test if the competitions exists and/or is actually is happing.
        
        // { 
        //     "competition": "lorem", 
        //     "status": "open"
        // }

        const id = this.idGenerator.createId();

        const competitor: Competitors = { 
        id, 
        competition,
        name,
        value,
        }


       this.competitorDatabase.inserting(competitor) 
        // await this.competitorDatabase.inserting(competitor) 

    }
}