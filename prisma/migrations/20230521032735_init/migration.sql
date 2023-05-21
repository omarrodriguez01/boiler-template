-- CreateTable
CREATE TABLE "Pelicula" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "genero" TEXT NOT NULL,

    CONSTRAINT "Pelicula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sala" (
    "id" TEXT NOT NULL,
    "numero" TEXT NOT NULL,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funcion" (
    "id" TEXT NOT NULL,
    "fecha" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "idPelicula" INTEGER NOT NULL,
    "idSala" INTEGER NOT NULL,
    "precio" INTEGER NOT NULL,
    "cupo" INTEGER NOT NULL,

    CONSTRAINT "Funcion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boleta" (
    "id" TEXT NOT NULL,
    "idFuncion" INTEGER NOT NULL,
    "asiento" INTEGER NOT NULL,

    CONSTRAINT "Boleta_pkey" PRIMARY KEY ("id")
);
