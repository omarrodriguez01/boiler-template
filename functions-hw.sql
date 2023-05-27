-- Función 1: Retornar toda 1 tabla
-- Crear el tipo de objeto que retorna la consulta
CREATE TYPE CineInfo AS (
  id INT,
  nombre TEXT,
  direccion TEXT,
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
);

-- Crear la función
CREATE OR REPLACE FUNCTION getAllFromCines()
    RETURNS SETOF CineInfo
    AS $$
    BEGIN
        RETURN QUERY SELECT id, nombre, direccion, "createdAt", "updatedAt" FROM public."Cine";
    END;
    $$
    LANGUAGE plpgsql;

-- Correr la función
SELECT * FROM getAllFromCines();

-- Función 2: Retornar el número de elementos en una tabla
-- Crear la función
CREATE OR REPLACE FUNCTION countNumberOfCines()
    RETURNS SETOF bigint
    AS $$
    BEGIN
        RETURN QUERY SELECT count(id) FROM public."Cine";
    END;
    $$
    LANGUAGE plpgsql;

-- Correr la función
SELECT countNumberOfCines() AS "Num_Cines";

-- Función 3: Truncar una tabla
-- Crear la función
CREATE OR REPLACE FUNCTION deleteCinesData()
    RETURNS void
    AS $$
    BEGIN
        TRUNCATE TABLE public."Cine" CASCADE;
    END;
    $$
    LANGUAGE plpgsql;

-- Correr la función
SELECT deleteCinesData();

-- Función 4: Borrar registro por nombre
-- Crear la función
CREATE OR REPLACE FUNCTION deleteRegistroPorNombre(nombre_param text)
    RETURNS void
    AS $$
    BEGIN
        DELETE FROM public."Cine" WHERE nombre = nombre_param;
    END;
    $$
    LANGUAGE plpgsql;

-- Correr la función
SELECT deleteRegistroPorNombre('Cinépolis');
SELECT deleteRegistroPorNombre('Cinépolis VIP');

-- Función 5: Retornar el resultado de 1 Join de 2 tablas
-- Crear el tipo de objeto que retorna la consulta
CREATE TYPE CineSalaInfo AS (
  cine_id INT,
  cine_nombre TEXT,
  cine_direccion TEXT,
  sala_id INT,
  sala_numero INT,
  sala_capacidad INT
);

-- Crear la función
CREATE OR REPLACE FUNCTION getCinesConSalas()
    RETURNS SETOF CineSalaInfo
    AS $$
    BEGIN
        RETURN QUERY
            SELECT c.id AS cine_id, c.nombre AS cine_nombre, c.direccion AS cine_direccion,
                   s.id AS sala_id, s.numero AS sala_numero, s.capacidad AS sala_capacidad
            FROM public."Cine" AS c
            INNER JOIN public."Sala" AS s ON c.id = s.id_cine;
    END;
    $$
    LANGUAGE plpgsql;

-- Correr la función
SELECT * FROM getCinesConSalas();

-- Función 6: Loop en una tabla y cambiar texto por "Hacked"
-- Crear la función
CREATE OR REPLACE FUNCTION hackTabla()
    RETURNS void
    AS $$
    DECLARE
        columnas RECORD;
        nombreColumna text;
    BEGIN
        FOR columnas IN (
            SELECT column_name
            FROM information_schema.columns
            WHERE table_name = 'Cine' AND table_schema = 'public' AND data_type = 'text'
        )
        LOOP
            nombreColumna := columnas.column_name;
            EXECUTE FORMAT('UPDATE public."Cine" SET %I = %L', nombreColumna, 'HACKED');
        END LOOP;
    END;
    $$
    LANGUAGE plpgsql;

-- Correr la función
SELECT hackTabla();