import { FeedBusiness } from "./BUSINESS/FeedBusiness"
import { FriendShipBusiness } from "./BUSINESS/FriendShipBusiness"
import { LikesBusiness } from "./BUSINESS/LikesBusiness"
import { PostBusiness } from "./BUSINESS/PostBusiness"
import { UserBusiness } from "./BUSINESS/UserBusiness"
import { app} from "./CONTROLLER/app"
import { FeedController } from "./CONTROLLER/FeedController"
import { FriendShipController } from "./CONTROLLER/FriendshipController"
import { LikesController } from "./CONTROLLER/LikesController"
import { PostController } from "./CONTROLLER/PostController"
import { UserController } from "./CONTROLLER/UserController"
import { FeedData } from "./DATA/FeedData"
import { FriendShipData } from "./DATA/FriendShipData"
import { LikesData } from "./DATA/LikesData"
import { PostData } from "./DATA/PostData"
import { UserData } from "./DATA/UserData"
import { Authenticator } from "./SERVICES/Authenticator"
import { HashManager } from "./SERVICES/HashManager"
import { IdGenerator } from "./SERVICES/IdGenerator"

// USER 
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

// FEED 
const feedBusiness = new FeedBusiness(
    new Authenticator(),
    new FeedData()
)
const feedController = new FeedController(
    feedBusiness
)

// Likes  

const likesBusiness = new LikesBusiness(
    new Authenticator(),
    new LikesData(), 
    new IdGenerator()
)
const likesController = new LikesController(
    likesBusiness
)

//sign up user 
app.post("/user/signup" , userController.signup)

// login user 
app.post("/user/login" , userController.login)

//Making friends 

app.post("/user/friendship", friendShipController.makeFriend)

// Unfriend
app.delete("/user/friendship", friendShipController.unFriend)

// All friends feedings 
app.get("/user/feed" , feedController.getfeed)


// Friends filterd by type 
app.get("/user/feed/type" , feedController.feedbyType)
// new post 
app.post("/post/new" , postController.createPost)

// get post by id 
app.get("/post", postController.getPostById)

// Like a post  
app.post("/user/post" , likesController.likeIt)

