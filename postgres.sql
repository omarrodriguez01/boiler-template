--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Homebrew)
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: boiler
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO boiler;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: boiler
--

COMMENT ON SCHEMA public IS '';


--
-- Name: delete_row_by_name(text, text, text); Type: FUNCTION; Schema: public; Owner: boiler
--

CREATE FUNCTION public.delete_row_by_name(table_name text, name_column text, name_value text) RETURNS TABLE(id integer, first_name text, last_name text, date_of_birth timestamp without time zone, gender text, address text, phone_number text, createdat timestamp without time zone, updatedat timestamp without time zone)
    LANGUAGE plpgsql
    AS $_$
BEGIN
  EXECUTE format('DELETE FROM %I WHERE %I = $1', table_name, name_column) USING name_value;
END;
$_$;


ALTER FUNCTION public.delete_row_by_name(table_name text, name_column text, name_value text) OWNER TO boiler;

--
-- Name: getpatients(); Type: FUNCTION; Schema: public; Owner: boiler
--

CREATE FUNCTION public.getpatients() RETURNS TABLE(id integer, first_name text, last_name text, date_of_birth timestamp without time zone, gender text, address text, phone_number text, createdat timestamp without time zone, updatedat timestamp without time zone)
    LANGUAGE plpgsql
    AS $$
BEGIN
    RETURN QUERY
    SELECT *
    FROM "Patients";
END;
$$;


ALTER FUNCTION public.getpatients() OWNER TO boiler;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Appointments; Type: TABLE; Schema: public; Owner: boiler
--

CREATE TABLE public."Appointments" (
    id integer NOT NULL,
    doctor_id integer NOT NULL,
    patient_id integer NOT NULL,
    appointment_date timestamp(3) without time zone,
    appointment_time timestamp(3) without time zone,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Appointments" OWNER TO boiler;

--
-- Name: Appointments_id_seq; Type: SEQUENCE; Schema: public; Owner: boiler
--

CREATE SEQUENCE public."Appointments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Appointments_id_seq" OWNER TO boiler;

--
-- Name: Appointments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: boiler
--

ALTER SEQUENCE public."Appointments_id_seq" OWNED BY public."Appointments".id;


--
-- Name: Departments; Type: TABLE; Schema: public; Owner: boiler
--

CREATE TABLE public."Departments" (
    id integer NOT NULL,
    department_name text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Departments" OWNER TO boiler;

--
-- Name: Departments_id_seq; Type: SEQUENCE; Schema: public; Owner: boiler
--

CREATE SEQUENCE public."Departments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Departments_id_seq" OWNER TO boiler;

--
-- Name: Departments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: boiler
--

ALTER SEQUENCE public."Departments_id_seq" OWNED BY public."Departments".id;


--
-- Name: Doctors; Type: TABLE; Schema: public; Owner: boiler
--

CREATE TABLE public."Doctors" (
    id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    department_id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Doctors" OWNER TO boiler;

--
-- Name: Doctors_id_seq; Type: SEQUENCE; Schema: public; Owner: boiler
--

CREATE SEQUENCE public."Doctors_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Doctors_id_seq" OWNER TO boiler;

--
-- Name: Doctors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: boiler
--

ALTER SEQUENCE public."Doctors_id_seq" OWNED BY public."Doctors".id;


--
-- Name: Lab_results; Type: TABLE; Schema: public; Owner: boiler
--

CREATE TABLE public."Lab_results" (
    id integer NOT NULL,
    patient_id integer NOT NULL,
    lab_test_id integer NOT NULL,
    result_value text,
    result_date timestamp(3) without time zone,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Lab_results" OWNER TO boiler;

--
-- Name: Lab_results_id_seq; Type: SEQUENCE; Schema: public; Owner: boiler
--

CREATE SEQUENCE public."Lab_results_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Lab_results_id_seq" OWNER TO boiler;

--
-- Name: Lab_results_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: boiler
--

ALTER SEQUENCE public."Lab_results_id_seq" OWNED BY public."Lab_results".id;


--
-- Name: Lab_tests; Type: TABLE; Schema: public; Owner: boiler
--

CREATE TABLE public."Lab_tests" (
    id integer NOT NULL,
    test_name text NOT NULL,
    description text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Lab_tests" OWNER TO boiler;

--
-- Name: Lab_tests_id_seq; Type: SEQUENCE; Schema: public; Owner: boiler
--

CREATE SEQUENCE public."Lab_tests_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Lab_tests_id_seq" OWNER TO boiler;

--
-- Name: Lab_tests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: boiler
--

ALTER SEQUENCE public."Lab_tests_id_seq" OWNED BY public."Lab_tests".id;


--
-- Name: Medications; Type: TABLE; Schema: public; Owner: boiler
--

CREATE TABLE public."Medications" (
    id integer NOT NULL,
    medication_name text NOT NULL,
    description text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Medications" OWNER TO boiler;

--
-- Name: Medications_id_seq; Type: SEQUENCE; Schema: public; Owner: boiler
--

CREATE SEQUENCE public."Medications_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Medications_id_seq" OWNER TO boiler;

--
-- Name: Medications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: boiler
--

ALTER SEQUENCE public."Medications_id_seq" OWNED BY public."Medications".id;


--
-- Name: Patients; Type: TABLE; Schema: public; Owner: boiler
--

CREATE TABLE public."Patients" (
    id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    date_of_birth timestamp(3) without time zone NOT NULL,
    gender text NOT NULL,
    address text NOT NULL,
    phone_number text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Patients" OWNER TO boiler;

--
-- Name: Patients_id_seq; Type: SEQUENCE; Schema: public; Owner: boiler
--

CREATE SEQUENCE public."Patients_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Patients_id_seq" OWNER TO boiler;

--
-- Name: Patients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: boiler
--

ALTER SEQUENCE public."Patients_id_seq" OWNED BY public."Patients".id;


--
-- Name: Prescriptions; Type: TABLE; Schema: public; Owner: boiler
--

CREATE TABLE public."Prescriptions" (
    id integer NOT NULL,
    doctor_id integer NOT NULL,
    patient_id integer NOT NULL,
    medication_id integer NOT NULL,
    dosage text,
    prescription_date timestamp(3) without time zone,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Prescriptions" OWNER TO boiler;

--
-- Name: Prescriptions_id_seq; Type: SEQUENCE; Schema: public; Owner: boiler
--

CREATE SEQUENCE public."Prescriptions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Prescriptions_id_seq" OWNER TO boiler;

--
-- Name: Prescriptions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: boiler
--

ALTER SEQUENCE public."Prescriptions_id_seq" OWNED BY public."Prescriptions".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: boiler
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO boiler;

--
-- Name: Appointments id; Type: DEFAULT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Appointments" ALTER COLUMN id SET DEFAULT nextval('public."Appointments_id_seq"'::regclass);


--
-- Name: Departments id; Type: DEFAULT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Departments" ALTER COLUMN id SET DEFAULT nextval('public."Departments_id_seq"'::regclass);


--
-- Name: Doctors id; Type: DEFAULT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Doctors" ALTER COLUMN id SET DEFAULT nextval('public."Doctors_id_seq"'::regclass);


--
-- Name: Lab_results id; Type: DEFAULT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Lab_results" ALTER COLUMN id SET DEFAULT nextval('public."Lab_results_id_seq"'::regclass);


--
-- Name: Lab_tests id; Type: DEFAULT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Lab_tests" ALTER COLUMN id SET DEFAULT nextval('public."Lab_tests_id_seq"'::regclass);


--
-- Name: Medications id; Type: DEFAULT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Medications" ALTER COLUMN id SET DEFAULT nextval('public."Medications_id_seq"'::regclass);


--
-- Name: Patients id; Type: DEFAULT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Patients" ALTER COLUMN id SET DEFAULT nextval('public."Patients_id_seq"'::regclass);


--
-- Name: Prescriptions id; Type: DEFAULT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Prescriptions" ALTER COLUMN id SET DEFAULT nextval('public."Prescriptions_id_seq"'::regclass);


--
-- Data for Name: Appointments; Type: TABLE DATA; Schema: public; Owner: boiler
--

COPY public."Appointments" (id, doctor_id, patient_id, appointment_date, appointment_time, "createdAt", "updatedAt") FROM stdin;
1	1	1	2023-06-21 06:00:00	2023-06-21 06:00:00	2023-06-02 18:27:21.229	2023-06-02 18:27:21.229
2	2	2	2023-06-22 06:00:00	2023-06-22 06:00:00	2023-06-02 18:27:21.229	2023-06-02 18:27:21.229
3	3	3	2023-06-23 06:00:00	2023-06-23 06:00:00	2023-06-02 18:27:21.229	2023-06-02 18:27:21.229
\.


--
-- Data for Name: Departments; Type: TABLE DATA; Schema: public; Owner: boiler
--

COPY public."Departments" (id, department_name, "createdAt", "updatedAt") FROM stdin;
1	Cardiology	2023-06-02 18:27:21.176	2023-06-02 18:27:21.176
2	Dermatology	2023-06-02 18:27:21.176	2023-06-02 18:27:21.176
3	Neurology	2023-06-02 18:27:21.176	2023-06-02 18:27:21.176
\.


--
-- Data for Name: Doctors; Type: TABLE DATA; Schema: public; Owner: boiler
--

COPY public."Doctors" (id, first_name, last_name, department_id, "createdAt", "updatedAt") FROM stdin;
1	John	Doe	1	2023-06-02 18:27:21.197	2023-06-02 18:27:21.197
2	Jane	Smith	2	2023-06-02 18:27:21.197	2023-06-02 18:27:21.197
3	Susane	Collins	3	2023-06-02 18:27:21.197	2023-06-02 18:27:21.197
\.


--
-- Data for Name: Lab_results; Type: TABLE DATA; Schema: public; Owner: boiler
--

COPY public."Lab_results" (id, patient_id, lab_test_id, result_value, result_date, "createdAt", "updatedAt") FROM stdin;
1	1	1	Normal	2023-06-21 06:00:00	2023-06-02 18:27:21.287	2023-06-02 18:27:21.287
2	2	2	Abnormal	2023-06-22 06:00:00	2023-06-02 18:27:21.287	2023-06-02 18:27:21.287
3	3	3	Abnormal	2023-06-23 06:00:00	2023-06-02 18:27:21.287	2023-06-02 18:27:21.287
\.


--
-- Data for Name: Lab_tests; Type: TABLE DATA; Schema: public; Owner: boiler
--

COPY public."Lab_tests" (id, test_name, description, "createdAt", "updatedAt") FROM stdin;
1	Blood Test	Complete blood count	2023-06-02 18:27:21.273	2023-06-02 18:27:21.273
2	Urinalysis	Urine test	2023-06-02 18:27:21.273	2023-06-02 18:27:21.273
3	X-Ray	\N	2023-06-02 18:27:21.273	2023-06-02 18:27:21.273
\.


--
-- Data for Name: Medications; Type: TABLE DATA; Schema: public; Owner: boiler
--

COPY public."Medications" (id, medication_name, description, "createdAt", "updatedAt") FROM stdin;
1	Aspirin	Pain reliever	2023-06-02 18:27:21.245	2023-06-02 18:27:21.245
2	Amoxicillin	Antibiotic	2023-06-02 18:27:21.245	2023-06-02 18:27:21.245
3	Ibuprofen	Nonsteroidal anti-inflammatory	2023-06-02 18:27:21.245	2023-06-02 18:27:21.245
\.


--
-- Data for Name: Patients; Type: TABLE DATA; Schema: public; Owner: boiler
--

COPY public."Patients" (id, first_name, last_name, date_of_birth, gender, address, phone_number, "createdAt", "updatedAt") FROM stdin;
1	Alice	Johnson	1990-06-15 06:00:00	Female	123 Main St	1234567890	2023-06-02 18:27:21.214	2023-06-02 18:27:21.214
2	Bob	Smith	1985-09-22 06:00:00	Male	456 Elm St	9876543210	2023-06-02 18:27:21.214	2023-06-02 18:27:21.214
3	Nicole	Kidman	1967-07-20 06:00:00	Female	83 Harris Street	5123456789	2023-06-02 18:27:21.214	2023-06-02 18:27:21.214
\.


--
-- Data for Name: Prescriptions; Type: TABLE DATA; Schema: public; Owner: boiler
--

COPY public."Prescriptions" (id, doctor_id, patient_id, medication_id, dosage, prescription_date, "createdAt", "updatedAt") FROM stdin;
1	1	1	1	500mg	2023-06-21 06:00:00	2023-06-02 18:27:21.258	2023-06-02 18:27:21.258
2	2	2	2	250mg	2023-06-22 06:00:00	2023-06-02 18:27:21.258	2023-06-02 18:27:21.258
3	3	3	3	250mg	2023-06-23 06:00:00	2023-06-02 18:27:21.258	2023-06-02 18:27:21.258
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: boiler
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
96b6aaa3-4d70-45dd-8404-1ae574e30741	5e821adf5729c754640d7e092a99969e5063602ffe300c38c45efca82e21bc9d	2023-05-26 12:36:53.369549-06	20230521204931_geraldine_hospital	\N	\N	2023-05-26 12:36:53.35405-06	1
b0c18ed2-a545-4dd0-af62-a4dd5dcf4b52	d3b125c2cfab50021b4e2660e6fcf7ed9d57e2677d05f22cde9de37c6c586a6d	2023-05-26 12:36:53.373146-06	20230521210106_add_timestamps_flags	\N	\N	2023-05-26 12:36:53.369936-06	1
a7d37ae1-23cc-46bc-932c-dc230010fe93	5498059f75615557a364da2aef1c4bb927de20fe0dcaf6809081eeebfcd2f545	2023-05-26 12:37:05.852617-06	20230526183705_added_on_delete	\N	\N	2023-05-26 12:37:05.843076-06	1
\.


--
-- Name: Appointments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: boiler
--

SELECT pg_catalog.setval('public."Appointments_id_seq"', 3, true);


--
-- Name: Departments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: boiler
--

SELECT pg_catalog.setval('public."Departments_id_seq"', 3, true);


--
-- Name: Doctors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: boiler
--

SELECT pg_catalog.setval('public."Doctors_id_seq"', 3, true);


--
-- Name: Lab_results_id_seq; Type: SEQUENCE SET; Schema: public; Owner: boiler
--

SELECT pg_catalog.setval('public."Lab_results_id_seq"', 3, true);


--
-- Name: Lab_tests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: boiler
--

SELECT pg_catalog.setval('public."Lab_tests_id_seq"', 3, true);


--
-- Name: Medications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: boiler
--

SELECT pg_catalog.setval('public."Medications_id_seq"', 3, true);


--
-- Name: Patients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: boiler
--

SELECT pg_catalog.setval('public."Patients_id_seq"', 3, true);


--
-- Name: Prescriptions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: boiler
--

SELECT pg_catalog.setval('public."Prescriptions_id_seq"', 3, true);


--
-- Name: Appointments Appointments_pkey; Type: CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Appointments"
    ADD CONSTRAINT "Appointments_pkey" PRIMARY KEY (id);


--
-- Name: Departments Departments_pkey; Type: CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Departments"
    ADD CONSTRAINT "Departments_pkey" PRIMARY KEY (id);


--
-- Name: Doctors Doctors_pkey; Type: CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Doctors"
    ADD CONSTRAINT "Doctors_pkey" PRIMARY KEY (id);


--
-- Name: Lab_results Lab_results_pkey; Type: CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Lab_results"
    ADD CONSTRAINT "Lab_results_pkey" PRIMARY KEY (id);


--
-- Name: Lab_tests Lab_tests_pkey; Type: CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Lab_tests"
    ADD CONSTRAINT "Lab_tests_pkey" PRIMARY KEY (id);


--
-- Name: Medications Medications_pkey; Type: CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Medications"
    ADD CONSTRAINT "Medications_pkey" PRIMARY KEY (id);


--
-- Name: Patients Patients_pkey; Type: CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Patients"
    ADD CONSTRAINT "Patients_pkey" PRIMARY KEY (id);


--
-- Name: Prescriptions Prescriptions_pkey; Type: CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Prescriptions"
    ADD CONSTRAINT "Prescriptions_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Appointments Appointments_doctor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Appointments"
    ADD CONSTRAINT "Appointments_doctor_id_fkey" FOREIGN KEY (doctor_id) REFERENCES public."Doctors"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Appointments Appointments_patient_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Appointments"
    ADD CONSTRAINT "Appointments_patient_id_fkey" FOREIGN KEY (patient_id) REFERENCES public."Patients"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Doctors Doctors_department_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Doctors"
    ADD CONSTRAINT "Doctors_department_id_fkey" FOREIGN KEY (department_id) REFERENCES public."Departments"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Lab_results Lab_results_lab_test_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Lab_results"
    ADD CONSTRAINT "Lab_results_lab_test_id_fkey" FOREIGN KEY (lab_test_id) REFERENCES public."Lab_tests"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Lab_results Lab_results_patient_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Lab_results"
    ADD CONSTRAINT "Lab_results_patient_id_fkey" FOREIGN KEY (patient_id) REFERENCES public."Patients"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Prescriptions Prescriptions_doctor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Prescriptions"
    ADD CONSTRAINT "Prescriptions_doctor_id_fkey" FOREIGN KEY (doctor_id) REFERENCES public."Doctors"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Prescriptions Prescriptions_medication_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Prescriptions"
    ADD CONSTRAINT "Prescriptions_medication_id_fkey" FOREIGN KEY (medication_id) REFERENCES public."Medications"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Prescriptions Prescriptions_patient_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: boiler
--

ALTER TABLE ONLY public."Prescriptions"
    ADD CONSTRAINT "Prescriptions_patient_id_fkey" FOREIGN KEY (patient_id) REFERENCES public."Patients"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: boiler
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

