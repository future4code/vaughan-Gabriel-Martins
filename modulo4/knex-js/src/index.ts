import express, { Response, Request} from 'express';
import knex from 'knex';
import cors from 'cors';
import dotenv from 'dotenv';
import {AddressInfo} from "net";
import { send } from 'process';


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

// const getActorById = async (gender: string) =>{ 
//     const result = await connection.raw(`
//     SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
// `)
// return result[0][0]
// }

// // Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("male")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// // Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log("await", await getActorById("male") )
// })()


// app.get("/users/:gender", async (req: Request, res: Response) => {
//     try {
//       const gender = req.params.gender
  
//       console.log("postman1", await getActorById(gender))
  
//       res.end()
//     } catch (error:any) {
//           console.log(error.message)
//       res.status(500).send("Unexpected error")
//     }
//   })

// const createActor = async ( 
//     id: string, 
//     name: string, 
//     salary: number, 
//     gender: string, 
//     dateOfBirth: Date
// ): Promise<void> => { 
// await connection
//     .insert({
//     id:id,
//     name: name, 
//     salary: salary,
//     brith_date:dateOfBirth, 
//     gender:gender,
//     })
//     .into("Actor");
// };

// const salario = async(salary:number, id: string): Promise<void> => {
//     await connection("Actor")
//     .update({ salary})
//     .where("id", id );

// }

//  app.put("/users/:id" , (req: Request , res: Response) => { 
//      const id: string   = req.params.id;
//      const salary:number = req.body.salary;
//      salario(salary, id )
//      console.log( salary , id)
//      res.send()
//  } )



//  const deleteAtor = async(id:string): Promise<void> =>{ 
//      await connection("Actor")
//      .delete()
//      .where("id", id);
//  }

// app.delete("/users" , (req:Request , res: Response)=> {
//      const id = req.body.id;
//      console.log(req.body.id)
//      deleteAtor(id)
//      res.status(200).send(`Deletado`)

// })

//     const salarioMedioPorSexo = async (gender: string): Promise<any> => {
//         const result = await connection("Actor")
//           .avg("salary") 
//           .where( "gender", gender);
//         return result[0];
//       };

//       salarioMedioPorSexo("female")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});



// app.get("/user" , (req:Request , res:Response) => {
//     const gender = req.body.gender;
//     console.log(gender);


//     salarioMedioPorSexo(gender)
//     .then( result =>  
        
//         res.send(result)
//     ).catch(err => {
// 		console.log(err)
// 	});


// })



const pegaAtor =async (id:string): Promise<any>=> { 
  const result =  await connection("Actor")
    .select()
    .where("id", id)
   return result[0]
};



app.get("/actor/:id", async(req:Request, res: Response)=> { 
    try { 
        const pegarAtorGet = await pegaAtor(req.params.id )
        res.status(200).send(pegarAtorGet)
        console.log("teste")

    }
    catch(e:any){
        res.status(400).send({message: e.message })

    }
});


 const numeroSexo = async (gender:string): Promise<any> => { 
     const result = await connection("Actor")
     .count("gender as quantidade" )
     .where("gender" , gender)
     return result[0]
 }


app.get("/actor" ,async (req:Request , res : Response)=> { 
   try{ 
    const gender = req.query.gender as string 
    const numeroPorSexoGet  = await numeroSexo(gender)
    res.status(201).send(numeroPorSexoGet)

   }
  catch(e:any ){ 
      res.status(400).send({message: e.message })

  }



})


const server = app.listen(process.env.PORT || 3003, ()=>{
 if(server){ 
     const address = server.address() as AddressInfo;
 }else { 
     console.log(`Server has failed`)
 }
});




