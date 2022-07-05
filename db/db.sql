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
("drink 1", false),
("drink 2", true),
("drink 3", false);

SELECT * FROM drinks;