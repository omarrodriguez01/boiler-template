CREATE OR REPLACE FUNCTION public."getPatients"()
RETURNS SETOF public."Patient" AS
$BODY$
BEGIN
    RETURN QUERY SELECT * FROM public."Patient";
END;
$BODY$
LANGUAGE plpgsql VOLATILE

CREATE OR REPLACE FUNCTION public."countPatients"()
RETURNS integer AS
$BODY$
DECLARE
    count integer;
BEGIN
    SELECT COUNT(*) INTO count FROM public."Patient";
    RETURN count;
END;
$BODY$
LANGUAGE plpgsql VOLATILE

CREATE OR REPLACE FUNCTION public."truncatePatients"()
RETURNS void AS
$BODY$
BEGIN
    TRUNCATE TABLE public."Patient";
END;

CREATE OR REPLACE FUNCTION public."deletePatientByName"(name text)
RETURNS void AS
$BODY$
BEGIN
    DELETE FROM public."Patient" WHERE "Name" = name;
END;

CREATE OR REPLACE FUNCTION public."getPatientMedicalRecord"()
RETURNS SETOF public."Patient" AS
$BODY$
BEGIN
    RETURN QUERY SELECT * FROM public."Patient" JOIN
    public."MedicalRecord" ON public."Patient"."id" = public."MedicalRecord"."patientId";
END;

CREATE OR REPLACE FUNCTION public."hackPatients"()
RETURNS void AS
$BODY$
DECLARE
    patient public."Patient";
BEGIN
    FOR patient IN SELECT * FROM public."Patient" LOOP
        UPDATE public."Patient" SET "Name" = 'Hacked' WHERE "id" = patient."id";
    END LOOP;
END;

SELECT * FROM public."getPatients"();
SELECT * FROM public."countPatients"();
SELECT * FROM public."truncatePatients"();
SELECT * FROM public."deletePatientByName"('Jane Smith');
SELECT * FROM public."getPatientMedicalRecord"();
SELECT * FROM public."hackPatients"();
