import { FriendShipBusiness } from "./BUSINESS/FriendShipBusiness"
import { PostBusiness } from "./BUSINESS/PostBusiness"
import { UserBusiness } from "./BUSINESS/UserBusiness"
import { app} from "./CONTROLLER/app"
import { FriendShipController } from "./CONTROLLER/FriendshipController"
import { PostController } from "./CONTROLLER/PostController"
import { UserController } from "./CONTROLLER/UserController"
import { FriendShipData } from "./DATA/FriendShipData"
import { PostData } from "./DATA/PostData"
import { UserData } from "./DATA/UserData"
import { PostInputDTO, TYPE } from "./Model/Post"
import { Authenticator } from "./SERVICES/Authenticator"
import { HashManager } from "./SERVICES/HashManager"
import { IdGenerator } from "./SERVICES/IdGenerator"


const userBussiness  = new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(), 
    new Authenticator()
)
  

const userController  = new UserController(
    userBussiness
)

///   Post 
const postBusiness =new PostBusiness( 
    new PostData(),
    new IdGenerator(),
    new HashManager(), 
    new Authenticator()
)

const postController = new PostController(
    postBusiness
)


// FriendShip  

const friendShipBusiness = new FriendShipBusiness(
    new Authenticator(),
    new IdGenerator(),
    new FriendShipData(),
    new UserData()
)

const friendShipController = new FriendShipController(
     friendShipBusiness
)

//sign up user 
app.post("/user/signup" , userController.signup)

// login user 
app.post("/user/login" , userController.login)

// new post 
app.post("/post/new" , postController.createPost)

// get post by id 
app.get("/post", postController.getPostById)


//Making friends 

app.post("/user/friendship", friendShipController.makeFriend)


app.delete("/user/friendship", friendShipController.unFriend)



