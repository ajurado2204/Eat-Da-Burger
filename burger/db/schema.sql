CREATE DATABASE burgers_db;

connect burgers_db;

CREATE TABLE burgers 
  (id INT AUTO_INCREMENT, 
    burger_name varchar (100) NOT NULL, 
    devoured INT NOT NULL, 
    date TIMESTAMP, 
    PRIMARY KEY(id));

INSERT INTO burgers (burger_name,devoured) VALUES ('Hamburger', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Cheeseburger', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Bacon Cheeseburger', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Gouda Bacon Cheeseburger', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Baconator', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Son of Baconator', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Asiago Ranch Chicken Club', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Spicy Chicken Burger', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Homestyle Chicken Burger', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Grilled Chicken Burger', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Crispy Chicken BLT', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Angus Burger', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Barbecue Burger', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Veggie Burger', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Turkey Burger', 0);
INSERT INTO burgers (burger_name,devoured) VALUES ('Teriyaki Burger', 0);
