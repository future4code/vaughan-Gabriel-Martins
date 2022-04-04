###   Exercício 1
    
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
       
       b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, 
       tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. 
       Explique os resultados.
       
       c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. 
       Utilize o comando `DESCRIBE Actor` e explique os resultados.
