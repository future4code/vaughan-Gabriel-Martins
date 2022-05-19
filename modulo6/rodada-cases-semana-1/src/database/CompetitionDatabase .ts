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

        const teste = [competitions.find((item) => item.competitionName === "1" )].map(item =>{ return {...item}})
        console.log("teste", teste)

        competitions.push(competition)
        console.log("competitionsDATABASE",  competitions)

    }


}