-- Retorna la tabla que gustes
CREATE OR REPLACE FUNCTION get_all_from_table(table_name text)
RETURNS SETOF RECORD AS $$
BEGIN
    RETURN QUERY EXECUTE format('SELECT * FROM %I', table_name);
END;
$$ LANGUAGE plpgsql;

-- Retornar el número de registros de una tabla
CREATE OR REPLACE FUNCTION count_table_records(table_name text)
RETURNS INTEGER AS $$
DECLARE
    record_count INTEGER;
BEGIN
    EXECUTE format('SELECT COUNT(*) FROM %I', table_name) INTO record_count;
    RETURN record_count;
END;
$$ LANGUAGE plpgsql;

-- Truncate una tabla
CREATE OR REPLACE FUNCTION truncate_table(table_name text)
RETURNS VOID AS $$
BEGIN
    EXECUTE format('TRUNCATE TABLE %I', table_name);
END;
$$ LANGUAGE plpgsql;

-- Borrar un registro tipo string de una tabla
CREATE OR REPLACE FUNCTION delete_record(table_name text, column_name text, record_value text)
RETURNS VOID AS $$
BEGIN
    EXECUTE format('DELETE FROM %I WHERE %I = %L', table_name, column_name, record_value);
END;
$$ LANGUAGE plpgsql;

-- Retornar el resultado de un join de 2 tablas
CREATE OR REPLACE FUNCTION join_tables(table_name1 text, table_name2 text, common_column text)
RETURNS TABLE(id1 text, id2 text, name1 text, name2 text) AS $$
BEGIN
    RETURN QUERY EXECUTE format('SELECT T1.id, T2.id, T1.name, T2.name FROM %I T1 INNER JOIN %I T2 ON T1.%I = T2.%I', table_name1, table_name2, common_column, common_column);
END;
$$ LANGUAGE plpgsql;

-- Implementar algún loop que cambie un atributo tipo string a "HACKED"
CREATE OR REPLACE FUNCTION hack_all(table_name text, column_name text)
RETURNS VOID AS $$
BEGIN
    EXECUTE format('UPDATE %I SET %I = %L', table_name, column_name, 'HACKED');
END;
$$ LANGUAGE plpgsql;
