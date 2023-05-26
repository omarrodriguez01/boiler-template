-- Retornar toda la tabla de EPISODE
CREATE FUNCTION return_episode_table()
RETURNS TABLE (
	ep_id INTEGER, 
	ep_name TEXT, 
	ep_releaseDate TIMESTAMP(3), 
	ep_time INTEGER, 
	ep_rating INTEGER, 
	ep_photo TEXT, 
	ep_description TEXT, 
	ep_seasonId INTEGER, 
	ep_createdAt TIMESTAMP(3), 
	ep_updatedAt TIMESTAMP(3)
) AS $$
BEGIN
  RETURN QUERY SELECT 
  				id AS ep_id, 
  				name AS ep_name, 
					"releaseDate" AS ep_releaseDate, 
					"time" AS ep_time, 
					rating AS ep_rating, 
					photo AS ep_photo, 
					description AS ep_description, 
					"seasonId" AS ep_seasonId, 
					"createdAt" AS ep_createdAt, 
					"updatedAt" AS ep_updatedAt
	FROM episode;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM return_episode_table();

-- Retornar el número de elementos de la tabla EPISODE
CREATE FUNCTION return_episode_count()
RETURNS INTEGER AS $$
DECLARE
  	number_of_rows INTEGER;
BEGIN
	SELECT COUNT(*) INTO number_of_rows FROM episode;
  	RETURN number_of_rows;
END;
$$ LANGUAGE plpgsql;

SELECT return_episode_count();

-- Truncar una tabla
CREATE OR REPLACE FUNCTION return_artist_truncate()
RETURNS VOID AS $$
BEGIN
	TRUNCATE TABLE artist CASCADE;
	RETURN;
END;
$$ LANGUAGE plpgsql;

SELECT return_artist_truncate();

-- Borrar registro por el nombre como parametro
CREATE OR REPLACE FUNCTION return_user_delete_name(selected_name TEXT)
RETURNS TABLE (
	movie_id INTEGER, 
	movie_name TEXT, 
	movie_releaseDate TIMESTAMP(3), 
	movie_time INTEGER,
	movie_genre TEXT,
	movie_rating INTEGER, 
	movie_photo TEXT, 
	movie_description TEXT,
	movie_createdAt TIMESTAMP(3), 
	movie_updatedAt TIMESTAMP(3)
) AS $$
BEGIN
	DELETE FROM movie
	WHERE NAME = selected_name;
  	RETURN QUERY SELECT 
  		id AS movie_id, 
		name AS movie_name, 
		"releaseDate" AS movie_releaseDate, 
		"time" AS movie_time, 
		genre AS movie_genre, 
		rating AS movie_rating, 
		photo AS movie_photo, 
		description AS movie_description, 
		"createdAt" AS movie_createdAt, 
		"updatedAt" AS movie_updatedAt
	FROM movie;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM return_user_delete_name('Shrek 3');

-- Retornar el JOIN de dos tablas
CREATE OR REPLACE FUNCTION return_episodes_join_season()
RETURNS TABLE (
	ser_id INTEGER,
	ser_name TEXT,
	sea_id INTEGER,
	sea_name TEXT,
	ep_id INTEGER, 
	ep_name TEXT, 
	ep_releaseDate TIMESTAMP(3), 
	ep_time INTEGER, 
	ep_rating INTEGER, 
	ep_photo TEXT, 
	ep_description TEXT, 
	ep_seasonId INTEGER, 
	ep_createdAt TIMESTAMP(3), 
	ep_updatedAt TIMESTAMP(3)
) AS $$
BEGIN
  	RETURN QUERY SELECT
		se.id AS ser_id,
		se.name AS ser_name,
		ss.id AS sea_id,
		ss."seasonName" AS sea_name,
		e.id AS ep_id, 
  		e.name AS ep_name, 
		e."releaseDate" AS ep_releaseDate, 
		e."time" AS ep_time, 
		e.rating AS ep_rating, 
		e.photo AS ep_photo, 
		e.description AS ep_description, 
		e."seasonId" AS ep_seasonId, 
		e."createdAt" AS ep_createdAt, 
		e."updatedAt" AS ep_updatedAt
	FROM episode e
	INNER JOIN season ss ON ss.id = e."seasonId"
	INNER JOIN series se ON se.id = ss."seriesId";
END;
$$ LANGUAGE plpgsql;

SELECT * FROM return_episodes_join_season();

-- Regresar una tabla donde, con un loop, cambiar los strings de una columna por "Hacked"
CREATE OR REPLACE FUNCTION return_episodes_change_name()
RETURNS TABLE (
	us_id INTEGER, 
	us_name TEXT, 
	us_birthDate TIMESTAMP(3), 
	us_email TEXT, 
	us_userPassword TEXT, 
	us_createdAt TIMESTAMP(3), 
	us_updatedAt TIMESTAMP(3)
) AS $$
DECLARE
    row record;
BEGIN
	FOR row IN SELECT id, name FROM "user" LOOP
		UPDATE "user"
        SET name = 'Hacked'
        WHERE id = row.id;
	END LOOP;
  	RETURN QUERY SELECT
		id AS us_id, 
  		name AS us_name,
		"birthDate" AS us_birthDate, 
		email AS us_email, 
		"userPassword" AS us_userPassword,
		"createdAt" AS us_createdAt, 
		"updatedAt" AS us_updatedAt
	FROM "user";
END;
$$ LANGUAGE plpgsql;

SELECT * FROM return_episodes_change_name();

DROP FUNCTION IF EXISTS return_episode_table();
DROP FUNCTION IF EXISTS return_episode_count();
DROP FUNCTION IF EXISTS return_artist_truncate();
DROP FUNCTION IF EXISTS return_user_delete_name(selected_name TEXT);
DROP FUNCTION IF EXISTS return_episodes_join_season();
DROP FUNCTION IF EXISTS return_episodes_change_name();