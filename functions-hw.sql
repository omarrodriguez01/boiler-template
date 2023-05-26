--Andrea Catalina Fernández Mena A01197705 

--=======================FUNCIONES ACTIVIDAD EN CLASE================================

--Función para retornar toda una tabla
CREATE FUNCTION get_table_data(tablename TEXT)
RETURNS TABLE (
    id INTEGER,
    titulo TEXT,
    genero TEXT,
    duracion INTEGER,
    sinopsis TEXT,
    rating DOUBLE PRECISION,
    fechaEstreno TEXT,
    paisOrigen TEXT,
    director TEXT,
    posterUrl TEXT
)
AS $$
BEGIN
    RETURN QUERY EXECUTE format('SELECT * FROM %I', tablename);
END;
$$ LANGUAGE plpgsql;


SELECT * FROM get_table_data('Pelicula');
-------------------------------------------------------------------------------------------------------------
--Función para retornar el numero de elementos de una tabla

CREATE FUNCTION get_table_count(tablename TEXT)
RETURNS INTEGER
AS $$
DECLARE
    count_val INTEGER;
BEGIN
    EXECUTE format('SELECT COUNT(*) FROM %I', tablename) INTO count_val;
    RETURN count_val;
END;
$$ LANGUAGE plpgsql;

SELECT get_table_count('Pelicula');

-------------------------------------------------------------------------------------------------------------
--Función Truncar una tabla

--SELECT * FROM Reservacion

CREATE FUNCTION truncate_table(tablename TEXT)
RETURNS VOID
AS $$
BEGIN
    EXECUTE format('TRUNCATE TABLE %I', tablename);
END;
$$ LANGUAGE plpgsql;

SELECT truncate_table('Reservacion')

-------------------------------------------------------------------------------------------------------------
--Función borrar registro por nombre 
-- Crear la función
CREATE OR REPLACE FUNCTION borrar_pelicula_por_nombre(nombre_pelicula TEXT)
RETURNS VOID AS $$
BEGIN
    DELETE FROM "Pelicula"
    WHERE "titulo" = nombre_pelicula;
END;
$$ LANGUAGE plpgsql;

SELECT borrar_pelicula_por_nombre('The Whale');

-------------------------------------------------------------------------------------------------------------
--Función para retornar el resultado de 1 join de 2 tablas
-- Crear la función
CREATE OR REPLACE FUNCTION obtener_pelicula_con_funciones()
RETURNS TABLE (
    pelicula_id INTEGER,
    pelicula_titulo TEXT,
    funcion_id INTEGER,
    funcion_fecha_hora TIMESTAMP,
    funcion_precio DOUBLE PRECISION
) AS $$
BEGIN
    RETURN QUERY
    SELECT p."id" AS pelicula_id, p."titulo" AS pelicula_titulo, f."id" AS funcion_id, f."fechaHora" AS funcion_fecha_hora, f."precio" AS funcion_precio
    FROM "Pelicula" p
    INNER JOIN "Funcion" f ON p."id" = f."peliculaId";
END;
$$ LANGUAGE plpgsql;

SELECT * FROM obtener_pelicula_con_funciones();

-------------------------------------------------------------------------------------------------------------
--Función que genera un loop en una tabla y cambiar el texto por "HACKED"
-- Crear la función
CREATE OR REPLACE FUNCTION hackear_tabla()
RETURNS VOID AS $$
DECLARE
     pelicula RECORD;
BEGIN
     FOR pelicula IN SELECT * FROM "Pelicula" 
     LOOP
         UPDATE "Pelicula" SET 
			titulo = 'HACKED',
			genero = 'HACKED',
			duracion = 0,
			sinopsis = 'HACKED',
			rating = 0,
			"fechaEstreno" = 'HACKED', -- Corrected column name
			"paisOrigen" = 'HACKED',
			director = 'HACKED',
			"posterUrl" = 'HACKED'
		WHERE id = pelicula.id;
        -- Add semicolon here
     END LOOP;
END;
$$ LANGUAGE plpgsql;

SELECT hackear_tabla();