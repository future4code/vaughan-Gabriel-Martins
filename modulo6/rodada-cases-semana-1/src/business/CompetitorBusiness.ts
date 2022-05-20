import { CompetitorInputDTO } from "../controller/model/competitorModel";
import { RackingInputDTO } from "../controller/model/rackingModel";
import { CompetitorDatabase } from "../database/CompetitorDatabase";
import { CompetitionBusiness } from "./CompetitionBusiness";
import { Competition } from "./entities/Competitions";
import { Competitors } from "./entities/Competitors";

import { idGenerator } from "./services/IdGenerator";

export class CompetitorBusiness {
  constructor(
    private idGenerator: idGenerator,
    private competitorDatabase: CompetitorDatabase,
    private competitionBusiness: CompetitionBusiness
  ) {}

  // public creating = async (input:CompetitorInputDTO ): Promise<void> => {
  public creating = async (input: CompetitorInputDTO): Promise<void> => {
    const { competition, name, value } = input;

    if (!competition || !name || !value) {
      throw new Error("One or more inputs are not valid!");
    }

    // Also needs a test if the competitions exists and/or is actually is happing.

    const competitionExistOnDB: Competition | undefined =
      await this.competitionBusiness.getCompetition(competition);

    if (!competitionExistOnDB) {
      throw new Error("There is no register of this competition!");
    }

    if (competitionExistOnDB.status === "close") {
      throw new Error("The competition is closed!");
    }

    const id = this.idGenerator.createId();

    const competitor: Competitors = {
      id,
      competition,
      name,
      value,
    };

    console.log(competition);

    await this.competitorDatabase.inserting(competitor);
  };
  public gettingRacking = async (input: RackingInputDTO): Promise<void> => {
    const { competitionName } = input;

    if (!competitionName) {
      throw new Error("This is invalid competition!");
    }

    const competitionExistOnDB: Competition | undefined =
      await this.competitionBusiness.getCompetition(competitionName);
    if (!competitionExistOnDB) {
      throw new Error("There is no register of this competition!");
    }

    const competition = {
      competitionName: competitionName,
    };

    if (competitionName.toLowerCase().includes("100m")) {
      await this.competitorDatabase.gettingRacking(competition);
    }

    // if (competition.competitionName.includes("darts")) {
    //   await this.competitorDatabase.gettingRackingDarts(competition);
    // }
  };
}
