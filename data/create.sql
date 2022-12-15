-- Active: 1670147479576@@127.0.0.1@3306@se
CREATE TABLE collector_task(
	taskID INT,
	collector_id INT NOT NULL,
	`date` DATE NOT NULL,
	mcp VARCHAR(10),
	`time` INT,
	vehicle VARCHAR(30),
	location VARCHAR(50),
	`status` VARCHAR(10) COMMENT 'domain{completed, completing, incomplete}',

	PRIMARY KEY (taskID)
);

CREATE TABLE route(
	route_id INT,
	collector_id INT NOT NULL,
	`date` DATE NOT NULL,
	`route` VARCHAR(100),

	PRIMARY KEY (route_id)
)