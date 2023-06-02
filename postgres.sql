--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Debian 14.8-1.pgdg110+1)
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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Boleta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Boleta" (
    id text NOT NULL,
    "idFuncion" integer NOT NULL,
    asiento integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Boleta" OWNER TO postgres;

--
-- Name: Funcion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Funcion" (
    id text NOT NULL,
    fecha text NOT NULL,
    hora text NOT NULL,
    "idPelicula" integer NOT NULL,
    precio integer NOT NULL,
    cupo integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "salaId" text NOT NULL
);


ALTER TABLE public."Funcion" OWNER TO postgres;

--
-- Name: Pelicula; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Pelicula" (
    id text NOT NULL,
    titulo text NOT NULL,
    genero text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Pelicula" OWNER TO postgres;

--
-- Name: Sala; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Sala" (
    id text NOT NULL,
    numero text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Sala" OWNER TO postgres;

--
-- Data for Name: Boleta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Boleta" (id, "idFuncion", asiento, "createdAt", "updatedAt") FROM stdin;
aafbaf80-6cff-4aeb-a1d3-567283959f14	1	232	2023-06-02 17:33:16.68	2023-06-02 17:33:16.68
0eab4e52-3d39-4172-8784-f85bc22fc3b9	5	158	2023-06-02 17:33:16.68	2023-06-02 17:33:16.68
bb4b12b2-1abd-4999-aa04-27b0ddefa5c4	7	34	2023-06-02 17:33:16.68	2023-06-02 17:33:16.68
\.


--
-- Data for Name: Funcion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Funcion" (id, fecha, hora, "idPelicula", precio, cupo, "createdAt", "updatedAt", "salaId") FROM stdin;
c389e396-7509-4940-bda1-06612cb1960e	2/12/2023	7:30	3	85	400	2023-06-02 17:34:05.353	2023-06-02 17:34:05.353	343a7445-e267-442a-b424-fdceb8a60eed
4aaa25ae-c50b-4388-9c67-cd829362f2de	9/12/2021	8:10	2	55	150	2023-06-02 17:34:05.353	2023-06-02 17:34:05.353	343a7445-e267-442a-b424-fdceb8a60eed
a12cea06-24de-49cf-99ad-6bd5dbe03cb4	1/07/2023	2:35	5	119	230	2023-06-02 17:34:05.353	2023-06-02 17:34:05.353	343a7445-e267-442a-b424-fdceb8a60eed
\.


--
-- Data for Name: Pelicula; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pelicula" (id, titulo, genero, "createdAt", "updatedAt") FROM stdin;
c6ecdf9f-14e0-4f1b-a8ce-c72693a327e7	La Sirenita	terror	2023-06-02 17:32:56.95	2023-06-02 17:32:56.95
21af076d-4982-40ea-be14-373fd309c0b4	Avengers	terror	2023-06-02 17:32:56.95	2023-06-02 17:32:56.95
c6e7b3af-7ca0-48e4-a279-d7079cd400df	El amor invencible	terror	2023-06-02 17:32:56.95	2023-06-02 17:32:56.95
\.


--
-- Data for Name: Sala; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Sala" (id, numero, "createdAt", "updatedAt") FROM stdin;
b0b54f51-ea3c-4cd0-846e-78c7bfe8e9af	1	2023-06-02 17:33:06.17	2023-06-02 17:33:06.17
36353d57-b388-47d4-8ad8-daaf15349bcc	2	2023-06-02 17:33:06.17	2023-06-02 17:33:06.17
343a7445-e267-442a-b424-fdceb8a60eed	3	2023-06-02 17:33:06.17	2023-06-02 17:33:06.17
\.


--
-- Name: Boleta Boleta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Boleta"
    ADD CONSTRAINT "Boleta_pkey" PRIMARY KEY (id);


--
-- Name: Funcion Funcion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Funcion"
    ADD CONSTRAINT "Funcion_pkey" PRIMARY KEY (id);


--
-- Name: Pelicula Pelicula_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pelicula"
    ADD CONSTRAINT "Pelicula_pkey" PRIMARY KEY (id);


--
-- Name: Sala Sala_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Sala"
    ADD CONSTRAINT "Sala_pkey" PRIMARY KEY (id);


--
-- Name: Funcion Funcion_salaId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Funcion"
    ADD CONSTRAINT "Funcion_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES public."Sala"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

