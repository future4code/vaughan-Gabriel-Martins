import { CompetitionInputDTO } from "../controller/model/competitionModel"
import { CompetitionDatabase } from "../database/CompetitionDatabase ";
import { Competition } from "./entities/Competitions";
import { idGenerator } from "./services/IdGenerator";


export class CompetitionBusiness { 
    constructor(
        private idGenerator :idGenerator,
        private CompetitionDatabase :CompetitionDatabase
    ){}

    public creating = async (input: CompetitionInputDTO) : Promise<void> => { 

        const { status, competitionName} = input; 

        if(!status||!competitionName ) { }

        const id = this.idGenerator.createId()

        const competition : Competition = { 
            id, 
            status, 
            competitionName
        }
        
        // await this.CompetitionDatabase.inserting(competition)
        await this.CompetitionDatabase.inserting(competition)

    }
}