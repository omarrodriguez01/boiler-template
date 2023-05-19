-- CreateTable
CREATE TABLE "Pelicula" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "Fecha" INTEGER NOT NULL,
    "directorId" INTEGER NOT NULL,

    CONSTRAINT "Pelicula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Director" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "nacionalidad" TEXT NOT NULL,

    CONSTRAINT "Director_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cine" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,

    CONSTRAINT "Cine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boleto" (
    "id" SERIAL NOT NULL,
    "peliculaId" INTEGER NOT NULL,
    "cineId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Boleto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pelicula" ADD CONSTRAINT "Pelicula_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "Director"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boleto" ADD CONSTRAINT "Boleto_peliculaId_fkey" FOREIGN KEY ("peliculaId") REFERENCES "Pelicula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boleto" ADD CONSTRAINT "Boleto_cineId_fkey" FOREIGN KEY ("cineId") REFERENCES "Cine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boleto" ADD CONSTRAINT "Boleto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
