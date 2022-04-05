### Exercício 1

    Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações:
    id, nome, salário, data de nascimento e sexo

    Abaixo está a query que cria essa tabela no MySQL


         ``CREATE TABLE Actor (
               id VARCHAR(255) PRIMARY KEY,
               name VARCHAR (255) NOT NULL,
               salary FLOAT NOT NULL,
               birth_date DATE NOT NULL,
               gender VARCHAR(6) NOT NULL
           );``




       a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque
       esta é uma forma de representar um número não inteiro em uma tabela.
       Explique os demais comandos que estão nessa query.

       -- a) Salario pode ser decimal.

       b) O comando `SHOW` é bem útil para nos prover informações sobre bancos,
       tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`.
       Explique os resultados.

       -- b) Me mostra a banco de dados q estou utilizando e a tabela.

       c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela.
       Utilize o comando `DESCRIBE Actor` e explique os resultados.

       -- c) Mostra o que tem dentro da table e seus formatos

### Exercicio 2

        a) adicionando Gloria Pires

        INSERT INTO Actor ( id, name, salary, birth_date, gender)
        VALUES ( "002", "Glória Pires", 1200000 , "1963-10-23", "Female");


        b) Não deixa pois o id  KP / key PRIMARY já existe.    Error 1062 Entrada duplicada 002. 
        
        INSERT INTO Actor ( id, name, salary, birth_date, gender)
        VALUES ( "002", "Gabriel Martins ",  1200000 , "1983-04-13", "Male"); 

         c) As colunas e as entradas nao estavam certas.

        INSERT INTO Actor ( id, name, salary, birth_date, gender)
        VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
        );


        -- d)  O error é "O campo nome não tem um valor default " esta faltando um valor para nome e ele nao tem um valor predefinido. 

        INSERT INTO Actor (id, salary, birth_date, gender)
        VALUES(
        "004",
        400000,
        "1949-04-18", 
        "male"
        );

        e) Data de nascimento incorreta 

        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        "1979-03-26", 
        "female"
        );
        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
        "007", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
        );
        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
        "004", 
        "Antônio Fagundes",
        400000,
        "1949-04-18", 
        "male"
        );
        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        "1979-03-26", 
        "female"
        );

## Exercicio 3 

        a) retornar todas a atrizes. 

        -- SELECT id, name from Actor WHERE gender= "Female";

        b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos

        -- SELECT id, salary from Actor WHERE name="Tony Ramos";

        c) Escreva uma query que retorne todas as informações que tenham o 
        gender com o valor "invalid". Explique o resultado. 

        -- SELECT * FROM Actor WHERE gender="invalid"; 

        Não temos nenhum linha que existe gender = "invalid" entao retornou null em todos. 

        d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

        
        SELECT id, name, salary FROM Actor WHERE salary < 500000;

        e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta


        e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta


        SELECT id, nome from Actor WHERE id = "002" 

        nome nao existe, seria name e a resposta seria GLoria Maria.

###Exercício 4 


        a)SELECT * FROM Actor  WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

        Vai pegar os atores( male/female)  com salario maior que 300.000 e nomes comecados pelas letras A ou J.

        b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

        SELECT * FROM Actor 
        WHERE name NOT LIKE "A%" AND salary > 350000;


        c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.

        SELECT * FROM Actor 
        WHERE name LIKE "G%" or "%g%";


        d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

         Não coloquei a letra maiscula por o workbench na diferencia isso mas o sql sim se fosse em outro lugar talvez deveria fazer isso. 

        SELECT * FROM Actor 
        WHERE ( name LIKE "%g%" or "%a%") AND salary BETWEEN 350000 AND 900000; 

        - Exercício 5
    
        Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)



        - Exercício 6
    
        Escreva uma query que:
    
        a) Retorne o id, título e avaliação a partir de um id específico;

         SELECT id, title, rating  FROM Movie 
         WHERE  id like  001;
 
 
        
        b) Retorne um filme a partir de um nome específico;

        SELECT title FROM Movie 
        WHERE title LIKE "Doce de mãe";


        c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`

        SELECT id FROM Movie 
        WHERE rating >=7;
        
### Exercício 7
    
         Escreva uma query que:
    
        a) Retorna um filme cujo título contenha a palavra `vida`

         nenhum filme tem vida no titulo. na sinopse ate tem dois. 


            SELECT title FROM Movie 
            WHERE title LIKE "%vida%";


        
        b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.


           SELECT * FROM Movie 
              WHERE   title LIKE "%tropa%" OR  
                      sinopse LIKE "tropa";



        c) Procure por todos os filmes que já tenham lançado


            SELECT * FROM Movie 
               WHERE release_Date < CURDATE();
        
        d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.

         
            SELECT * FROM Movie 
            WHERE release_Date < CURDATE() AND 
                       (title LIKE "%dois%"  OR 
                     sinopse LIKE "%dois%") AND 
                     rating > 7;
















    



