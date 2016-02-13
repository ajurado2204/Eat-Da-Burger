CREATE DATABASE burgers_db;

connect burgers_db;

CREATE TABLE burgers 
  (id INT AUTO_INCREMENT, 
    burger_name varchar (100) NOT NULL, 
    devoured INT NOT NULL, 
    date TIMESTAMP, 
    PRIMARY KEY(id));