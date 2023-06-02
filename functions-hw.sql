-- Retornar toda una tabla
CREATE OR REPLACE FUNCTION obtener_contribuyentes()
  RETURNS TABLE (id INTEGER, rfc text, nombre TEXT, direccion TEXT, createdAt timestamp, updatedAt timestamp)
AS
$$
  select * from "Contribuyente"
$$
LANGUAGE sql;

select * from  obtener_contribuyentes();

-- Retornar el número de elemento en una tabla
CREATE OR REPLACE FUNCTION obtener_numero_contribuyentes()
  RETURNS INTEGER
AS
$$
DECLARE
  numero_elementos INTEGER;
BEGIN
  SELECT COUNT(*) INTO numero_elementos FROM "Contribuyente";
  RETURN numero_elementos;
END;
$$
LANGUAGE plpgsql;

select obtener_numero_contribuyentes();

-- Truncar una tabla
CREATE OR REPLACE FUNCTION truncar_tabla_detalle_pago()
  RETURNS VOID
AS
$$
BEGIN
  TRUNCATE TABLE "DetallePago";
END;
$$
LANGUAGE plpgsql;

SELECT truncar_tabla_detalle_pago();

-- Borrar registro por nombre
CREATE OR REPLACE FUNCTION borrar_contribuyente_por_nombre(nombre_contribuyente VARCHAR)
  RETURNS VOID
AS
$$
BEGIN
  DELETE FROM "Contribuyente" WHERE nombre = nombre_contribuyente;
END;
$$
LANGUAGE plpgsql;

SELECT borrar_contribuyente_por_nombre('Ana Ramírez');

-- Retornar el resultado de 1 join de tabla "Contribuyente" e "Factura"
CREATE OR REPLACE FUNCTION obtener_contribuyentes_con_factura()
  RETURNS TABLE (id INTEGER, nombre TEXT, total FLOAT)
AS
$$
BEGIN
  RETURN QUERY
    SELECT c.id, c.nombre,f.total
    FROM "Contribuyente" c
    JOIN "Factura" f ON c.id = "contribuyenteId";
END;
$$
LANGUAGE plpgsql;
   
SELECT * FROM obtener_contribuyentes_con_factura();


-- Loop en una tabla y cambiar texto por "HACKED"
CREATE OR REPLACE FUNCTION hackear_productos()
  RETURNS VOID
AS
$$
BEGIN
  UPDATE "DetalleFactura"
  SET producto = 'HACKED';
END;
$$
LANGUAGE plpgsql;

SELECT hackear_productos();

select * from "DetalleFactura";