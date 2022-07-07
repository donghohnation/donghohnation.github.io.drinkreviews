DROP DATABASE IF EXISTS drinks_DB;
CREATE DATABASE drinks_DB;
USE drinks_DB;

CREATE TABLE drinks (
  id INT AUTO_INCREMENT NOT NULL,
  drink_name VARCHAR(100) NOT NULL,
  tried BOOLEAN,
  PRIMARY KEY (id)
);

INSERT INTO drinks (drink_name, tried) 
VALUES 
("Hennesy", false),
("Johnnie Walker Blue Label", true),
("Macallan Sherry Oak", false),
("Don Julio 1942", true),
("Chum Churum Soju", false),
("Junmai Ginjo Sake", false),
("Captain Morgan", false),
("Adios MF", false),


SELECT * FROM drinks;