CREATE TABLE LABOOK_POST( 
id VARCHAR(255) PRIMARY KEY, 
picture VARCHAR(255) NOT NULL ,
description VARCHAR(255) NOT NULL, 
created_at DATE NOT NULL, 
type ENUM("evento" , "normal") NOT NULL
);