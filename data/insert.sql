-- Active: 1670147479576@@127.0.0.1@3306@se
INSERT INTO  collector_task
VALUES
	(1, 5, STR_TO_DATE('10-12-2022', '%d-%m-%Y'), 'MCP1', 8, 'Xe rác', '239 Đường A, Quận B, Thành phố C', 'completed'),
	(2, 1, STR_TO_DATE('11-12-2022', '%d-%m-%Y'), 'MCP2', 9, 'Xe rác', '44 Riverside Street', 'incomplete'),
	(3, 2, STR_TO_DATE('11-12-2022', '%d-%m-%Y'), 'MCP3', 7, 'Xe rác', '3079 Bayside Alley', 'incomplete'),
	(4, 3, STR_TO_DATE('10-12-2022', '%d-%m-%Y'), 'MCP4', 9, 'Xe rác', '49775 Merrick Junction', 'completing'),
	(5, 4, STR_TO_DATE('12-12-2022', '%d-%m-%Y'), 'MCP5', 8, 'Xe rác', '693 Carpenter Terrace', 'incomplete'),
	(6, 7, STR_TO_DATE('09-12-2022', '%d-%m-%Y'), 'MCP6', 12, 'Xe rác', '2006 Mallard Terrace', 'completed'),
	(7, 6, STR_TO_DATE('07-12-2022', '%d-%m-%Y'), 'MCP7', 17, 'Xe rác', '35585 Cambridge Parkway', 'completed');

INSERT INTO route
VALUES
	(1, 5, STR_TO_DATE('10-12-2022', '%d-%m-%Y'), ''), 
	(2, 1, STR_TO_DATE('11-12-2022', '%d-%m-%Y'), ''), 
	(3, 2, STR_TO_DATE('11-12-2022', '%d-%m-%Y'), ''), 
	(4, 3, STR_TO_DATE('10-12-2022', '%d-%m-%Y'), ''), 
	(5, 4, STR_TO_DATE('12-12-2022', '%d-%m-%Y'), ''), 
	(6, 7, STR_TO_DATE('09-12-2022', '%d-%m-%Y'), ''), 
	(7, 6, STR_TO_DATE('07-12-2022', '%d-%m-%Y'), '');
