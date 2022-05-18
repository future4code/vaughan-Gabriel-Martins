import { Competition } from "../business/entities/Competitions";
import { Competitors } from "../business/entities/Competitors";
import { CompetitionOutputDTO } from "../controller/model/competitionModel";


let competitions: CompetitionOutputDTO[] = []

export class CompetitionDatabase {
    public inserting = (input: Competition) => {

        const competition: CompetitionOutputDTO = {
            id: input.id,
            status: input.status,
            competitionName: input.competitionName,
        }

        competitions.push(competition)
        console.log("competitionsDATABASE",  competitions)

    }


}