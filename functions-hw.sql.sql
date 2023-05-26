-- Get the whole table
create OR REPLACE FUNCTION getGuestTable()
  RETURNS TABLE (
    id INT,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    phoneNumber TEXT,
    address TEXT,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP
  )
AS $$
BEGIN
  RETURN QUERY
  SELECT * FROM "Guest";
END;
$$ LANGUAGE plpgsql;

SELECT * FROM getGuestTable(); 

-- Get the number of elements in the table
CREATE OR replace FUNCTION getGuestTableCount()
  RETURNS INT
AS $$
DECLARE
  count INT;
BEGIN
  SELECT COUNT(*) INTO count FROM "Guest";
  RETURN count;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM getGuestTableCount();

-- Delete all content from a table
CREATE OR replace FUNCTION truncateServiceTable()
  RETURNS VOID
AS $$
BEGIN
  TRUNCATE TABLE Service;
END;
$$ LANGUAGE plpgsql;

--SELECT FROM truncateServiceTable();

-- Delete an element by it's name from the table
CREATE OR REPLACE FUNCTION deleteGuestByFirstName(name TEXT)
  RETURNS VOID
AS $$
BEGIN
  DELETE FROM "Guest" WHERE "firstName" = name;
END;
$$ LANGUAGE plpgsql;

--SELECT deleteGuestByFirstName('Jimmi');
--SELECT * FROM getGuestTable(); 

-- Return the result of joining 2 tables
CREATE OR REPLACE FUNCTION getBookingsAndPayments()
  RETURNS TABLE (
    bookingId INT,
    checkInDate TIMESTAMP,
    checkOutDate TIMESTAMP,
    guestId INT,
    roomNumber INT,
    paymentId INT,
    paymentDate TIMESTAMP,
    totalAmount FLOAT
  )
AS $$
BEGIN
  RETURN QUERY
  SELECT B.id AS "bookingId", B."checkInDate", B."checkOutDate", B."guestId", B."roomNumber",
         P.id AS "paymentId", P."paymentDate", P."totalAmount"
  FROM "Booking" AS B
  JOIN "Payment" AS P ON B.id = P."bookingId";
END;
$$ LANGUAGE plpgsql;

SELECT * FROM getBookingsAndPayments(); 

-- Update every registry on a string column in a table and switch the text for 'HACKED'
CREATE OR REPLACE FUNCTION hackServiceName()
  RETURNS VOID
AS $$
DECLARE
  serviceRow "Service"%ROWTYPE;
BEGIN
  FOR serviceRow IN SELECT * FROM "Service" LOOP
    UPDATE "Service" SET name = 'HACKED' WHERE id = serviceRow.id;
  END LOOP;
END;
$$ LANGUAGE plpgsql;

SELECT hackServiceName();


