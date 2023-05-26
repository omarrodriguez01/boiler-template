-- 1. Retornar toda una tabla
CREATE FUNCTION get_clientes()
  RETURNS TABLE (_id INTEGER, _nombre TEXT, _empresa TEXT, _contacto TEXT, _estatusFK INTEGER) AS
$$
BEGIN
  RETURN QUERY SELECT "ID" AS _id,
                        "Nombre" AS _nombre,
                        "Empresa" AS _empresa,
                        "Contacto" AS _contacto,
                        "EstatusFK" AS _estatusFK 
FROM public."Cliente";
END;
$$
LANGUAGE plpgsql;

SELECT * FROM get_clientes();


-- 2. Retornar el numero de elementos en una tabla
CREATE FUNCTION count_clientes()
  RETURNS INTEGER AS
$$
DECLARE
  total_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO total_count FROM public."Cliente";
  RETURN total_count;
END;
$$
LANGUAGE plpgsql;

SELECT count_clientes();

-- 3. Truncar una tabla
CREATE FUNCTION truncate_clientes()
  RETURNS VOID AS
$$
BEGIN
  TRUNCATE TABLE public."Cliente" CASCADE;
  return;
END;
$$
LANGUAGE plpgsql;

SELECT truncate_clientes();



-- 4.Borrar registro por nombre
CREATE FUNCTION delete_cliente_by_name(Nombre VARCHAR(100))
  RETURNS VOID AS
$$
BEGIN
  DELETE FROM public."Cliente" WHERE Nombre = Nombre;
END;
$$
LANGUAGE plpgsql;

SELECT delete_cliente_by_name('');




-- 5. Join entre dos tablas
CREATE FUNCTION get_clientes_and_tareas()
  RETURNS TABLE (cliente_id INTEGER, cliente_nombre TEXT, tarea_id INTEGER, tarea_nombre TEXT, tarea_descripcion TEXT) AS
$$
BEGIN
  RETURN QUERY
    SELECT c."ID" AS cliente_id,
			c."Nombre" AS cliente_nombre,
			t."ID" AS tarea_id,
			t."Nombre" AS tarea_nombre,
			t."Descripcion" AS tarea_descripcion
    FROM public."Cliente" c
    JOIN public."Tareas" t ON c."ID" = t."ClienteFK";
END;
$$
LANGUAGE plpgsql;

SELECT * FROM get_clientes_and_tareas();


-- 6. Loop para cambiar nombre
CREATE FUNCTION update_clientes_nombre() RETURNS VOID AS
$$
DECLARE
  cliente_row public."Cliente"%ROWTYPE;
BEGIN
  FOR cliente_row IN SELECT * FROM public."Cliente" LOOP
    UPDATE public."Cliente" SET nombre = 'HACKED' WHERE id = cliente_row.id;
  END LOOP;
END;
$$
LANGUAGE plpgsql;

SELECT update_clientes_nombre();

