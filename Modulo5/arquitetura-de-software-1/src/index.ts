import { app} from "../src/controller/app"
import { UserController } from "./controller/UserController"


const userController = new UserController();


app.post("/signup", userController.signup)