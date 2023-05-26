create function getAllUsers()
	returns table (id int, username varchar(100), email varchar(100), password varchar(100), firstname varchar(100), lastName varchar(100), profilePicture varchar(100), subscriptionTier varchar(100), createdAt timestamp, updatedAt timestamp)
as $$
	select * 
	from "User"
$$ language sql;

select * from getAllUsers();

create or replace function countSuperFanSubscriptions()
	returns int
	language plpgsql
as $$
	declare
		totalCount int;
	begin
		select count(*) into totalCount
		from "User"
		where "subscriptionTier" = 'Super Fan';
		
		return totalCount;
	end;
	
$$;

select * from countSuperFanSubscriptions();

create or replace function truncateReviewTable() 
	returns void
	language plpgsql
as $$
begin 
	execute 'TRUNCATE TABLE "Review"';
end;
$$;

select * from truncateReviewTable();

create or replace function deletePlaylistByName(playlistName text)
	returns void
	language plpgsql
as $$
	begin 
		delete from "Playlist"
		where "title" = playlistName;
	end;
$$;

select * from deletePlaylistByName('My movies of the year');
select * from "Playlist" p;

create or replace function joinsUserAndPLaylist()
	returns table (id int, title text, image text, username text)
	language plpgsql
as $$ 
	begin
		return query
		select p.id, p.title, p.image, u.username
		from "User" u
		join "Playlist" p on u."id" = p."userId" 
		where u."id" = "userId";
	end;
$$;

select * from joinsUserAndPLaylist();

create or replace function gettingHacked()
	returns table (id int, username text, email text, password text, firstname text, lastName text, profilePicture text, subscriptionTier text, createdAt timestamp, updatedAt timestamp)
	language plpgsql
as $$
	declare 
	loopCursor cursor for select u."password" from "User" as u;
	oldValue text;
	begin
		open loopCursor;   
		loop
			fetch next from loopCursor into oldvalue;
			exit when not found;
			update "User" set "password" = 'HACKED' where current of loopCursor;
		end loop;
		close loopCursor;
		return query
		select * from "User";
	end;
$$;

select * from gettingHacked();