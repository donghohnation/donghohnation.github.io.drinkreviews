DROP DATABASE IF EXISTS drinks_DB;
CREATE DATABASE drinks_DB;
USE drinks_DB;

CREATE TABLE drinks (
  id INTEGER NOT NULL AUTO_INCREMENT,
  drink_name VARCHAR(100) NOT NULL,
  tried BOOLEAN,
  PRIMARY KEY (id)
);

INSERT INTO drinks (drink_name, tried) 
VALUES 
("Hennesy", false),
("Johnnie Walker Blue Label", true),
("Macallan Sherry Oak", false);

SELECT * FROM drinks;