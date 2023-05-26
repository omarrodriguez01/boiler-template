/* Retornar toda 1 tabla */

SELECT * FROM "Book";

/* Retornar el numero de elementos en 1 tabla */

SELECT COUNT(*) AS total_count FROM "Book";

/* Truncar una tabla */

TRUNCATE TABLE "Book";

/* Borrar registro por nombre */

DELETE FROM "Book" WHERE title = 'Book 2';

/* Retornar el resultado de 1 join de 2 tablas */

SELECT b.title, b.author, a.biography
FROM "Book" b
JOIN "Author" a ON b.author = a.name;

/* Loop en una tabla y cambiar texto por "HACKED" */

SELECT column_name, data_type
INTO TEMPORARY TABLE columns_to_update
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'Member';

DO $$
DECLARE
  column_name TEXT;
  column_type TEXT;
BEGIN
  FOR column_name, column_type IN (SELECT column_name, data_type FROM columns_to_update)
  LOOP
    IF column_type = 'character varying' OR column_type = 'text' THEN
      EXECUTE format('UPDATE Member SET %I = ''HACKED'' WHERE %I = ''Text''', column_name, column_name);
    END IF;
    
    IF column_type = 'integer' THEN
      EXECUTE format('UPDATE Member SET %I = 0 WHERE %I = 123', column_name, column_name);
    END IF;
  END LOOP;
END $$;