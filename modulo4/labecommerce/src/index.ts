import app from "./app";
import { creatingUser } from "./endpoints/creatingUser";
import { getAllUsers } from "./endpoints/getAllUsers";



app.get("/users", getAllUsers)



app.post("/users", creatingUser)