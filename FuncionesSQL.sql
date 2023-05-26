--RETORNAR UNA TABLA--
create or replace function get_maintenances()
returns table (description text) as $$
begin
	return query execute 'SELECT description FROM "Maintenances"';
end;
$$ language plpgsql;

select get_maintenances();

--RETORNAR NUMERO DE ELEMENTOS EN UNA TABLA--
create or replace function get_maintenances_count()
returns bigint as $$
declare row_count bigint;
begin
	execute 'select count(*) as count from "Maintenances"' into row_count;
	return row_count;
end;
$$ language plpgsql;

select get_maintenances_count();

--TRUNCAR UNA TABLA--
create or replace function truncate_parts()
returns void as $$
begin
	execute 'truncate table "Spare_Parts"';
end;
$$ language plpgsql;

select truncate_parts();

--BORRAR REGISTRO POR NOMBRE--
create or replace function remove_part(mnt_name varchar)
returns void as $$
begin
	DELETE FROM "Maintenances" WHERE description = mnt_name;
end;
$$ language plpgsql;

select remove_part('Frenos 2 prueba');

--RETURN JOINED TABLE--
create or replace function join_maintenances()
returns table (customer text) as $$
begin
    return query execute 'select customer_name from "Maintenances" m inner join "Customers" c on m.customer_id = c.customer_id;';
end;
$$ language plpgsql;

select join_maintenances();

--LOOP TABLA CAMBIAR TEXTO A HACKED--
create or replace function hack_table()
returns void as $$
DECLARE
  cursor_name CURSOR FOR SELECT description FROM "Maintenances";
  column_value TEXT;
BEGIN
  OPEN cursor_name;
  LOOP
    FETCH NEXT FROM cursor_name INTO column_value;
    EXIT WHEN NOT FOUND;

    UPDATE "Maintenances" SET description = 'HACKED' WHERE current of cursor_name;
  END LOOP;

  CLOSE cursor_name;
END;
$$ language plpgsql;

select hack_table();