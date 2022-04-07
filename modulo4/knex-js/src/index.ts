import express, { Response, Request} from 'express';
import knex from 'knex';
import cors from 'cors';
import dotenv from 'dotenv';
import {AddressInfo} from "net";


dotenv.config(); 

const app = express();
app.use(express.json());
app.use(cors());



export const connection = knex({
    client:"mysql",
    connection:{
        // host:process.env.DB_HOST,
        // host:process.env.DB_HOST,
        host: "35.226.146.116",
        // password:process.env.DB_PSS,
        port: 3306,
        user: "21712799-gabriel-martins",
        // user:process.env.DB_USER,
        password: "K23YMm05MI#m2mLagv#q",
        // password:process.env.DB_PASS,
        // database:process.env.DB_NAME,
        database: "vaughan-21712799-gabriel-martins",
        multipleStatements: true
    }
});

const getActorById = async (id: string) =>{ 
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = "${id}"
`)
return result[0][0]
}

// // Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("002")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log("await", await getActorById("002") )
})()


// app.get("/users/:id", async (req: Request, res: Response) => {
//     try {
//       const id = req.params.id
  
//       console.log(await getActorById(id))
  
//       res.end()
//     } catch (error:any) {
//           console.log(error.message)
//       res.status(500).send("Unexpected error")
//     }
//   })


const server = app.listen(process.env.PORT || 3003, ()=>{
 if(server){ 
     const address = server.address() as AddressInfo;
 }else { 
     console.log(`Server has failed`)
 }
});