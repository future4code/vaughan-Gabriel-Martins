import { Competitors } from "../business/entities/Competitors";
import { CompetitorOutputDTO } from "../controller/model/competitorModel";
import { BaseDatabase } from "./BaseDatabase";


let competitors: Competitors[] = []

export class CompetitorDatabase extends BaseDatabase {
    public inserting = async (input: Competitors): Promise<void> => {

        const table_name = "case_1_competitors"

        const competitor: CompetitorOutputDTO = {
            id: input.id,
            competition: input.competition,
            name: input.name,
            value: input.value
        }
        await BaseDatabase.connection(table_name)
            .insert(competitor)
    }
}