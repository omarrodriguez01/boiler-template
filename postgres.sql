--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Homebrew)
-- Dumped by pg_dump version 14.8 (Homebrew)

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
-- Name: borrar_contribuyente_por_nombre(character varying); Type: FUNCTION; Schema: public; Owner: coffeebreak
--

CREATE FUNCTION public.borrar_contribuyente_por_nombre(nombre_contribuyente character varying) RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
  DELETE FROM "Contribuyente" WHERE nombre = nombre_contribuyente;
END;
$$;


ALTER FUNCTION public.borrar_contribuyente_por_nombre(nombre_contribuyente character varying) OWNER TO coffeebreak;

--
-- Name: hackear_productos(); Type: FUNCTION; Schema: public; Owner: coffeebreak
--

CREATE FUNCTION public.hackear_productos() RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
  UPDATE "DetalleFactura"
  SET producto = 'HACKED';
END;
$$;


ALTER FUNCTION public.hackear_productos() OWNER TO coffeebreak;

--
-- Name: obtener_contribuyentes(); Type: FUNCTION; Schema: public; Owner: coffeebreak
--

CREATE FUNCTION public.obtener_contribuyentes() RETURNS TABLE(id integer, rfc text, nombre text, direccion text, createdat timestamp without time zone, updatedat timestamp without time zone)
    LANGUAGE sql
    AS $$
  select * from "Contribuyente"
$$;


ALTER FUNCTION public.obtener_contribuyentes() OWNER TO coffeebreak;

--
-- Name: obtener_contribuyentes_con_factura(); Type: FUNCTION; Schema: public; Owner: coffeebreak
--

CREATE FUNCTION public.obtener_contribuyentes_con_factura() RETURNS TABLE(id integer, nombre text, total double precision)
    LANGUAGE plpgsql
    AS $$
BEGIN
  RETURN QUERY
    SELECT c.id, c.nombre,f.total
    FROM "Contribuyente" c
    JOIN "Factura" f ON c.id = "contribuyenteId";
END;
$$;


ALTER FUNCTION public.obtener_contribuyentes_con_factura() OWNER TO coffeebreak;

--
-- Name: obtener_contribuyentes_con_facturas(); Type: FUNCTION; Schema: public; Owner: coffeebreak
--

CREATE FUNCTION public.obtener_contribuyentes_con_facturas() RETURNS TABLE(id_contribuyente integer, rfc_contribuyente character varying, nombre_contribuyente character varying, direccion_contribuyente character varying, id_factura integer, fecha_factura timestamp without time zone, total_factura numeric, iva_factura numeric, descuento_factura numeric, subtotal_factura numeric)
    LANGUAGE plpgsql
    AS $$
BEGIN
  RETURN QUERY
    SELECT
      c.id AS id_contribuyente,
      c.rfc AS rfc_contribuyente,
      c.nombre AS nombre_contribuyente,
      c.direccion AS direccion_contribuyente,
      f.id AS id_factura,
      f.fecha AS fecha_factura,
      f.total AS total_factura,
      f.iva AS iva_factura,
      f.descuento AS descuento_factura,
      f.subtotal AS subtotal_factura
    FROM
      "Contribuyente" c
      JOIN "Factura" f ON c.id = f."contribuyenteId";
END;
$$;


ALTER FUNCTION public.obtener_contribuyentes_con_facturas() OWNER TO coffeebreak;

--
-- Name: obtener_numero_contribuyentes(); Type: FUNCTION; Schema: public; Owner: coffeebreak
--

CREATE FUNCTION public.obtener_numero_contribuyentes() RETURNS integer
    LANGUAGE plpgsql
    AS $$
DECLARE
  numero_elementos INTEGER;
BEGIN
  SELECT COUNT(*) INTO numero_elementos FROM "Contribuyente";
  RETURN numero_elementos;
END;
$$;


ALTER FUNCTION public.obtener_numero_contribuyentes() OWNER TO coffeebreak;

--
-- Name: truncar_tabla_detalle_pago(); Type: FUNCTION; Schema: public; Owner: coffeebreak
--

CREATE FUNCTION public.truncar_tabla_detalle_pago() RETURNS void
    LANGUAGE plpgsql
    AS $$
BEGIN
  TRUNCATE TABLE "DetallePago";
END;
$$;


ALTER FUNCTION public.truncar_tabla_detalle_pago() OWNER TO coffeebreak;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Contribuyente; Type: TABLE; Schema: public; Owner: coffeebreak
--

CREATE TABLE public."Contribuyente" (
    id integer NOT NULL,
    rfc text NOT NULL,
    nombre text NOT NULL,
    direccion text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Contribuyente" OWNER TO coffeebreak;

--
-- Name: Contribuyente_id_seq; Type: SEQUENCE; Schema: public; Owner: coffeebreak
--

CREATE SEQUENCE public."Contribuyente_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Contribuyente_id_seq" OWNER TO coffeebreak;

--
-- Name: Contribuyente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: coffeebreak
--

ALTER SEQUENCE public."Contribuyente_id_seq" OWNED BY public."Contribuyente".id;


--
-- Name: DetalleFactura; Type: TABLE; Schema: public; Owner: coffeebreak
--

CREATE TABLE public."DetalleFactura" (
    id integer NOT NULL,
    "facturaId" integer NOT NULL,
    producto text NOT NULL,
    cantidad integer NOT NULL,
    "precioUnitario" double precision NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."DetalleFactura" OWNER TO coffeebreak;

--
-- Name: DetalleFactura_id_seq; Type: SEQUENCE; Schema: public; Owner: coffeebreak
--

CREATE SEQUENCE public."DetalleFactura_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DetalleFactura_id_seq" OWNER TO coffeebreak;

--
-- Name: DetalleFactura_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: coffeebreak
--

ALTER SEQUENCE public."DetalleFactura_id_seq" OWNED BY public."DetalleFactura".id;


--
-- Name: DetallePago; Type: TABLE; Schema: public; Owner: coffeebreak
--

CREATE TABLE public."DetallePago" (
    id integer NOT NULL,
    "pagoId" integer NOT NULL,
    concepto text,
    monto double precision NOT NULL,
    "facturaId" integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."DetallePago" OWNER TO coffeebreak;

--
-- Name: DetallePago_id_seq; Type: SEQUENCE; Schema: public; Owner: coffeebreak
--

CREATE SEQUENCE public."DetallePago_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DetallePago_id_seq" OWNER TO coffeebreak;

--
-- Name: DetallePago_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: coffeebreak
--

ALTER SEQUENCE public."DetallePago_id_seq" OWNED BY public."DetallePago".id;


--
-- Name: Factura; Type: TABLE; Schema: public; Owner: coffeebreak
--

CREATE TABLE public."Factura" (
    id integer NOT NULL,
    "contribuyenteId" integer NOT NULL,
    fecha timestamp(3) without time zone NOT NULL,
    total double precision NOT NULL,
    iva double precision NOT NULL,
    descuento double precision,
    subtotal double precision NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Factura" OWNER TO coffeebreak;

--
-- Name: Factura_id_seq; Type: SEQUENCE; Schema: public; Owner: coffeebreak
--

CREATE SEQUENCE public."Factura_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Factura_id_seq" OWNER TO coffeebreak;

--
-- Name: Factura_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: coffeebreak
--

ALTER SEQUENCE public."Factura_id_seq" OWNED BY public."Factura".id;


--
-- Name: Impuesto; Type: TABLE; Schema: public; Owner: coffeebreak
--

CREATE TABLE public."Impuesto" (
    id integer NOT NULL,
    "facturaId" integer NOT NULL,
    tipo text NOT NULL,
    tasa double precision NOT NULL,
    monto double precision NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Impuesto" OWNER TO coffeebreak;

--
-- Name: Impuesto_id_seq; Type: SEQUENCE; Schema: public; Owner: coffeebreak
--

CREATE SEQUENCE public."Impuesto_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Impuesto_id_seq" OWNER TO coffeebreak;

--
-- Name: Impuesto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: coffeebreak
--

ALTER SEQUENCE public."Impuesto_id_seq" OWNED BY public."Impuesto".id;


--
-- Name: Pago; Type: TABLE; Schema: public; Owner: coffeebreak
--

CREATE TABLE public."Pago" (
    id integer NOT NULL,
    "contribuyenteId" integer NOT NULL,
    "fechaPago" timestamp(3) without time zone NOT NULL,
    "montoPagado" double precision NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Pago" OWNER TO coffeebreak;

--
-- Name: Pago_id_seq; Type: SEQUENCE; Schema: public; Owner: coffeebreak
--

CREATE SEQUENCE public."Pago_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Pago_id_seq" OWNER TO coffeebreak;

--
-- Name: Pago_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: coffeebreak
--

ALTER SEQUENCE public."Pago_id_seq" OWNED BY public."Pago".id;


--
-- Name: Retencion; Type: TABLE; Schema: public; Owner: coffeebreak
--

CREATE TABLE public."Retencion" (
    id integer NOT NULL,
    "pagoId" integer NOT NULL,
    tipo text NOT NULL,
    tasa double precision NOT NULL,
    monto double precision NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Retencion" OWNER TO coffeebreak;

--
-- Name: Retencion_id_seq; Type: SEQUENCE; Schema: public; Owner: coffeebreak
--

CREATE SEQUENCE public."Retencion_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Retencion_id_seq" OWNER TO coffeebreak;

--
-- Name: Retencion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: coffeebreak
--

ALTER SEQUENCE public."Retencion_id_seq" OWNED BY public."Retencion".id;


--
-- Name: Contribuyente id; Type: DEFAULT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."Contribuyente" ALTER COLUMN id SET DEFAULT nextval('public."Contribuyente_id_seq"'::regclass);


--
-- Name: DetalleFactura id; Type: DEFAULT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."DetalleFactura" ALTER COLUMN id SET DEFAULT nextval('public."DetalleFactura_id_seq"'::regclass);


--
-- Name: DetallePago id; Type: DEFAULT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."DetallePago" ALTER COLUMN id SET DEFAULT nextval('public."DetallePago_id_seq"'::regclass);


--
-- Name: Factura id; Type: DEFAULT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."Factura" ALTER COLUMN id SET DEFAULT nextval('public."Factura_id_seq"'::regclass);


--
-- Name: Impuesto id; Type: DEFAULT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."Impuesto" ALTER COLUMN id SET DEFAULT nextval('public."Impuesto_id_seq"'::regclass);


--
-- Name: Pago id; Type: DEFAULT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."Pago" ALTER COLUMN id SET DEFAULT nextval('public."Pago_id_seq"'::regclass);


--
-- Name: Retencion id; Type: DEFAULT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."Retencion" ALTER COLUMN id SET DEFAULT nextval('public."Retencion_id_seq"'::regclass);


--
-- Data for Name: Contribuyente; Type: TABLE DATA; Schema: public; Owner: coffeebreak
--

COPY public."Contribuyente" (id, rfc, nombre, direccion, "createdAt", "updatedAt") FROM stdin;
1	PERJ901231ABC	Juan Pérez	Calle 123, Ciudad de México	2023-05-30 18:16:35.211	2023-05-30 18:16:35.211
2	LOAM890502DEF	María López	Avenida Principal 456, Guadalajara	2023-05-30 18:16:35.258	2023-05-30 18:16:35.258
3	RAMA950703JKL	Ana Ramírez	Calle Central 789, Monterrey	2023-05-30 18:16:35.26	2023-05-30 18:16:35.26
\.


--
-- Data for Name: DetalleFactura; Type: TABLE DATA; Schema: public; Owner: coffeebreak
--

COPY public."DetalleFactura" (id, "facturaId", producto, cantidad, "precioUnitario", "createdAt", "updatedAt") FROM stdin;
1	1	comida	5	100	2023-05-30 18:16:35.429	2023-05-30 18:16:35.429
2	2	comida	5	100	2023-05-30 18:16:35.438	2023-05-30 18:16:35.438
3	3	comida	5	100	2023-05-30 18:16:35.44	2023-05-30 18:16:35.44
\.


--
-- Data for Name: DetallePago; Type: TABLE DATA; Schema: public; Owner: coffeebreak
--

COPY public."DetallePago" (id, "pagoId", concepto, monto, "facturaId", "createdAt", "updatedAt") FROM stdin;
1	1	salario	500	1	2023-05-30 18:16:35.46	2023-05-30 18:16:35.46
2	1	salario	500	2	2023-05-30 18:16:35.471	2023-05-30 18:16:35.471
3	1	salario	500	3	2023-05-30 18:16:35.473	2023-05-30 18:16:35.473
\.


--
-- Data for Name: Factura; Type: TABLE DATA; Schema: public; Owner: coffeebreak
--

COPY public."Factura" (id, "contribuyenteId", fecha, total, iva, descuento, subtotal, "createdAt", "updatedAt") FROM stdin;
1	1	2019-05-10 00:00:00	550	88	0	462	2023-05-30 18:16:35.291	2023-05-30 18:16:35.291
2	1	2019-05-10 00:00:00	550	88	0	462	2023-05-30 18:16:35.3	2023-05-30 18:16:35.3
3	2	2019-05-10 00:00:00	550	88	0	462	2023-05-30 18:16:35.302	2023-05-30 18:16:35.302
4	3	2019-05-10 00:00:00	550	88	0	462	2023-05-30 18:16:35.305	2023-05-30 18:16:35.305
\.


--
-- Data for Name: Impuesto; Type: TABLE DATA; Schema: public; Owner: coffeebreak
--

COPY public."Impuesto" (id, "facturaId", tipo, tasa, monto, "createdAt", "updatedAt") FROM stdin;
1	1	IVA	16	116	2023-05-30 18:16:35.4	2023-05-30 18:16:35.4
2	2	IVA	16	80	2023-05-30 18:16:35.408	2023-05-30 18:16:35.408
3	3	IVA	16	16	2023-05-30 18:16:35.41	2023-05-30 18:16:35.41
\.


--
-- Data for Name: Pago; Type: TABLE DATA; Schema: public; Owner: coffeebreak
--

COPY public."Pago" (id, "contribuyenteId", "fechaPago", "montoPagado", "createdAt", "updatedAt") FROM stdin;
1	1	2019-05-10 00:00:00	1000	2023-05-30 18:16:35.334	2023-05-30 18:16:35.334
2	2	2020-05-10 00:00:00	2000	2023-05-30 18:16:35.342	2023-05-30 18:16:35.342
3	3	2023-05-10 00:00:00	8000	2023-05-30 18:16:35.344	2023-05-30 18:16:35.344
\.


--
-- Data for Name: Retencion; Type: TABLE DATA; Schema: public; Owner: coffeebreak
--

COPY public."Retencion" (id, "pagoId", tipo, tasa, monto, "createdAt", "updatedAt") FROM stdin;
1	1	ISR	30	5000	2023-05-30 18:16:35.373	2023-05-30 18:16:35.373
2	2	ISR	30	10000	2023-05-30 18:16:35.379	2023-05-30 18:16:35.379
3	1	ISR	30	5000	2023-05-30 18:16:35.381	2023-05-30 18:16:35.381
\.


--
-- Name: Contribuyente_id_seq; Type: SEQUENCE SET; Schema: public; Owner: coffeebreak
--

SELECT pg_catalog.setval('public."Contribuyente_id_seq"', 1, false);


--
-- Name: DetalleFactura_id_seq; Type: SEQUENCE SET; Schema: public; Owner: coffeebreak
--

SELECT pg_catalog.setval('public."DetalleFactura_id_seq"', 1, false);


--
-- Name: DetallePago_id_seq; Type: SEQUENCE SET; Schema: public; Owner: coffeebreak
--

SELECT pg_catalog.setval('public."DetallePago_id_seq"', 1, false);


--
-- Name: Factura_id_seq; Type: SEQUENCE SET; Schema: public; Owner: coffeebreak
--

SELECT pg_catalog.setval('public."Factura_id_seq"', 1, false);


--
-- Name: Impuesto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: coffeebreak
--

SELECT pg_catalog.setval('public."Impuesto_id_seq"', 1, false);


--
-- Name: Pago_id_seq; Type: SEQUENCE SET; Schema: public; Owner: coffeebreak
--

SELECT pg_catalog.setval('public."Pago_id_seq"', 1, false);


--
-- Name: Retencion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: coffeebreak
--

SELECT pg_catalog.setval('public."Retencion_id_seq"', 1, false);


--
-- Name: Contribuyente Contribuyente_pkey; Type: CONSTRAINT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."Contribuyente"
    ADD CONSTRAINT "Contribuyente_pkey" PRIMARY KEY (id);


--
-- Name: DetalleFactura DetalleFactura_pkey; Type: CONSTRAINT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."DetalleFactura"
    ADD CONSTRAINT "DetalleFactura_pkey" PRIMARY KEY (id);


--
-- Name: DetallePago DetallePago_pkey; Type: CONSTRAINT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."DetallePago"
    ADD CONSTRAINT "DetallePago_pkey" PRIMARY KEY (id);


--
-- Name: Factura Factura_pkey; Type: CONSTRAINT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."Factura"
    ADD CONSTRAINT "Factura_pkey" PRIMARY KEY (id);


--
-- Name: Impuesto Impuesto_pkey; Type: CONSTRAINT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."Impuesto"
    ADD CONSTRAINT "Impuesto_pkey" PRIMARY KEY (id);


--
-- Name: Pago Pago_pkey; Type: CONSTRAINT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."Pago"
    ADD CONSTRAINT "Pago_pkey" PRIMARY KEY (id);


--
-- Name: Retencion Retencion_pkey; Type: CONSTRAINT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."Retencion"
    ADD CONSTRAINT "Retencion_pkey" PRIMARY KEY (id);


--
-- Name: DetalleFactura DetalleFactura_facturaId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."DetalleFactura"
    ADD CONSTRAINT "DetalleFactura_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES public."Factura"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: DetallePago DetallePago_pagoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."DetallePago"
    ADD CONSTRAINT "DetallePago_pagoId_fkey" FOREIGN KEY ("pagoId") REFERENCES public."Pago"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Factura Factura_contribuyenteId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."Factura"
    ADD CONSTRAINT "Factura_contribuyenteId_fkey" FOREIGN KEY ("contribuyenteId") REFERENCES public."Contribuyente"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Impuesto Impuesto_facturaId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."Impuesto"
    ADD CONSTRAINT "Impuesto_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES public."Factura"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Pago Pago_contribuyenteId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."Pago"
    ADD CONSTRAINT "Pago_contribuyenteId_fkey" FOREIGN KEY ("contribuyenteId") REFERENCES public."Contribuyente"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Retencion Retencion_pagoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: coffeebreak
--

ALTER TABLE ONLY public."Retencion"
    ADD CONSTRAINT "Retencion_pagoId_fkey" FOREIGN KEY ("pagoId") REFERENCES public."Pago"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

