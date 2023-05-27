-- Get table function
CREATE OR REPLACE FUNCTION get_table_rows()
  RETURNS SETOF "characters" AS $$
BEGIN
  RETURN QUERY SELECT * FROM "characters";
END;
$$ LANGUAGE plpgsql;

SELECT get_table_rows();

-- Return the amount of registries in a table
CREATE OR REPLACE FUNCTION get_characters_count()
  RETURNS INTEGER AS $$
DECLARE
  row_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO row_count FROM characters;
  RETURN row_count;
END;
$$ LANGUAGE plpgsql;

SELECT get_characters_count();

-- Truncate a table
CREATE OR REPLACE FUNCTION truncate_characters_table()
  RETURNS VOID AS $$
BEGIN
  TRUNCATE TABLE characters;
END;
$$ LANGUAGE plpgsql;

SELECT truncate_characters_table();

-- Delete a registry of string type in a table
CREATE OR REPLACE FUNCTION delete_registry_by_name(characterName TEXT)
RETURNS VOID AS $$
BEGIN
    DELETE FROM "characters" WHERE name = characterName;
END;
$$ LANGUAGE plpgsql;

SELECT delete_registry_by_name('Sasuke Uchiha');

-- Return the result of a join between two tables
CREATE OR REPLACE FUNCTION get_characters_with_village()
  RETURNS TABLE (
    id_character INTEGER,
    name_character TEXT,
    id_village INTEGER,
    name_village TEXT,
    country_id INTEGER,
  )
AS $$
BEGIN
  RETURN QUERY SELECT c.*, v.name_village, v.country_id,
               FROM "characters" c
               JOIN "villages" v ON c.id_village = v.id_village;
END;
$$ LANGUAGE plpgsql;

SELECT get_characters_with_village();

-- Loop which changes a string attibute to "HACKED"
CREATE OR REPLACE FUNCTION update_character_names_to_hacked()
  RETURNS VOID AS $$
DECLARE
  character_row RECORD;
BEGIN
  FOR character_row IN SELECT id FROM characters
  LOOP
    UPDATE characters SET name = 'HACKED' WHERE id = character_row.id;
  END LOOP;
END;
$$ LANGUAGE plpgsql;

SELECT update_character_names_to_hacked();