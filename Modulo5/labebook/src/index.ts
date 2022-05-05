import { UserBusiness } from "./BUSINESS/UserBusiness"
import { app} from "./CONTROLLER/app"
import { UserController } from "./CONTROLLER/UserController"
import { UserData } from "./DATA/UserData"
import { Authenticator } from "./SERVICES/Authenticator"
import { HashManager } from "./SERVICES/HashManager"
import { IdGenerator } from "./SERVICES/IdGenerator"
import { User } from "./Types/user"


const userBussiness  = new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(), 
    new Authenticator()
)

const userController  = new UserController(
    userBussiness
)



//sign up user 
app.post("/user/signup" , userController.signup)

// login user 
app.post("/user/login" , userController.login)