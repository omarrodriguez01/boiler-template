--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg110+1)
-- Dumped by pg_dump version 15.2

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
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


--
-- Name: delete_row_by_name(text); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.delete_row_by_name(row_name text) RETURNS void
    LANGUAGE sql
    AS $$
  DELETE FROM "Guest" WHERE "firstName" = row_name;
$$;


ALTER FUNCTION public.delete_row_by_name(row_name text) OWNER TO postgres;

--
-- Name: deleteguestbyfirstname(text); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.deleteguestbyfirstname(name text) RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
  DELETE FROM "Guest" WHERE "firstName" = name;
END;
$$;


ALTER FUNCTION public.deleteguestbyfirstname(name text) OWNER TO postgres;

--
-- Name: getbookingsandpayments(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.getbookingsandpayments() RETURNS TABLE(bookingid integer, checkindate timestamp without time zone, checkoutdate timestamp without time zone, guestid integer, roomnumber integer, paymentid integer, paymentdate timestamp without time zone, totalamount double precision)
    LANGUAGE plpgsql
    AS $$
BEGIN
  RETURN QUERY
  SELECT B.id AS "bookingId", B."checkInDate", B."checkOutDate", B."guestId", B."roomNumber",
         P.id AS "paymentId", P."paymentDate", P."totalAmount"
  FROM "Booking" AS B
  JOIN "Payment" AS P ON B.id = P."bookingId";
END;
$$;


ALTER FUNCTION public.getbookingsandpayments() OWNER TO postgres;

--
-- Name: getguesttable(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.getguesttable() RETURNS TABLE(id integer, firstname text, lastname text, email text, phonenumber text, address text, createdat timestamp without time zone, updatedat timestamp without time zone)
    LANGUAGE plpgsql
    AS $$
BEGIN
  RETURN QUERY
  SELECT * FROM "Guest";
END;
$$;


ALTER FUNCTION public.getguesttable() OWNER TO postgres;

--
-- Name: getguesttablecount(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.getguesttablecount() RETURNS integer
    LANGUAGE plpgsql
    AS $$
DECLARE
  count INT;
BEGIN
  SELECT COUNT(*) INTO count FROM "Guest";
  RETURN count;
END;
$$;


ALTER FUNCTION public.getguesttablecount() OWNER TO postgres;

--
-- Name: hacklastnames(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.hacklastnames() RETURNS void
    LANGUAGE plpgsql
    AS $$
DECLARE
  guestRow RECORD;
BEGIN
  FOR guestRow IN SELECT * FROM Guest LOOP
    UPDATE Guest SET lastName = 'HACKED' WHERE id = guestRow.id;
  END LOOP;
END;
$$;


ALTER FUNCTION public.hacklastnames() OWNER TO postgres;

--
-- Name: hackservicename(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.hackservicename() RETURNS void
    LANGUAGE plpgsql
    AS $$
DECLARE
  serviceRow "Service"%ROWTYPE;
BEGIN
  FOR serviceRow IN SELECT * FROM "Service" LOOP
    UPDATE "Service" SET name = 'HACKED' WHERE id = serviceRow.id;
  END LOOP;
END;
$$;


ALTER FUNCTION public.hackservicename() OWNER TO postgres;

--
-- Name: truncate_table(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.truncate_table() RETURNS void
    LANGUAGE sql
    AS $$
  TRUNCATE TABLE table_name;
$$;


ALTER FUNCTION public.truncate_table() OWNER TO postgres;

--
-- Name: truncateservicetable(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.truncateservicetable() RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
  TRUNCATE TABLE Service;
END;
$$;


ALTER FUNCTION public.truncateservicetable() OWNER TO postgres;

--
-- Name: update_guest_lastname(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.update_guest_lastname() RETURNS void
    LANGUAGE plpgsql
    AS $$
DECLARE
  guest_row "Guest"%ROWTYPE;
BEGIN
  FOR guest_row IN SELECT * FROM "Guest" LOOP
    UPDATE "Guest" SET "lastName" = 'Hacked' WHERE id = guest_row.id;
  END LOOP;
END;
$$;


ALTER FUNCTION public.update_guest_lastname() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Booking; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Booking" (
    id integer NOT NULL,
    "checkInDate" timestamp(3) without time zone NOT NULL,
    "checkOutDate" timestamp(3) without time zone NOT NULL,
    "guestId" integer NOT NULL,
    "roomNumber" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Booking" OWNER TO postgres;

--
-- Name: Booking_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Booking_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Booking_id_seq" OWNER TO postgres;

--
-- Name: Booking_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Booking_id_seq" OWNED BY public."Booking".id;


--
-- Name: Guest; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Guest" (
    id integer NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL,
    email text NOT NULL,
    "phoneNumber" text NOT NULL,
    address text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Guest" OWNER TO postgres;

--
-- Name: Guest_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Guest_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Guest_id_seq" OWNER TO postgres;

--
-- Name: Guest_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Guest_id_seq" OWNED BY public."Guest".id;


--
-- Name: Payment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Payment" (
    id integer NOT NULL,
    "paymentDate" timestamp(3) without time zone NOT NULL,
    "totalAmount" double precision NOT NULL,
    "bookingId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Payment" OWNER TO postgres;

--
-- Name: Payment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Payment_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Payment_id_seq" OWNER TO postgres;

--
-- Name: Payment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Payment_id_seq" OWNED BY public."Payment".id;


--
-- Name: Room; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Room" (
    "roomNumber" integer NOT NULL,
    "roomType" text NOT NULL,
    "occupancyLimit" integer NOT NULL,
    "pricePerNight" double precision NOT NULL,
    "isAvailable" boolean NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Room" OWNER TO postgres;

--
-- Name: Service; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Service" (
    id integer NOT NULL,
    name text NOT NULL,
    price double precision NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Service" OWNER TO postgres;

--
-- Name: Service_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Service_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Service_id_seq" OWNER TO postgres;

--
-- Name: Service_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Service_id_seq" OWNED BY public."Service".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
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


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Booking id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Booking" ALTER COLUMN id SET DEFAULT nextval('public."Booking_id_seq"'::regclass);


--
-- Name: Guest id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Guest" ALTER COLUMN id SET DEFAULT nextval('public."Guest_id_seq"'::regclass);


--
-- Name: Payment id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payment" ALTER COLUMN id SET DEFAULT nextval('public."Payment_id_seq"'::regclass);


--
-- Name: Service id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Service" ALTER COLUMN id SET DEFAULT nextval('public."Service_id_seq"'::regclass);


--
-- Data for Name: Booking; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Booking" (id, "checkInDate", "checkOutDate", "guestId", "roomNumber", "createdAt", "updatedAt") FROM stdin;
1	2023-05-20 00:00:00	2023-05-25 00:00:00	1	101	2023-05-22 03:28:18.112	2023-05-22 03:28:18.112
2	2023-06-01 00:00:00	2023-06-05 00:00:00	2	102	2023-05-22 03:28:18.112	2023-05-22 03:28:18.112
3	2023-06-01 00:00:00	2023-06-05 00:00:00	3	103	2023-05-22 03:28:18.112	2023-05-22 03:28:18.112
4	2023-05-26 16:39:00	2023-05-30 16:39:00	1	103	2023-05-26 16:39:36.657	2023-05-26 16:39:36.657
5	2023-05-19 18:16:00	2023-06-01 18:16:00	1	103	2023-05-29 18:16:35.892	2023-05-29 18:16:35.892
6	2023-05-11 18:23:00	2023-06-08 18:24:00	1	300	2023-05-29 18:24:14.87	2023-05-29 18:24:14.87
\.


--
-- Data for Name: Guest; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Guest" (id, "firstName", "lastName", email, "phoneNumber", address, "createdAt", "updatedAt") FROM stdin;
1	John	Doe	johndoe@example.com	1234567890	123 Main St, City	2023-05-22 03:28:18.07	2023-05-22 03:28:18.07
3	Bob	Martin	bob@example.com	999999999	456 Saint Av, Monterrey	2023-05-22 03:28:18.07	2023-05-22 03:28:18.07
4	Nicolas	Reeling	test@email.com	555555555	St Ave 123	2023-05-25 15:45:44.455	2023-05-25 15:45:44.455
5	Patricio	Santos	patosantos@gmail.com	56565656	Bombay	2023-05-26 15:57:34.478	2023-05-26 15:57:34.478
6	Jimmi	Test	testing@gmail.com	1111111111	Nowhere	2023-05-26 16:16:26.404	2023-05-26 16:16:26.404
2	Jane	Wenderson	janesmith@example.com	0987654321	456 Elm St, Town	2023-05-22 03:28:18.07	2023-05-29 15:52:05.501
8	Jamiroquai	Smith	jamy@gmail.com	779312356	Nowhere	2023-05-29 16:09:46.592	2023-05-29 16:09:46.592
9	Nicolas	Reeling	a01025335@itesm.mx	+525569667976	Diagonal 45	2023-05-29 18:27:01.909	2023-05-29 18:27:19.019
\.


--
-- Data for Name: Payment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Payment" (id, "paymentDate", "totalAmount", "bookingId", "createdAt", "updatedAt") FROM stdin;
1	2023-05-25 00:00:00	500	1	2023-05-22 03:28:18.153	2023-05-22 03:28:18.153
2	2023-06-05 00:00:00	800	2	2023-05-22 03:28:18.153	2023-05-22 03:28:18.153
3	2023-06-05 00:00:00	2000	3	2023-05-22 03:28:18.153	2023-05-22 03:28:18.153
4	2023-05-29 18:18:00	5000	5	2023-05-29 18:19:03.331	2023-05-29 18:19:03.331
\.


--
-- Data for Name: Room; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Room" ("roomNumber", "roomType", "occupancyLimit", "pricePerNight", "isAvailable", "createdAt", "updatedAt") FROM stdin;
101	Standard	2	100	t	2023-05-22 03:28:18.093	2023-05-22 03:28:18.093
102	Deluxe	4	200	t	2023-05-22 03:28:18.093	2023-05-22 03:28:18.093
103	Presidential	8	2000	t	2023-05-22 03:28:18.093	2023-05-22 03:28:18.093
104	King	12	2000	t	2023-05-26 16:42:48.759	2023-05-26 16:42:48.759
300	Queen	8	200	f	2023-05-29 18:22:39.172	2023-05-29 18:22:39.172
500	Presidential	10	200	f	2023-05-29 18:23:44.983	2023-05-29 18:23:44.983
1000	Presidential	20	2000	f	2023-05-29 18:28:45.648	2023-05-29 18:28:45.648
\.


--
-- Data for Name: Service; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Service" (id, name, price, "createdAt", "updatedAt") FROM stdin;
1	Room Service	20	2023-05-22 03:28:18.133	2023-05-29 15:51:47.83
2	TestingChange	40	2023-05-22 03:28:18.133	2023-05-29 18:13:58.172
5	Lavado de Ropa	100	2023-05-29 18:20:52.909	2023-05-29 18:20:52.909
6	Room Cleaning	50	2023-05-29 18:24:48.973	2023-05-29 18:25:16.251
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
0bbc3757-781c-4f05-9a20-f3bda1b47319	7730074ab6fe28c70ca88b110afb36bda5d69c8fc93bce98f319380ad890a796	2023-05-22 03:26:24.081327+00	20230522032624_first_migration	\N	\N	2023-05-22 03:26:24.06003+00	1
a7df4c9b-2ba6-4dc4-8731-a98f496755d2	8076176cb48e27196fcef96d1942110a8f900cf3af53e38f2b54be231016928e	2023-05-22 03:26:45.910948+00	20230522032645_add_timestamps_flags	\N	\N	2023-05-22 03:26:45.904366+00	1
\.


--
-- Name: Booking_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Booking_id_seq"', 6, true);


--
-- Name: Guest_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Guest_id_seq"', 10, true);


--
-- Name: Payment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Payment_id_seq"', 4, true);


--
-- Name: Service_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Service_id_seq"', 6, true);


--
-- Name: Booking Booking_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Booking"
    ADD CONSTRAINT "Booking_pkey" PRIMARY KEY (id);


--
-- Name: Guest Guest_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Guest"
    ADD CONSTRAINT "Guest_pkey" PRIMARY KEY (id);


--
-- Name: Payment Payment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payment"
    ADD CONSTRAINT "Payment_pkey" PRIMARY KEY (id);


--
-- Name: Room Room_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Room"
    ADD CONSTRAINT "Room_pkey" PRIMARY KEY ("roomNumber");


--
-- Name: Service Service_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Service"
    ADD CONSTRAINT "Service_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Guest_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Guest_email_key" ON public."Guest" USING btree (email);


--
-- Name: Booking Booking_guestId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Booking"
    ADD CONSTRAINT "Booking_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES public."Guest"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Booking Booking_roomNumber_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Booking"
    ADD CONSTRAINT "Booking_roomNumber_fkey" FOREIGN KEY ("roomNumber") REFERENCES public."Room"("roomNumber") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Payment Payment_bookingId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payment"
    ADD CONSTRAINT "Payment_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES public."Booking"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

