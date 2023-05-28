-- Retorna la tabla que gustes
CREATE OR REPLACE FUNCTION get_all_books()
  RETURNS SETOF "Book" AS
$BODY$
BEGIN
  RETURN QUERY SELECT * FROM "Book";
END;
$BODY$
LANGUAGE plpgsql;

-- Retornar el numero de registros de una tabla
CREATE OR REPLACE FUNCTION count_books()
  RETURNS INTEGER AS
$BODY$
DECLARE
  total_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO total_count FROM "Book";
  RETURN total_count;
END;
$BODY$
LANGUAGE plpgsql;

-- Truncate una tabla
CREATE OR REPLACE FUNCTION truncate_book_table()
  RETURNS VOID AS
$BODY$
BEGIN
  TRUNCATE TABLE "Book";
END;
$BODY$
LANGUAGE plpgsql;

-- Borrar un registro tipo string de una tabla
CREATE OR REPLACE PROCEDURE delete_book(IN book_title VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM Book WHERE title = book_title;
    RAISE NOTICE 'Record deleted successfully.';
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'Error: %', SQLERRM;
END;
$$;

-- Retornar el resultado de un join de 2 tablas
CREATE OR REPLACE FUNCTION get_books_with_categories()
  RETURNS SETOF record AS
$BODY$
BEGIN
  RETURN QUERY
  SELECT
    b.id AS book_id,
    b.title AS book_title,
    bc.category_id,
    c.name AS category_name
  FROM
    "Book" AS b
    INNER JOIN "BookCategory" AS bc ON b.id = bc.book_id
    INNER JOIN "Category" AS c ON bc.category_id = c.id;
END;
$BODY$
LANGUAGE plpgsql;

-- Implementar algún loop que cambie un atributo tipo string a "HACKED"
CREATE OR REPLACE FUNCTION replace_book_title_with_hacked()
  RETURNS VOID AS
$BODY$
DECLARE
  book_row RECORD;
BEGIN
  FOR book_row IN SELECT * FROM "Book" LOOP
    UPDATE "Book" SET title = 'HACKED' WHERE id = book_row.id;
  END LOOP;
END;
$BODY$
LANGUAGE plpgsql;
