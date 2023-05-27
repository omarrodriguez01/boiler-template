select * from "Boleta" b;
select * from "Funcion" f;
select * from "Pelicula" p;
select * from "Sala" s;

CREATE FUNCTION obtener_datos()

create or REPLACE FUNCTION obtenerTC()
returns table (
    id varchar,
    idFuncion INT,
    asiento INT,
    createdAt varchar,
    updatedAt varchar
) AS $$

SELECT * FROM "Boleta";

$$ LANGUAGE sql;

select * from obtenerTC();
-- /////////////////////////////////////////////

CREATE or replace FUNCTION contar_elementos_tabla()
RETURNS INTEGER
AS
$$
DECLARE
    cantidad INTEGER;
BEGIN
    SELECT COUNT(*) INTO cantidad
    FROM "Boleta";
    
    RETURN cantidad;
END
$$
LANGUAGE plpgsql;

SELECT contar_elementos_tabla();
-- /////////////////////////////////////////////
CREATE FUNCTION truncar_tabla()
RETURNS void
AS
$$
BEGIN
    TRUNCATE TABLE "Boleta";
END
$$
LANGUAGE plpgsql;

SELECT truncar_tabla();
-- /////////////////////////////////////////////

CREATE or replace FUNCTION borrar_registro(tabla TEXT, valor TEXT)
RETURNS void
AS
$$
BEGIN
    EXECUTE format('DELETE FROM %I WHERE titulo = %L', tabla, valor);
END
$$
LANGUAGE plpgsql;


SELECT borrar_registro('Pelicula', 'El amor invencible');

-- /////////////////////////////////////////////

drop function join_datos()

CREATE or replace FUNCTION join_datos()
RETURNS table (
	id text, 
	numero text, 
	createdAt timestamp, 
	updateAt timestamp, 
	hora text
)
AS
$$
BEGIN
    return query 
    select "Sala".id, "Sala".numero, "Sala"."createdAt", "Sala"."updatedAt", "Funcion".hora
    from "Sala"  
   	join "Funcion" on "Funcion"."salaId" = "Sala".id;
END
$$
LANGUAGE plpgsql;

select * From join_datos()

-- /////////////////////////////////////////////

create or replace function loopH()
returns table (
	id text,
	titulo text,
	genero text,
	createdAt timestamp,
    updatedAt timestamp
) as $$
declare 
	cursorT cursor for select "Pelicula".titulo  from "Pelicula";
	oldValue text;
begin
	open cursorT;
	loop
		fetch next from cursorT into oldValue;
		exit when not found;
		update "Pelicula" set "titulo" = 'HACKED' where current of cursorT;
	end loop;
	close cursorT;
	return query select * from "Pelicula";
end;
$$
language plpgsql;
select * From loopH()
