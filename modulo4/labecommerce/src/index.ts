import app from "./app";
import { creatingUser } from "./endpoints/creatingUser";
import { getAllUsers } from "./endpoints/getAllUsers";
import creatingProducts from "./endpoints/creatingProducts";
import { getgetingAllProducts } from "./endpoints/getAllProducts";



app.get("/users", getAllUsers)



app.post("/users", creatingUser)



app.post("/products", creatingProducts)



app.get("/products", getgetingAllProducts)