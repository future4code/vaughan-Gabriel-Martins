import { app } from  "./app";
import { userSignup } from "./endPoints.ts/userSignup";

app.post("/user/signup" , userSignup)