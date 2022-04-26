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


