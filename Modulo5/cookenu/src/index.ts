import {app} from "./app";
import { CreatingFollowingUser } from "./endpoints/CreatingfollowingUser";
import { creatingRecipes } from "./endpoints/creatingRecipes";
import { feed } from "./endpoints/feed";
import { GettingUserInfo } from "./endpoints/GettingUserInfo";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";


app.post("/signup", signup)

app.post("/login", login)

app.get("/user", GettingUserInfo)

app.post("/user", CreatingFollowingUser)

app.post("/recipes", creatingRecipes)

app.get("/feed", feed)



