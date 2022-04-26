### - Exercício 1
    
    Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante 
    encontrar um que seja fácil de guardar e que garanta unicidade.
    Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso. 
                    
                
                
                import { v4 } from "uuid"

                const id = v4();

                console.log("Generated Id: ", id);


a) Acredito com o uso de string ao inves de numeros diminuimos em muito a probabilidade 
dos dos id se repetirem. Sendo que quando usamos strings poderiamos usar o alfabeto todo
apesar da bibiliteca uuid v4 use somendo hex que reduz para 16 caracteres mas mesmo assim 
ainda ai aumenta em muito o range de ids. 




### - Exercício 2
    
    Agora que já possuímos um id, podemos começar a modelagem do banco. O nosso usuário precisa ter um email 
    e uma senha salva para que a gente consiga fazer a autenticação dele.  Na hora de salvar essas informações na 
    tabela, é interessante que façamos uma função específica para isso. Abaixo, há um exemplo:


                            
                                        const userTableName = "User";

                                        const connection = knex({
                                        client: "mysql",
                                        connection: {
                                            host: process.env.DB_HOST,
                                            port: 3306,
                                            user: process.env.DB_USER,
                                            password: process.env.DB_PASSWORD,
                                            database: process.env.DB_SCHEMA,
                                        },
                                        });

                                        const createUser = async (id: string, email: string, password: string) => {
                                        await connection
                                            .into(userTableName);
                                            .insert({ id, email, password})
                                        };


    a) *Explique o código acima com as suas palavras.*

         Estou guardando o nome     " const userTableName = "User";  "  dentro das variavel  para ser usada 
         no knex como o nome da tabela.  Onde  const createUser = async ( const createUser = async (id: string, email: string, password: string))
         esta sendo passada como parametros da funcao asyncrona. 

          const connection = knex estou colocando as configuracoes do bando de dados  e como relacionando esta 
          configuracao que deve estar sendo alimentada dentro do .env para protecao da senha e banco de dados. 



    b) *Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*

       CREATE TABLE USER(
       id: VARCHAR(255) PRIMARY KEY, 
       password:  VARCHAR(255) NOT NULL,
       email: VARCHAR(255) UNIQUE NOT NULL 
       );



    c) *Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.* 

     
        const creatingUsers =
         async(id:string, email: string, passaword: string):Promise<void> => 
         {
            await connection("USER")
            .insert({id,password, email})
         };

       