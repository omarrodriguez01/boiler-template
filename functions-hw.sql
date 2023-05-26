-- 1. Retornar toda 1 tabla.
CREATE OR REPLACE FUNCTION obtener_autores() 
RETURNS SETOF "Autor" AS $$
BEGIN
    RETURN QUERY SELECT * FROM "Autor";
END;
$$ LANGUAGE plpgsql;

SELECT * FROM obtener_autores();





-- 2. Retornar el # de elementos en 1 tabla.
CREATE OR REPLACE FUNCTION contar_autores() 
RETURNS INTEGER AS $$
DECLARE
    total INTEGER;
BEGIN
    SELECT count(*) INTO total FROM "Autor";
    RETURN total;
END;
$$ LANGUAGE plpgsql;

SELECT contar_autores();





-- 3. Truncar una tabla.
CREATE OR REPLACE FUNCTION truncar_pedido() 
RETURNS VOID AS $$
BEGIN
    truncate table "Pedido";
END;
$$ LANGUAGE plpgsql;

SELECT truncar_pedido();





-- 4. Borrar registro por nombre.
CREATE OR REPLACE FUNCTION eliminar_copias_prestadas() 
RETURNS VOID AS $$
BEGIN
    DELETE FROM "Copia" WHERE estado = 'prestado';
END;
$$ LANGUAGE plpgsql;

SELECT eliminar_copias_prestadas();





-- 5. Retornar el resultado de 1 join de 2 tablas.
CREATE OR REPLACE FUNCTION obtener_libros_y_autores() 
RETURNS TABLE (
    libro_id INTEGER,
    libro_titulo TEXT,
    libro_editorial_id INTEGER,
    libro_genero_id INTEGER,
    libro_autor_id INTEGER,
    libro_createdAt TIMESTAMP,
    libro_updatedAt TIMESTAMP,
    autor_id INTEGER,
    autor_nombre TEXT,
    autor_nacionalidad TEXT,
    autor_createdAt TIMESTAMP,
    autor_updatedAt TIMESTAMP
) AS $$
BEGIN
	RETURN QUERY 
	SELECT
        l.libro_id AS libro_id,
        l.titulo AS libro_titulo,
        l.editorial_id AS libro_editorial_id,
        l.genero_id AS libro_genero_id,
        l.autor_id AS libro_autor_id,
        l."createdAt" AS libro_createdAt,
        l."updatedAt" AS libro_updatedAt,
        a.autor_id AS autor_id,
        a.nombre AS autor_nombre,
        a.nacionalidad AS autor_nacionalidad,
        a."createdAt" AS autor_createdAt,
    	a."updatedAt" AS autor_updatedAt
    FROM 
        "Libro" l
    JOIN
       "Autor" a ON l.autor_id = a.autor_id;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM obtener_libros_y_autores();





-- 6. Loop en una tabla y cambiar texto por "HACKED".
CREATE OR REPLACE FUNCTION cambiar_nombres_editorial() 
RETURNS SETOF "Editorial" AS $$
DECLARE 
    maxId INT;
    currentId INT;
BEGIN
    -- Obtener el valor máximo de editorial_id
    SELECT MAX(editorial_id) INTO maxId FROM "Editorial";

    -- Inicializar el contador y el ID actual
    currentId := 1;

    -- Iniciar el bucle
    WHILE currentId <= maxId LOOP
        -- Realizar la actualización si se encuentra un registro válido
        IF currentId IS NOT NULL THEN
            UPDATE "Editorial"
            SET nombre = 'HACKED'
            WHERE editorial_id = currentId;
        END IF;
        
        -- Incrementar el contador
        currentId := currentId + 1;
    END LOOP;
    
    RETURN QUERY SELECT * FROM "Editorial";
END;
$$ LANGUAGE plpgsql;

SELECT * FROM cambiar_nombres_editorial();