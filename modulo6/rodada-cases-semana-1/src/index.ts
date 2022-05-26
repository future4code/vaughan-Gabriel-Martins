import { app } from "./app";
import { CompetitorBusiness } from "./business/CompetitorBusiness";
import { idGenerator } from "./business/services/IdGenerator";
import {CompetitorController} from "./controller/CompetitionController"
import { CompetitorDatabase } from "./database/CompetitorDatabase";



const competitorBusiness = new CompetitorBusiness(
    new idGenerator(),
    new CompetitorDatabase()
)

const competitorController = new CompetitorController(
    competitorBusiness
)


app.post("/competitor", competitorController.creating)