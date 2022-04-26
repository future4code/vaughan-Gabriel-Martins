import { app } from  "./app";
import { userLogin } from "./endPoints.ts/login";
import { userSignup } from "./endPoints.ts/userSignup";

app.post("/user/signup" , userSignup)


app.post("/user/login" , userLogin)