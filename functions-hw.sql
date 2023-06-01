--Retorna la tabla que gustes
CREATE OR REPLACE FUNCTION get_table_rows()
    RETURNS SETOF "productos"
BEGIN
    RETURN QUERY SELECT * FROM "productos";
END;
$$ LANGUAGE plpgsql;

SELECT get_table_rows();

--Retornar el numero de registros de una tabla
CREATE OR REPLACE FUNCTION get_productos_count()
    RETURNS INTEGER AS $$
DECLARE
    countProductos INTEGER;
BEGIN
    SELECT COUNT(*) INTO countProductos FROM "productos";
    RETURN countProductos;
END;
$$ LANGUAGE plpgsql;

SELECT get_productos_count();

--Truncate una tabla
CREATE OR REPLACE FUNCTION truncate_table()
    RETURNS VOID AS $$
BEGIN
    TRUNCATE TABLE "productos";
END;
$$ LANGUAGE plpgsql;

SELECT truncate_table();

--Borrar un registro tipo string de una tabla
CREATE OR REPLACE FUNCTION delete_by_name(productoName TEXT)
    RETURNS VOID AS $$
BEGIN
    DELETE FROM "productos" WHERE "nombre" = productoName;
END;
$$ LANGUAGE plpgsql;

SELECT delete_by_name('Donas');

--Retornar el resultado de un join de 2 tablas
CREATE OR REPLACE FUNCTION get_join_table()
    RETURN TABLE (
        idProducto INTEGER,
        nombre TEXT,
        precio INTEGER,
        stock INTEGER,
        idVenta INTEGER,
        total DECIMAL,
    )
    AS $$
BEGIN
    RETURN QUERY
    SELECT p.idProducto, p.nombre, p.precio, p.stock, v.idVenta, v.total
    FROM productos p
    JOIN ventas v ON p.idProducto = v.idVenta;
END;
$$ LANGUAGE plpgsql;

SELECT get_join_table();

--Implementar algún loop que cambie un atributo tipo string a "HACKED"

CREATE OR REPLACE FUNCTION hack_table()
    RETURNS VOID AS $$
DECLARE
    i INTEGER;
BEGIN
    FOR i IN (SELECT idProducto FROM productos)
    LOOP
        UPDATE productos SET nombre = 'HACKED' WHERE idProducto = i;
    END LOOP;
END;
$$ LANGUAGE plpgsql;

SELECT hack_table();