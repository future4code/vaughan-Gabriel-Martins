import {app} from "./app";
import { CreatingFollowingUser } from "./endpoints/followingUser";
import { creatingRecipes } from "./endpoints/creatingRecipes";
import { feed } from "./endpoints/feed";
import { gettingRecipeById } from "./endpoints/GettingRecipes";
import { GettingUserInfo } from "./endpoints/GettingUserInfo";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";
import { unFollowingUser } from "./endpoints/unfollowingUser";


app.post("/signup", signup)
app.post("/signup", signup)

app.post("/login", login)

app.get("/user/profile", GettingUserInfo)

app.post("/user/follow", CreatingFollowingUser)

app.post("/user/unfollow", unFollowingUser)

app.post("/recipe", creatingRecipes)

app.get("/recipe/:id", gettingRecipeById)

app.get("/feed", feed)



