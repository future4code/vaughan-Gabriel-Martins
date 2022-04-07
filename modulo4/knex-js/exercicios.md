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