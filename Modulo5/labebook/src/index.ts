import { app} from "./CONTROLLER/app"
import { UserController } from "./CONTROLLER/UserController"
import { User } from "./Types/user"




//sign up user 
app.post("/user/signup" , UserController.signup)

// login user 
app.post("/user/login" , UserController.login)