-- Retornar la tabla que gustes
CREATE TYPE Boletos AS (
  id_boleto       Int,
  fecha_compra    Date,
  cantidad        Int
);

CREATE OR REPLACE FUNCTION getUsuarios()
RETURNS TABLE (
  id_usuario       Int,
  nombre           String,
  apellido         String,
  correo           String,
  contrasena       String,
  tarjeta_credito  String,
  boletos          Boletos[]
) AS $$
BEGIN
  RETURN QUERY
    SELECT
      id_usuario,
      nombre,
      apellido,
      correo,
      contrasena,
      tarjeta_credito,
      ARRAY(
        SELECT (id_boleto, fecha_compra, cantidad)
        FROM boletos_table
        WHERE boletos_table.id_usuario = usuarios_table.id_usuario
      ) AS boletos
    FROM usuarios_table;
END;
$$ LANGUAGE plpgsql;

-- Retornar el numero de registros de una tabla

CREATE OR REPLACE FUNCTION getUsers()
RETURNS Int AS $$
DECLARE
  count Int;
BEGIN
  SELECT COUNT(*) INTO count
  FROM Usuarios;
  
  RETURN count;
END;
$$ LANGUAGE plpgsql;

-- Truncate una tabla

CREATE OR REPLACE FUNCTION truncateUsuarios()
RETURNS Void AS $$
BEGIN
  TRUNCATE TABLE Usuarios;
END;
$$ LANGUAGE plpgsql;


-- Borrar un registro tipo string de una tabla

CREATE OR REPLACE FUNCTION erasePeliculaTitle()
RETURNS Void AS $$
BEGIN
  DELETE FROM Peliculas WHERE titulo = 'Pelicula 1';
END;
$$ LANGUAGE plpgsql;

-- Retornar el resultado de un join de 2 tablas

CREATE OR REPLACE FUNCTION getJoinPeliculasSalas()
RETURNS TABLE (
  id_pelicula   Int,
  titulo        String,
  genero        String,
  duracion      Int,
  clasificacion String,
  director      String,
  sinopsis      String,
  id_sala       Int,
  nombre        String,
  capacidad     Int
) AS $$
BEGIN
  RETURN QUERY
    SELECT
      p.id_pelicula,
      p.titulo,
      p.genero,
      p.duracion,
      p.clasificacion,
      p.director,
      p.sinopsis,
      s.id_sala,
      s.nombre,
      s.capacidad
    FROM
      Peliculas p
    INNER JOIN
      Salas s
    ON
      p.funciones @> ARRAY[s.funciones];
END;
$$ LANGUAGE plpgsql;

-- Implementar algún loop que cambie un atributo tipo string a "HACKED"

CREATE OR REPLACE FUNCTION changeTitleToHacked()
RETURNS Void AS $$
DECLARE
  pelicula_record RECORD;
BEGIN
  FOR pelicula_record IN SELECT * FROM Peliculas WHERE titulo = 'Pelicula 2'
  LOOP
    UPDATE Peliculas SET titulo = 'HACKED' WHERE CURRENT OF pelicula_record;
  END LOOP;
END;
$$ LANGUAGE plpgsql;
