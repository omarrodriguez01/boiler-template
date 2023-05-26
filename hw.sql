-- Retornar todo en 1 tabla
CREATE OR REPLACE FUNCTION get_pacientes()
  RETURNS TABLE (
    id_paciente INTEGER,
    nombre TEXT,
    fecha_nacimiento TIMESTAMP(3),
    genero TEXT,
    telefono TEXT,
    correo_electronico TEXT,
    direccion TEXT,
    createdAt TIMESTAMP(3),
    updatedAt TIMESTAMP(3)
  )
AS $$
BEGIN
  RETURN QUERY SELECT * FROM "Paciente";
END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_pacientes();

-- Retornar el # de elem. en 1 tabla
CREATE OR REPLACE FUNCTION contar_pacientes()
  RETURNS INTEGER
AS $$
DECLARE
  total_pacientes INTEGER;
BEGIN
  SELECT COUNT(*) INTO total_pacientes FROM "Paciente";
  RETURN total_pacientes;
END;
$$ LANGUAGE plpgsql;

SELECT contar_pacientes();

-- Function to truncate the "Paciente" table
CREATE OR REPLACE FUNCTION truncate_paciente_table()
  RETURNS VOID
AS $$
BEGIN
  EXECUTE 'TRUNCATE TABLE "Paciente" CASCADE;';
  RETURN;
END;
$$ LANGUAGE plpgsql;

SELECT truncate_paciente_table();

-- Borrar registro por nombre
CREATE OR REPLACE FUNCTION delete_doctor_by_name(doctor_name TEXT)
  RETURNS VOID
AS $$
BEGIN
  -- Delete related records from "Cita" table
  DELETE FROM "Cita"
  WHERE "id_doctor" IN (
    SELECT "id_doctor"
    FROM "Doctor"
    WHERE "nombre" = doctor_name
  );

  -- Delete the doctor from "Doctor" table
  DELETE FROM "Doctor"
  WHERE "nombre" = doctor_name;
  
  RETURN;
END;
$$ LANGUAGE plpgsql;

SELECT delete_doctor_by_name('Rodrigo');

-- Retornar el resultado de 1 join de 2 tablas
CREATE OR REPLACE FUNCTION get_pacientes_con_citas()
  RETURNS TABLE (
    id_paciente INTEGER,
    nombre_paciente TEXT,
    fecha_nacimiento TIMESTAMP(3),
    genero TEXT,
    telefono TEXT,
    correo_electronico TEXT,
    direccion TEXT,
    id_cita INTEGER,
    fecha_hora TIMESTAMP(3),
    duracion_estimada INTEGER
  )
AS $$
BEGIN
  RETURN QUERY SELECT p.*, c.id_cita, c.fecha_hora, c.duracion_estimada
               FROM "Paciente" p
               JOIN "Cita" c ON p.id_paciente = c.id_paciente;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_pacientes_con_citas();

-- Loop en una tabla y cambiar texto por "HACKED"
CREATE OR REPLACE FUNCTION hackear_pacientes()
  RETURNS VOID
AS $$
BEGIN
  UPDATE "Paciente" SET nombre = 'HACKED';
END;
$$ LANGUAGE plpgsql;

SELECT hackear_pacientes();