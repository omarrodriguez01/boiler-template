-- Adrián Emmanuel Faz Mercado A01570770
-- Actividad de Bases de Datos 3: Funciones SQL

-- Ejercicio 1
-- Para la función de get_artists(), en donde se devuelve la tabla de artistas, es importante considerar lo siguiente:
-- Se está utilizando un tipo de estructura "ArtistRecord" que representa el formato de cada fila y se utiliza para la función, por lo que es necesario correr el comando para crearlo antes de crear la función.
-- La función retorna la tabla de artistas con sus atributos correspondientes.

CREATE TYPE ArtistRecord AS (
    id        INT,
    name      TEXT,
    biography TEXT,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP
);


CREATE FUNCTION get_artists()
    RETURNS SETOF ArtistRecord
    LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY SELECT * FROM "Artist";
END;
$$;

-- Se ejecuta get_artists()
select get_artists();



-- Ejercicio 2
-- Función que retorna la cantidad de elementos en la tabla.
-- Se está retornando la cantidad de registros de canciones de la tabla "Song".
CREATE FUNCTION get_songs_count()
    RETURNS INTEGER
    LANGUAGE plpgsql
AS $$
DECLARE
    songs_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO songs_count FROM "Song";
    RETURN songs_count;
END;
$$;

select get_songs_count();


-- Ejercicio 3
-- Función que realiza un "truncate" a la tabla de PlaylistSong, la cual contiene las relaciones de playlists y canciones.
-- La función vacía completamente la tabla de Playlist_Song, se eligió esa tabla porque es la única que no depende de otras. 
CREATE FUNCTION truncate_playlist_song()
    RETURNS VOID
    LANGUAGE plpgsql
AS $$
BEGIN
    EXECUTE 'TRUNCATE TABLE "PlaylistSong" CASCADE;';
END;
$$;

select truncate_playlist_song();


-- Ejercicio 4
-- Antes de crear la función de get_join_tables() es importante correr la creación de el tipo ArtistSongDuration, el cual es una estructura que es necesaria para que la función retorne la tabla correctamente. 
-- Se debe correr el comando de crear la estructura y luego el comando de crear la función get_join_tables.
-- La función get_join_tables devuelve una tabla que es el resultado de la combinación de la tabla de Artistas y Canciones, donde se muestran las canciones disponibles y el nombre de los artistas que la cantan, donde si solo se obtuviera la información de las canciones solo se podría ver el id del artista al que le pertenece, pero con el join ya es posible esto.

CREATE TYPE ArtistSongDuration AS (
    artist TEXT,
    song TEXT,
    duration TEXT
);

CREATE FUNCTION get_join_tables()
    RETURNS SETOF ArtistSongDuration
    LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT a.name AS artist, s.title AS song, s.duration AS duration
    FROM "Artist" a
    INNER JOIN "Song" s ON s."artistId" = a.id;
END;
$$;

-- Se ejecuta get_join_tables()
select get_join_tables();

-- Ejercicio 5
-- Función que elimina el registro de la canción que se le envíe como parámetro.
-- Ojo: Dado que la tabla PlaylistSong depende de los registros de Song, se recomienda probar esta función con la canción "Dark Horse", la cual es una canción que no está en ninguna de las playlists y no causará error si se elimina. 
-- Eliminar como prueba "Dark Horse" ó agregar una nueva canción y eliminarla.

CREATE or replace FUNCTION delete_song(songName TEXT)
    RETURNS VOID
    LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM "Song"
    as s
    WHERE s.title = songName;
END;
$$;

-- Se ejectua delete_song
select delete_song('Dark Horse');


-- Ejercicio 6
-- Función que sustituye todos los valores del atributo "type" de los registros de la tabla de "Subscription" por "HACKED"
-- Originalmente el atributo type decía que tipo de suscripción era cada una (Free, Individual, Premium), y al ejecutar esta función, los valores del atributo type cambian todos a "HACKED".
create or replace function hack_table()
	returns void
	language plpgsql
as $$
declare 
	my_cursor cursor for select id, 'type' from "Subscription";
	current_id integer;
	current_type text;
begin
	open my_cursor;
	loop
		fetch my_cursor into current_id, current_type;
		exit when not found;
		update "Subscription" set type = 'HACKED' where CURRENT OF my_cursor;
	end loop;
	close my_cursor;
end;
$$;
select hack_table();



