import { app } from "./app";
import { CompetitionBusiness } from "./business/CompetitionBusiness";
import { CompetitorBusiness } from "./business/CompetitorBusiness";
import { idGenerator } from "./business/services/IdGenerator";
import { CompetitionController } from "./controller/CompetitionController";
import {CompetitorController} from "./controller/CompetitorController"
import { CompetitionDatabase } from "./database/CompetitionDatabase ";
import { CompetitorDatabase } from "./database/CompetitorDatabase";



const competitorBusiness = new CompetitorBusiness(
    new idGenerator(),
    new CompetitorDatabase()
)

const competitorController = new CompetitorController(
    competitorBusiness
)

const competitionBusiness = new CompetitionBusiness(
    new idGenerator(),
    new CompetitionDatabase()
)

const competitionController = new CompetitionController(
    competitionBusiness
)


app.post("/competitor", competitorController.creating)


app.post("/competition", competitionController.creating)