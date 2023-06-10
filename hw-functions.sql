-- Retornar toda una tabla
CREATE OR REPLACE FUNCTION get_patients()
  RETURNS TABLE (
	id            Int,
    first_name    text,
    last_name     text,
    date_of_birth timestamp,
    gender        text,
    address       text,
    phone_number  text,
    createdAt     timestamp,
    updatedAt     timestamp
)
AS
$$
  select * from "Patients"
$$
LANGUAGE sql;

select * from  get_patients();

-- Retornar el número de elementos en una tabla
CREATE OR REPLACE FUNCTION get_total_patients()
  RETURNS INTEGER
AS
$$
DECLARE
  patients_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO patients_count FROM "Patients";
  RETURN patients_count;
END;
$$
LANGUAGE plpgsql;

select get_total_patients();

-- Truncar una tabla
CREATE OR REPLACE FUNCTION truncate_prescriptions_table()
  RETURNS VOID
AS
$$
BEGIN
  TRUNCATE TABLE "Prescriptions";
END;
$$
LANGUAGE plpgsql;

SELECT truncate_prescriptions_table();

SELECT truncate_doctors_table();

-- Borrar registro por nombre
CREATE OR REPLACE FUNCTION delete_patient(patient_name VARCHAR)
  RETURNS VOID
AS
$$
BEGIN
  DELETE FROM "Patients" WHERE first_name = patient_name;
END;
$$
LANGUAGE plpgsql;

SELECT delete_patient('Alice');

-- Retornar el resultado de 1 join de tabla "Patients" y "Appointments"
CREATE OR REPLACE FUNCTION get_patients_with_appointments()
  RETURNS TABLE (id INTEGER, first_name TEXT, appointment_date TIMESTAMP)
AS
$$
BEGIN
  RETURN QUERY
    SELECT p.id, p.first_name,f.appointment_date
    FROM "Patients" p
    JOIN "Appointments" p ON p.id = "patients_id";
END;
$$
LANGUAGE plpgsql;
   
SELECT * FROM get_patients_with_appointments();


-- Loop en una tabla y cambiar texto por "HACKED"
CREATE OR REPLACE FUNCTION hack_results()
  RETURNS VOID
AS
$$
BEGIN
  UPDATE "Lab_results"
  SET result_value = 'HACKED';
END;
$$
LANGUAGE plpgsql;

SELECT hack_results();

select * from "Lab_results";