CREATE DATABASE projectinteractive;
USE projectinteractive;

CREATE TABLE IF NOT EXISTS users (
	id INT AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
  createdAt DATETIME,
  updatedAt DATETIME
);

select * from users;

drop table users;
