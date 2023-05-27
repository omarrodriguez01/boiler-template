CREATE FUNCTION GetTableContents() 
RETURNS TABLE
AS
RETURN 
(
    SELECT * FROM Hospital
)

CREATE FUNCTION dbo.CountTableRows()
RETURNS INT
AS 
BEGIN
    DECLARE @RowCount INT;

    SELECT @RowCount = COUNT(*) FROM Hospital;

    RETURN @RowCount;
END;

CREATE PROCEDURE TruncateTable 
AS
BEGIN
    TRUNCATE TABLE Hospital;
END
