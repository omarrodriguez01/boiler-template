/*Retornar toda 1 tabla */
CREATE OR REPLACE FUNCTION get_autor_table()
  RETURNS TABLE (id INT, nombre TEXT, biografia TEXT) AS
$$
BEGIN
  RETURN QUERY SELECT * FROM "Autor";
END;
$$
LANGUAGE plpgsql;

SELECT * FROM get_autor_table();


/*Retornar el numero de elemento en una tabla */
CREATE OR REPLACE FUNCTION count_libro_by_title(title TEXT)
  RETURNS INTEGER AS
$$
DECLARE
    libro_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO libro_count
    FROM "Libro"
    WHERE titulo = title;
    
    RETURN libro_count;
END;
$$
LANGUAGE plpgsql;

SELECT count_libro_by_title('The Foxhole Court');


/*Truncar una tabla */
CREATE OR REPLACE FUNCTION truncate_libro_table()
  RETURNS VOID AS
$$
BEGIN
  EXECUTE 'TRUNCATE TABLE "Prestamos" ';
END;
$$
LANGUAGE plpgsql;

SELECT truncate_libro_table();


/*Borrar el registro por nombre */
CREATE OR REPLACE FUNCTION delete_libro_by_registro(title TEXT)
  RETURNS VOID AS
$$
BEGIN
  DELETE FROM "Libro"
  WHERE titulo = title;
END;
$$
LANGUAGE plpgsql;

SELECT delete_libro_by_registro('Legend');


/*Retornar el resultado de 1 join de 2 tablas */
CREATE OR REPLACE FUNCTION get_books_and_authors()
  RETURNS TABLE (book_title TEXT, author_name TEXT) AS
$$
BEGIN
  RETURN QUERY
  SELECT libro.titulo AS book_title, autor.nombre AS author_name
  FROM "Libro" libro
  JOIN "Autor" autor ON libro.autor = autor.id;
END;
$$
LANGUAGE plpgsql;

SELECT * FROM get_books_and_authors();


/*Loop en una tabla y cambiar el texto por hacked */
CREATE OR REPLACE FUNCTION replace_string_in_autor()
  RETURNS VOID AS $$
DECLARE
    column_name TEXT;
BEGIN
    FOR column_name IN
      SELECT column_name
      FROM information_schema.columns
      WHERE table_name = 'Autor'
    LOOP
        EXECUTE format('UPDATE Autor SET %I = REPLACE(%I, %L, %L)',
                       column_name, column_name, 'hacked', 'hacked');
    END LOOP;
END;
$$ LANGUAGE plpgsql;

SELECT replace_string_in_autor();



