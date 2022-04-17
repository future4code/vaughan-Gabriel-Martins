CREATE TABLE labecommerce_users(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL ,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);

fiz uma funcao dentro de creatingUser.ts para isso.  
connection(`labecommerce_users`).insert({id: "001",name: "Gabriel", email: "gabriel@gmail.com", password = "12345" }
{id: "002",name: "jose", email: "jose@gmail.com", password = "$@#DERWR@#" },
{id: "003",name: "Velho", email: "velho@gmail.com", password = "passwofgd" },
{id: "004",name: "Jieun", email: "jieun@gmail.com", password = "12ew3erwwe45" },
{id: "005",name: "Feijo", email:" "feijo@gmail.com", password = "ewrewrew2345" },
{id: "006",name: "Bere", email: "bere@gmail.com", password = "1rewrewrew2345" },
{id: "007",name: "Joao", email: "joao@gmail.com", password = "897564564" },
{id: "008",name: "Marcela", email: "marcela@gmail.com", password = "f65dgdrew" },
{id: "009",name: "Rodrigo", email: "rodrigo@gmail.com", password = "#@$#@$@#$@#" })

## Produtos

CREATE TABLE labecommerce_products(
id INT PRIMARY KEY,
name VARCHAR(255) NOT NULL ,
price INT NOT NULL UNIQUE,
image_url VARCHAR(255) NOT NULL
);


##  Purchases

CREATE TABLE labecommerce_purchases( 
id VARCHAR(255) PRIMARY KEY, 
user_id VARCHAR(255),  
product_id VARCHAR(255), 
quantity INT, 
total_price INT,
FOREIGN KEY (product_id) REFERENCES labecommerce_products(id),
FOREIGN KEY (user_id) REFERENCES labecommerce_users(id)
);
