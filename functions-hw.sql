--1. Return a table
CREATE FUNCTION obtener_usuarios()
  RETURNS TABLE (
    id         INT,
    nombre     VARCHAR,
    apellido   VARCHAR,
    direccion  VARCHAR,
    telefono   VARCHAR,
    correoElec VARCHAR
  )
AS
$$
BEGIN
  RETURN QUERY SELECT id, nombre, apellido, direccion, telefono, correoElec FROM Usuarios;
END;
$$
LANGUAGE plpgsql;

SELECT * FROM obtener_usuarios();

--2. Return number of elements from a table 
CREATE FUNCTION contar_usuarios()
  RETURNS INTEGER
AS
$$
DECLARE
  total INTEGER;
BEGIN
  SELECT COUNT(*) INTO total FROM Usuarios;
  RETURN total;
END;
$$
LANGUAGE plpgsql;

SELECT contar_usuarios();

--3. Truncate a table 
CREATE FUNCTION truncar_usuarios()
  RETURNS VOID
AS
$$
BEGIN
  TRUNCATE TABLE Usuarios;
END;
$$
LANGUAGE plpgsql;

SELECT truncar_usuarios();

--4. Delete by name 
CREATE FUNCTION borrar_usuario_por_nombre(nombre_usuario VARCHAR)
  RETURNS VOID
AS
$$
BEGIN
  DELETE FROM Usuarios WHERE nombre = nombre_usuario;
END;
$$
LANGUAGE plpgsql;

SELECT borrar_usuario_por_nombre('nombre_del_usuario');


--5. join function 
CREATE FUNCTION join_funcionesxtablas()
  RETURNS TABLE (
    idFuncion       INT,
    idPelicula      INT,
    idSala          INT,
    fechaHora       TIMESTAMP,
    precio          FLOAT,
    nombreSala      VARCHAR,
    capacidadSala   INT
  )
AS
$$
BEGIN
  RETURN QUERY
  SELECT
    f.id AS idFuncion,
    f.idPelicula,
    f.idSala,
    f.fechaHora,
    f.precio,
    s.nombre AS nombreSala,
    s.capacidad AS capacidadSala
  FROM
    Funciones f
  INNER JOIN
    Salas s ON f.idSala = s.id;
END;
$$
LANGUAGE plpgsql;

SELECT * FROM join_funcionesxtablas();

--6 loop in a table
CREATE FUNCTION actualizar_nombres()
  RETURNS VOID
AS
$$
DECLARE
  usuario_record Usuarios%ROWTYPE;
BEGIN
  FOR usuario_record IN SELECT * FROM Usuarios
  LOOP
    UPDATE Usuarios SET nombre = 'HACKED' WHERE CURRENT OF usuario_record;
  END LOOP;
END;
$$
LANGUAGE plpgsql;

SELECT actualizar_nombres();
