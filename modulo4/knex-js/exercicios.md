## Exercicio 

### 1 
```
 a) Explique como é a resposta que temos quando usamos o `raw`.
 ```
 Utilizando connection.raw  enviamos a requisao para o banco de dados exatamente 
 como o Workbench. A reposta é um array de 2 arrays com objetos dentro deles o primeiro array  é RowDataPacket e o Segundo é FieldPacket.  Entao para recebermos somente 
 o importante pegamos o index 0 do index 0. 
```

b) Faça uma função que busque um ator pelo nome;
````
const getActorById = async (name: string) =>{ 
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
`)
return result [0][0]


getActorById("Joe Doe")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});


    (async () => {
  console.log("await", await getActorById("Joe+Doe") )
})()

app.get("/users/:name", async (req: Request, res: Response) => {
    try {
      const name = req.params.name
  
      console.log(await getActorById("Joe Doe"))
  
      res.end()
    } catch (error:any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  })


```




c) *Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*


```
            const getActorById = async (gender: string) =>{ 
                const result = await connection.raw(`
                SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
            `)
            return result[0][0]
            }



            getActorById("male")
                .then(result => {
                    console.log(result)
                })
                .catch(err => {
                    console.log(err)
                });


            (async () => {
                console.log("await", await getActorById("male") )
                })()

            app.get("/users/:gender", async (req: Request, res: Response) => {
            try {
            const gender = req.params.gender
        
            console.log("postman1", await getActorById(gender))
        
            res.end()
            } catch (error:any) {
                console.log(error.message)
            res.status(500).send("Unexpected error")
            }
            })



```

## Exercicio2 

```
a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
````
```
            const salario = async(salary:number, id: string): Promise<void> => {
                await connection("Actor")
                .update({ salary})
                .where("id", id );

            }

            app.put("/users/:id" , (req: Request , res: Response) => { 
                const id: string   = req.params.id;
                const salary:number = req.body.salary;
                salario(salary, id )
                console.log( salary , id)
                res.send()
            } )


```

```
b) Uma função que receba um id e delete um ator da tabela
```

 const deleteAtor = async(id:string): Promise<void> =>{ 
     await connection("Actor")
     .delete()
     .where("id", id);
 }

app.delete("/users" , (req:Request , res: Response)=> {
     const id = req.body.id;
     console.log(req.body.id)
     deleteAtor(id)
     res.status(200).send(`Deletado`)

})



```
c) *Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`*
```

```

    const salarioMedioPorSexo = async (gender: string): Promise<any> => {
        const result = await connection("Actor")
          .avg("salary as average")
          .where( "gender", gender);
      
        return result[0].average;
      };


<!-- app.get("/user/:gender" , (req:Request , res:Response) => {
    const gender = req.body.gender;
    console.log(gender);
    const salarioMedio =  salarioMedioPorSexo(gender)
    console.log(salarioMedio)
    res.send(salarioMedio)

}) -->
    const salarioMedioPorSexo = async (gender: string): Promise<any> => {
        const result = await connection("Actor")
          .avg("salary")
          .where( "gender", gender);
      
        return result[0];
      };


```

## Exercicio 3 

```
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


```
b) Crie um endpoint agora com as seguintes especificações:

- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero
```

app.get("/actor" ,async (req:Request , res : Response)=> { 
   try{ 
    const gender = req.query.gender as string 
    const numeroPorSexoGet  = await numeroSexo(gender)
    console.log(numeroPorSexoGet)
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


```


```
- Exercício 4
    
    Para finalizar o estudo, você vai criar mais um endpoint. Só que, antes, queremos dar mais um exemplo. Vamos fazer um endpoint para criar um novo ator. Para isso, deve

```    

```
const atualizaSalario = async (salary:number, id: string): Promise<any> => {
    const result = await connection("Actor")
    .update("salary" , salary)
    .where("id", id)
}

app.put("/actor" , async (req:Request , res:Response)=>{
    try{
    const {id, salary} = req.body;
    console.log(id, salary)
    const salarioGet = await atualizaSalario(salary , id )
    res.status(200).send("Success")
    }
    catch(e:any){ 
        res.status(400).send(e.message)

    }

})

```



