--Retornar 1 tabla
create or replace function get_all_funciones()
returns setof "Funciones"
as $$
begin
	return query execute 'select * from "Funciones"';
	
	return;
end;
$$ 
language plpgsql;
--TEST
select get_all_funciones();


--Obtener el num de elementos
create or replace function count_funciones()
returns int
as $$
declare count_funciones int;
begin
	select count(*) into count_funciones from "Funciones";
	return count_funciones;
end;
$$
language plpgsql;
--TEST
select count_funciones();


--Truncar una tabla
create or replace function truncate_salas()
returns void
as $$
begin
	execute 'truncate table "Salas" cascade';
end;
$$
language plpgsql;
--TEST
select truncate_salas();


--Eliminar un registro por nombre
create or replace function quitar_genero(q_genero text)
returns void
as $$
declare id_deleted_genero int;
begin
	select "idGenero" into id_deleted_genero from "Generos"
	where "genero" = q_genero;
	update "Peliculas" set "idGenero" = 9
	where "idGenero" = id_deleted_genero;
	delete from "Generos" where "genero" = q_genero;
end;
$$
language plpgsql;
--TEST
select quitar_genero('Drama');
select * from "Generos";


--Resultado de JOIN de 2 tablas
create or replace function get_peliculas_generos()
returns table(idPelicula int, titulo text, genero text)
as $$
begin
	return query
	select p."idPelicula", p."titulo", g."genero"
	from "Peliculas" p 
	join "Generos" g ON p."idGenero" = g."idGenero";
	
	return;
end;
$$
language plpgsql;
--TEST
select get_peliculas_generos();


--Cambiar texto por 'HACKED'
create or replace function replace_hacked()
returns void
as $$
declare pelicula_row record;
begin
	for pelicula_row in select * from "Peliculas" loop
		update "Peliculas" set "titulo" = 'HACKED'
		where "idPelicula" = pelicula_row."idPelicula";
	end loop;
end;
$$
language plpgsql;
--TEST
select replace_hacked();
select * from "Peliculas";