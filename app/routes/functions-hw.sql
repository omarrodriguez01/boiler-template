--

CREATE OR REPLACE FUNCTION retornarTabla()
RETURNS SETOF "Autor" AS $$
BEGIN
    RETURN QUERY SELECT * FROM "Autor";
END;
$$ LANGUAGE plpgsql;

select retornarTabla();

--
CREATE OR REPLACE FUNCTION numeroElementos()
RETURNS INTEGER AS $$
DECLARE
    total_elements INTEGER;
BEGIN
    SELECT COUNT(*) INTO total_elements FROM "Autor";
    RETURN total_elements;
END;
$$ LANGUAGE plpgsql;

SELECT numeroElementos();

--
CREATE OR REPLACE FUNCTION truncarTabla()
RETURNS VOID AS $$
BEGIN
    TRUNCATE TABLE "Existencia";
END;
$$ LANGUAGE plpgsql;

SELECT truncarTabla();

--
CREATE OR REPLACE FUNCTION borrarNombre(nombre_texto TEXT)
RETURNS VOID AS $$
BEGIN
    DELETE FROM "Autor" WHERE id = nombre_texto;
END;
$$ LANGUAGE plpgsql;

SELECT borrarNombre('5');

--
CREATE OR REPLACE FUNCTION dosTablas()
RETURNS TABLE (
    libroID INTEGER,
    ubicacion TEXT,
    titulo TEXT,
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        "Libro"."id" AS libroID,
        "Libro"."titulo" AS titulo,
        "Existencia"."ubicacion" AS ubicacion,
    FROM
        "Libro"
    JOIN
        "Existencia" ON "Libro"."id" = "Existencia"."libro_id";
END;
$$ LANGUAGE plpgsql;

SELECT * FROM dosTablas();

--
CREATE OR REPLACE FUNCTION textoHacked()
RETURNS VOID AS $$
DECLARE
    libro_record RECORD;
BEGIN
    FOR libro_record IN SELECT * FROM "Libro"
    LOOP
        UPDATE "Libro" SET 
            titulo = 'Hacked'
        WHERE id = libro_record.id;
    END LOOP;
END;
$$ LANGUAGE plpgsql;


SELECT textoHacked();
