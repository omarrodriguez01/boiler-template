CREATE FUNCTION ObtenerCanc()
RETURNS TABLE (
	id_cancion INT,
	titulo text,
	id_album INT,
	createdAt timestamp,
	updateAt timestamp,
	duracion INT
)
AS $$
BEGIN
    RETURN QUERY
    SELECT *
    FROM "Cancion";
END;
$$ LANGUAGE plpgsql;

select * from obtenercanc();


CREATE FUNCTION ContarElementosTablaCancion()
RETURNS INTEGER
AS $$
DECLARE
    contador INTEGER;
BEGIN
    EXECUTE 'SELECT COUNT(*) FROM "Cancion"' INTO contador;
    RETURN contador;
END;
$$ LANGUAGE plpgsql;

select ContarElementosTablaCancion();


CREATE OR REPLACE FUNCTION truncar_tabla_lista_reproduccion()
  RETURNS VOID
AS
$$
BEGIN
  TRUNCATE TABLE "ListaReproduccion" RESTART identity CASCADE;
END;
$$
LANGUAGE plpgsql;

SELECT truncar_tabla_lista_reproduccion();


CREATE OR REPLACE FUNCTION borrar_cancion_por_nombre(nombre_cancion VARCHAR)
  RETURNS VOID
AS
$$
BEGIN
  DELETE FROM "Cancion" WHERE titulo  = nombre_cancion;
END;
$$
LANGUAGE plpgsql;

SELECT borrar_cancion_por_nombre('Home');


CREATE FUNCTION JoinCancionAlbum()
RETURNS TABLE (
	id_cancion INT,
	titulo text,
	titulo_album text,
	duracion INT
)
AS $$
BEGIN
    RETURN QUERY
    SELECT c.id_cancion, c.titulo, a.titulo, c.duracion
    FROM "Cancion" AS c
    INNER JOIN "Album" AS a ON c.id_album  = a.id_album;
END;
$$ LANGUAGE plpgsql;

select * from joincancionalbum();


CREATE FUNCTION CambiarTextoHacked()
RETURNS VOID
AS $$
DECLARE
    registro RECORD;
    cursor_registros CURSOR FOR SELECT * FROM "Artista" WHERE genero_musical  <> 'HACKED';
BEGIN
    OPEN cursor_registros;
    LOOP
        FETCH NEXT FROM cursor_registros INTO registro;
        EXIT WHEN NOT FOUND;
        update "Artista"
        SET genero_musical  = 'HACKED'
        WHERE CURRENT OF cursor_registros;
    END LOOP;
    CLOSE cursor_registros;
END;
$$ LANGUAGE plpgsql;

select * from cambiartextohacked();