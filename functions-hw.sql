-- Retorna la tabla que gustes --
CREATE OR REPLACE FUNCTION getTablaDirector()
RETURNS TABLE (
    director_id INT,
    director_nombre TEXT,
    director_nacionalidad TEXT
)
AS $$
BEGIN
    RETURN QUERY SELECT id AS director_id, nombre AS director_nombre, nacionalidad AS director_nacionalidad FROM "Director";
END;
$$ LANGUAGE plpgsql;


SELECT * FROM getTablaDirector();


-- Retornar el numero de registros de una tabla -- 
CREATE OR REPLACE FUNCTION getTablaDirectorCount()
  RETURNS INT
AS $$
DECLARE
  count INT;
BEGIN
  SELECT COUNT(*) INTO count FROM "Director";
  RETURN count;
END;
$$ LANGUAGE plpgsql;

SELECT getTablaDirectorCount();

-- Truncate una tabla --
CREATE OR REPLACE FUNCTION deleteTablaBoleto()
  RETURNS VOID
AS $$
BEGIN
  TRUNCATE TABLE "Boleto";
END;
$$ LANGUAGE plpgsql;

SELECT deleteTablaBoleto();

-- Borrar un registro tipo string de una tabla --
CREATE OR REPLACE FUNCTION deletePelicula(nombrePelicula TEXT)
  RETURNS VOID
AS $$
BEGIN
  DELETE FROM "Pelicula" WHERE "titulo" = nombrePelicula;
END;
$$ LANGUAGE plpgsql;

SELECT deletePelicula('Spiderman');

-- Retornar el resultado de un join de 2 tablas --
CREATE OR REPLACE FUNCTION getPeliculayDirector()
  RETURNS TABLE (
    id_director INT,
    nombre_director TEXT,
    nacionalidad_director TEXT,
    id_pelicula INT,
    titulo_pelicula TEXT,
    genero_pelicula TEXT,
    Fecha_pelicula INT
  )
AS $$
BEGIN
  RETURN QUERY
    SELECT
      d.id AS id_director,
      d.nombre AS nombre_director,
      d.nacionalidad AS nacionalidad_director,
      p.id AS id_pelicula,
      p.titulo AS titulo_pelicula,
      p.genero AS genero_pelicula,
      p."Fecha" AS Fecha_pelicula
    FROM
      "Director" d
    INNER JOIN
      "Pelicula" p ON d.id = p."directorId";
END;
$$ LANGUAGE plpgsql;

SELECT getPeliculayDirector();

-- Implementar algún loop que cambie un atributo tipo string a "HACKED" --
SELECT * FROM getPeliculayDirector();

CREATE OR REPLACE FUNCTION hacktablaDirector()
  RETURNS VOID
AS $$
DECLARE
  director_row RECORD;
BEGIN
  FOR director_row IN SELECT * FROM "Director" LOOP
    UPDATE "Director" SET 
      nombre = 'HACKED',
      nacionalidad = 'HACKED'
    WHERE id = director_row.id;
  END LOOP;
END;
$$ LANGUAGE plpgsql;


SELECT hacktablaDirector();