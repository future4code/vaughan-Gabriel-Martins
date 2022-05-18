import { Competitors } from "../business/entities/Competitors";
import { CompetitorOutputDTO } from "../controller/model/competitorModel";


let competitors : Competitors[] =  [] 

export class CompetitorDatabase { 
    public inserting =(input:Competitors )=> { 

        const competitor : CompetitorOutputDTO ={ 

            id: input.id,
            competition: input.competition,
            name: input.name, 
            value: input.value

        }

        competitors.push(competitor)
        console.log("competitors1",  competitors)
       
    } 


}    