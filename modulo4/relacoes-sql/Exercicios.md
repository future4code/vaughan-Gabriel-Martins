##  Exercício 1
  ```  
    No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas. Para isso, teremos que criar uma tabela para guardar essas informações. 
    
    As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação **1:N**. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela
    ```
    ```
                CREATE TABLE Rating (
                id VARCHAR(255) PRIMARY KEY,
                comment TEXT NOT NULL,
                rate FLOAT NOT NULL,
                movie_id VARCHAR(255),
                FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
    ```
  ```
    *a) Explique o que é uma chave estrangeira*

      Chave estrangeira é uma forma de "relacionar" duas ou mais tabelas.


    *b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*


                CREATE TABLE Rating (
                id VARCHAR(255) PRIMARY KEY,
                comment TEXT NOT NULL,
                rate FLOAT NOT NULL,
                movie_id VARCHAR(255),
                FOREIGN KEY (movie_id) REFERENCES Movie(id)


                INSERT INTO Rating VALUES
                ("a" , "Excelente filme nacional" , 8.7 ,  "1" ),
                ("b" , "Bom pra ver em casa" , 5.7 ,  "2" ),
                ("c" , "FILME bobo " , 1.0 ,  "3" ),
                ("e" , "fime violento" , 6.7 ,  "4" ),
                ("f" , "FILME VelhO " , 3.4 ,  "5" ),
                ("g" , "Doido" , 4.5 ,  "6" );


    *c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*

       Error Code: 1136. Column count doesn't match value count at row 1.


    d) *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*

                        ALTER TABLE Movie 
                        DROP COLUMN rating;

    *e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*

         Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`vaughan-21712799-gabriel-martins`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)) 

         Não pode deletar um "linha pai" ja que existe um foreign key levado a movie. 
  

   ``` 


   ## EXERCICIO 2 

   ```
    Algo muito importante que está faltando na nossa aplicação é representar o elenco dos filmes. Até agora, possuímos uma tabela com os filmes e outra tabela com os atores. Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação **N:M.**

    Essa relação é normalmente representada por uma tabela de relação. No nosso caso, vamos chamar essa tabela de `MovieCast` ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.

   ```
       ``` 
            CREATE TABLE MovieCast (
            movie_id VARCHAR(255),
            actor_id VARCHAR(255),
            FOREIGN KEY (movie_id) REFERENCES Movie(id),
            FOREIGN KEY (actor_id) REFERENCES Actor(id)`
            );
        ```
   ```
    *a) Explique, com as suas palavras, essa tabela*

        Esta tabela nada mas é que uma tabela de "transmadas" N em M 
        ajuda a relacionar duas tabelas com nao 1: N, sendo quase  um enderecador 
        de linhas. 

    *b) Crie, ao menos, 6 relações nessa tabela* 

        INSERT INTO MovieCast VALUES
            ( "1" , "001"  ) ,
            ( "2" , "001"  ) ,
            ( "3" , "002"  ) ,
            ( "4" , "003"  ) ,
            ( "5" , "003"  ) ,
            ( "6" , "004"  ) ;




        

    *c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*

                Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`vaughan-21712799-gabriel-martins`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

                Eu não posso adicionar ou mudar um chaves estrangeira que não existe. 


    *d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*


                Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`vaughan-21712799-gabriel-martins`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

                Nao pode deletar ou modificar uma "linha pai" : a chaves estrangeira era "segurado"
                por causa de referencia.

 

    ```
    ## Exercicio 3 
    ```
    *a) Explique, com suas palavras, a query acima. O que é o operador `ON`?* 

     O operador ON "seleciona onde as tabelas  são relacionadas. 

  
   b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliado

                    
                
                    SELECT title , rate  FROM  Movie 
                    JOIN Rating 
                    On  Rating.movie_id = Movie.id;
                
    ```

  ## Desafios 


  ### Exercício 4

  ```
    
    Existem outros dois operadores do tipo `JOIN`: `LEFT JOIN` e `RIGHT JOIN`. O primeiro retorna **todas as ocorrências** da **primeira** tabela (à esquerda) e, então, procura todas as correspondências dessa tabela na outra. O segundo operador retorna **todas as ocorrências** da **segunda** tabela (à direita) e, então, procura todas as correspondências na outra tabela.


        *a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). 
        A sua query deve retornar somente o nome, id, nota do filme e comentário*
                   
                   ```
               
                        SELECT  title, Movie.id, rate, comment  FROM  Movie 
                        JOIN  Rating 
                        On  Rating.movie_id = Movie.id;

                    ```


        *b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator*
 
                ```
                     SELECT Movie.id, title, MovieCast.actor_id  FROM Movie
                     RIGHT JOIN MovieCast ON MovieCast.movie_id = Movie.id;
                 ```    



        *c) Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)*

   
               SELECT AVG(Rating.rate) , Movie.id , Movie.title FROM Movie
               RIGHT JOIN Rating ON Movie.id = Rating.movie_id
               GROUP BY ( Movie.id);

```

## Exercicio 5 

```
    
    Agora, para finalizar, vamos ver uma query com a nossa relação **M:N**. Nela, nós temos 3 tabelas envolvidas: `Movie`, `Actor` e `MovieCast`. Já vimos que conseguimos juntar informações de duas tabelas na mesma query, certo? Agora, vamos tentar unir as informações das três tabelas de uma vez só.
    
    Para isso, só precisamos usar o operador JOIN duas vezes, mas em uma ordem que faça sentido. Primeiro, unimos **uma** das tabelas independentes (`Movie` e `Actor`) com a tabela de junção `MovieCast`, e, só então, unimos com a outra tabela independente. Veja essa query abaixo:


    *a) Explique, com suas palavras essa query. Por que há a necessidade de dois `JOIN`?*

     Pois temso que usar uma tabela intermediaria simplete para ligar  N:M.


    *b) Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque `alias` para facilitar o endentimento do retorno da query*


            SELECT MovieCast.movie_id , title , Actor.id , Actor.name from Movie
            LEFT JOIN MovieCast  ON MovieCast.movie_id  = Movie.id
            JOIN  Actor ON Actor.id = MovieCast.actor_id;



    *c) A query abaixo **deveria** ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.*

              Vc junta duas tables em uma e depois uma o id que relaciona para 
              juntar a outra tabela. 


    d) Desafio: Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)         

              SELECT MovieCast.movie_id as id , title , Actor.id AS Id_Actor , Actor.name , rate, comment from Movie
              JOIN MovieCast  ON MovieCast.movie_id  = Movie.id
              JOIN  Actor ON Actor.id = MovieCast.actor_id
              JOIN  Rating ON Rating.movie_id = MovieCast.movie_id ;

  ```

  ## EXERCICIO 6 

```
    
      Para finalizar esse exercício, você vai ter que implementar, a sós, uma nova relação no nosso sistema: os Óscar dos filmes. Armazene o nome do óscar (`Óscar de melhor filme`,  `Óscar de melhor direção`, etc) e a data em que o filme o ganhou. Lembre-se que, nesse caso, estamos só considerando o óscar para os filmes.
      
      *a) Que tipo de relação é essa?* 

                 M:N   um filme pode ganhar varios oscars mas so existe um oscar de cada 
                 categoria mas tem anos diferentes.  
       
      
      *b) Explicite a query que você usou para criar a tabela*
      
      *c) Crie ao menos 2 óscar para cada um dos filmes* 
      
      *d) Faça uma query que retorne todos os filmes e seus respectivos óscar*

  ```
   