--Regresar toda la tabla de empleados
CREATE FUNCTION get_all_empleados()
RETURNS SETOF empleados
AS $$
BEGIN
    RETURN QUERY EXECUTE 'SELECT * FROM empleados';

    RETURN;
END;
$$
LANGUAGE PLPGSQL;

--Obtener la cantidad de empleados 
CREATE OR REPLACE FUNCTION get_empleados_count()
RETURNS INT
AS $$
DECLARE
    empleados_count INT;
BEGIN
    SELECT COUNT(*) INTO empleados_count FROM empleados;

    RETURN empleados_count;
END;
$$
LANGUAGE PLPGSQL;

--Truncar tabla de empleados
CREATE FUNCTION truncate_empleados()
RETURNS VOID
AS $$
BEGIN
    EXECUTE 'TRUNCATE TABLE empleados';
END;
$$
LANGUAGE PLPGSQL;

--Join de la tabla de empleado con órden regresando un Join con el id del empleado, su nombre y el id de la órden
CREATE OR REPLACE FUNCTION get_empleados_ordenes()
RETURNS TABLE (empleado_id INT, nombre VARCHAR(50), orden_id INT)
AS $$
BEGIN
    RETURN QUERY
    SELECT e.empleado_id, e.nombre, o.orden_id
    FROM empleados e
    JOIN ordenes o ON e.empleado_id = o.empleado_id;

    RETURN;
END;
$$
LANGUAGE PLPGSQL;

--Remplaza los valores VARCHAR de la columna nombre de descripción 
CREATE OR REPLACE FUNCTION change_hacked()
RETURNS VOID 
AS $$
BEGIN 
	UPDATE productos_menu SET descripcion = 'HACKED'; 
END; 
$$
LANGUAGE PLPGSQL; 

--Elimina del registro al empleado con el nombre estipulado  
CREATE OR REPLACE FUNCTION deleteRegister(nombre_empleado VARCHAR)
RETURNS VOID
AS $$ 
BEGIN 
	DELETE FROM empleados WHERE nombre = nombre_empleado; 
END; 
$$ 
LANGUAGE PLPGSQL; 


