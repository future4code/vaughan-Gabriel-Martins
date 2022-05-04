import { app} from "./CONTROLLER/app"
import { UserController } from "./CONTROLLER/UserController"
import { User } from "./Types/user"





app.post("/signup" , UserController.signup)