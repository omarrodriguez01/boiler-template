select * from "Doctor" d;
select * from "Hospital" h;
select * from "Company" c;
select * from "Place" p;
select * from "Subsidy" s;

DROP FUNCTION obtenertablacompleta();
drop function contarElementosTabla();
drop function truncarTabla();
drop function borrarRegistroByName();
drop function joinTablas();
drop function loopHacked();

create or REPLACE FUNCTION obtenerTablaCompleta()
returns table (
    id varchar,
    type varchar,
    origin varchar,
    createdAt varchar,
    updatedAt varchar
) AS $$

SELECT * FROM "Subsidy";

$$ LANGUAGE sql;

CREATE or replace FUNCTION contarElementosTabla()
RETURNS integer
AS
$$
DECLARE
    cantidad INTEGER;
BEGIN
    SELECT COUNT(*) INTO cantidad
    FROM "Subsidy";
    
    RETURN cantidad;
END
$$
LANGUAGE plpgsql;

create or replace function truncarTabla()
returns void as 
$$
truncate "Company";
$$
language sql;

create or replace function borrarRegistroByName(nombre text)
returns void as
$$
delete from "Subsidy" where "Subsidy".origin = nombre
$$
language sql;

create or replace function joinTablas()
returns table (
	id text,
    type text,
    origin text,
    createdAt timestamp,
    updatedAt timestamp,
    name text 
) as $$
begin
	return query
	select "Subsidy".id, "Subsidy".type, "Subsidy".origin, "Subsidy"."createdAt", "Subsidy"."updatedAt", "Company".name
	from "Subsidy"
	join "Company" on "Company"."subsidyId" = "Subsidy".id;
end
$$
language plpgsql;

select * from "Hospital" h;

create or replace function loopHacked()
returns table (
	id text,
	alias text,
	bedsCapacity int,
	peopleCapacity int,
	createdAt timestamp,
    updatedAt timestamp
) as $$
declare 
	cursorTable cursor for select "Hospital".alias from "Hospital";
	oldValue text;
begin
	open cursorTable;
	loop
		fetch next from cursorTable into oldValue;
		exit when not found;
		update "Hospital" set "alias" = 'HACKED' where current of cursorTable;
	end loop;
	close cursorTable;
	return query select * from "Hospital";
end;
$$
language plpgsql;

select * from obtenerTablaCompleta();
SELECT contarElementosTabla();
select truncarTabla();
select borrarRegistroByName('Francia');
select * from joinTablas();
SELECT * FROM loopHacked();
