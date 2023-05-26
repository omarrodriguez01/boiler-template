
CREATE OR REPLACE FUNCTION get_all_books()
  RETURNS SETOF "Book"
AS $$
BEGIN
  RETURN QUERY
    SELECT *
    FROM "Book";
END;
$$ LANGUAGE plpgsql;


SELECT * from get_all_books();

-- Función para retornar el número de elementos en la tabla de libros (Book)
CREATE FUNCTION getBookCount()
  RETURNS INT
AS $$
BEGIN
  DECLARE
    count INT;
  BEGIN
    SELECT COUNT(*) INTO count FROM "Book";
    RETURN count;
  END;
END;
$$ LANGUAGE plpgsql;
SELECT getBookCount();

CREATE OR REPLACE FUNCTION truncate_authors()
RETURNS void AS $$
BEGIN
  TRUNCATE TABLE "Author" CASCADE;
END;
$$ LANGUAGE plpgsql;
select truncate_authors();

-- Función para borrar un registro basado en un nombre (dinámico) en libros
CREATE FUNCTION deleteBookByTitle(bookTitle VARCHAR(255))
  RETURNS VOID
AS $$
BEGIN
  DELETE FROM "Book" WHERE title = bookTitle;
END;
$$ LANGUAGE plpgsql;
SELECT deleteBookByTitle('A Little Life');


CREATE OR REPLACE FUNCTION get_books_and_authors()
RETURNS TABLE (
  book_id INT,
  book_title TEXT,
  author_id INT,
  author_name CHARACTER VARYING
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    b.id AS book_id,
    b.title AS book_title,
    a.id AS author_id,
    a.name::character varying AS author_name
  FROM
    "Book" b
    INNER JOIN "Author" a ON b."authorId" = a.id;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_books_and_authors();

-- Función para hacer loop en la tabla de libros y cambiar todos sus nombres por "HACKED"
CREATE FUNCTION updateBookTitlesToHacked()
  RETURNS VOID
AS $$
BEGIN
  UPDATE "Book" SET title = 'HACKED';
END;
$$ LANGUAGE plpgsql;
SELECT updateBookTitlesToHacked();