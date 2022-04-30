import {app} from "./app";
import { GettingUserInfo } from "./endpoints/GettingUserInfo";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";



app.post("/signup", signup)

app.post("/login", login)

app.get("/user", GettingUserInfo)





