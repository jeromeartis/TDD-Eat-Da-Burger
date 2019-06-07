DROP DATABASE burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


INSERT INTO burgers (burger_name, devoured) VALUES ('Big Daddy Mack Burger',true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Whopper End Game Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheesy Bacon Burger', false);
