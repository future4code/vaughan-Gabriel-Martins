import { Competitors } from "../business/entities/Competitors";
import { CompetitorOutputDTO } from "../controller/model/competitorModel";
import { RackingInputDTO } from "../controller/model/rackingModel";
import { BaseDatabase } from "./BaseDatabase";
import { RackingOutDTO } from "./model/racking";


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
    public gettingRacking = async (input: RackingInputDTO): Promise<any> => {

        const table_name = "case_1_competitors"

        const competition: RackingOutDTO = {
            competition: input.competitionName
        }
        const result = await BaseDatabase.connection(table_name)
            .where(competition).orderBy("value")
            console.log(result)

        return result 
    }
    // public gettingRackingDarts = async (input: RackingInputDTO): Promise<any> => {

    //     const table_name = "case_1_competitors"

    //     const competition: RackingOutDTO = {
    //         competition: input.competitionName
    //     }
    //     const result = await BaseDatabase.connection(table_name)
    //         .where(competition).orderBy("value" , "desc")
            
    //     return result 
    // }
}