-- Cristina Hernandez Perez
-- A00830775
-- Tarea Queries SQL

-- 1. Returns ALL elements of 1 Table
CREATE or replace FUNCTION returnProducts()
RETURNS TABLE (
	id INT,
	price INT,
	stock INT,
	categoryId INT,
	createdAt timestamp,
	updateAt timestamp,
	name_product text
	)
AS $$
    SELECT * FROM "Product";
$$ LANGUAGE sql;

-- 2. Returns amount count of elements in 1 Table
create or replace FUNCTION returnCountProducts() 
RETURNS INTEGER 
AS $$
    SELECT COUNT(*) FROM "Product";
$$ LANGUAGE sql;

-- 3. Truncates 1 Table
CREATE OR REPLACE FUNCTION truncateProducts()
RETURNS VOID
AS $$
  TRUNCATE TABLE "Product";
$$ LANGUAGE sql;

-- 4. Deletes 1 element of table that contains text
CREATE OR REPLACE FUNCTION deleteElementByString(word VARCHAR)
  RETURNS VOID
AS $$
  DELETE FROM "Employee" WHERE "name" = word;
$$ LANGUAGE sql;


-- 5. Return the result of joining 2 Tables
CREATE or replace FUNCTION joinTablesEmployee()
RETURNS TABLE (
	id INT,
	name text,
	content text, 
	total INT
)
AS $$
    SELECT c.id, c.name, a.content, a.total
    FROM "Employee" AS c
    INNER JOIN "Order" AS a ON c.id = a."employeeId";
$$ LANGUAGE sql;


-- 6. Change all of 1 column on table to HACKED

CREATE or replace FUNCTION hackerFunction()
RETURNS VOID
AS $$
DECLARE
    registro RECORD;
    cursor_registros CURSOR FOR SELECT * FROM "Employee" WHERE "roleName"  <> 'HACKED';
BEGIN
    OPEN cursor_registros;
    LOOP
        FETCH NEXT FROM cursor_registros INTO registro;
        EXIT WHEN NOT FOUND;
        update "Employee"
        SET "roleName"  = 'HACKED'
        WHERE CURRENT OF cursor_registros;
    END LOOP;
    CLOSE cursor_registros;
END;
$$ LANGUAGE plpgsql;



-- Function calls

select * from returnProducts();

select returnCountProducts();

SELECT truncateProducts();

select * from joinTablesEmployee();

SELECT deleteElementByString('Hugo Hernandez');

select * from hackerFunction();
