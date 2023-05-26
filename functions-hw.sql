-- Retornar toda 1 tabla
CREATE OR REPLACE FUNCTION retornar_toda_tabla()
RETURNS SETOF "Paciente" AS $$
BEGIN
    RETURN QUERY SELECT * FROM "Paciente";
END;
$$ LANGUAGE plpgsql;

select retornar_toda_tabla();

-- Retornar el # de elemnto en 1 tabla
CREATE OR REPLACE FUNCTION retornar_numero_elementos()
RETURNS INTEGER AS $$
DECLARE
    total_elements INTEGER;
BEGIN
    SELECT COUNT(*) INTO total_elements FROM "Paciente";
    RETURN total_elements;
END;
$$ LANGUAGE plpgsql;

SELECT retornar_numero_elementos();

-- Truncar una tabla
CREATE OR REPLACE FUNCTION truncar_tabla()
RETURNS VOID AS $$
BEGIN
    TRUNCATE TABLE "Resultado";
END;
$$ LANGUAGE plpgsql;

SELECT truncar_tabla();

-- Borrar registro por nombre (es necesario crear un resultado y en el campo de unidad poner Paracetamol)
CREATE OR REPLACE FUNCTION borrar_registro_por_nombre(nombre_texto TEXT)
RETURNS VOID AS $$
BEGIN
    DELETE FROM "Resultado" WHERE unidad = nombre_texto;
END;
$$ LANGUAGE plpgsql;

SELECT borrar_registro_por_nombre('Paracetamol');

-- Retornar el resultado de 1 join de 2 tablas
CREATE OR REPLACE FUNCTION obtener_join_paciente_consulta()
RETURNS TABLE (
    paciente_id INTEGER,
    paciente_nombre TEXT,
    paciente_apellido TEXT,
    paciente_fecha_nacimiento TIMESTAMP,
    paciente_genero TEXT,
    consulta_id INTEGER,
    consulta_doctor_id INTEGER,
    consulta_paciente_id INTEGER,
    consulta_fecha TIMESTAMP,
    consulta_hora TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        "Paciente"."id" AS paciente_id,
        "Paciente"."nombre" AS paciente_nombre,
        "Paciente"."apellido" AS paciente_apellido,
        "Paciente"."fechaNacimiento" AS paciente_fecha_nacimiento,
        "Paciente"."genero" AS paciente_genero,
        "Consulta"."id" AS consulta_id,
        "Consulta"."doctorId" AS consulta_doctor_id,
        "Consulta"."pacienteId" AS consulta_paciente_id,
        "Consulta"."fecha" AS consulta_fecha,
        "Consulta"."hora" AS consulta_hora
    FROM
        "Paciente"
    JOIN
        "Consulta" ON "Paciente"."id" = "Consulta"."pacienteId";
END;
$$ LANGUAGE plpgsql;


SELECT * FROM obtener_join_paciente_consulta();


-- Loop en una tabla y cambiar texto por "HACKED"
CREATE OR REPLACE FUNCTION cambiar_texto_hacked()
RETURNS VOID AS $$
DECLARE
    paciente_record RECORD;
BEGIN
    FOR paciente_record IN SELECT * FROM "Paciente"
    LOOP
        UPDATE "Paciente" SET 
            nombre = 'HACKED',
            apellido = 'HACKED',
            genero = 'HACKED',
            direccion = 'HACKED'
        WHERE id = paciente_record.id;
    END LOOP;
END;
$$ LANGUAGE plpgsql;


SELECT cambiar_texto_hacked();

