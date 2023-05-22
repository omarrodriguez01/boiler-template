-- CreateTable
CREATE TABLE "Peliculas" (
    "idPelicula" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "idGenero" INTEGER NOT NULL,

    CONSTRAINT "Peliculas_pkey" PRIMARY KEY ("idPelicula")
);

-- CreateTable
CREATE TABLE "Funciones" (
    "idFuncion" SERIAL NOT NULL,
    "idPelicula" INTEGER NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "idSala" INTEGER NOT NULL,

    CONSTRAINT "Funciones_pkey" PRIMARY KEY ("idFuncion")
);

-- CreateTable
CREATE TABLE "Salas" (
    "idSala" SERIAL NOT NULL,
    "idCategoria" INTEGER NOT NULL,
    "numSala" INTEGER NOT NULL,
    "capacidad" INTEGER NOT NULL,

    CONSTRAINT "Salas_pkey" PRIMARY KEY ("idSala")
);

-- CreateTable
CREATE TABLE "Generos" (
    "idGenero" SERIAL NOT NULL,
    "genero" TEXT NOT NULL,

    CONSTRAINT "Generos_pkey" PRIMARY KEY ("idGenero")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "idCategoria" SERIAL NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("idCategoria")
);

-- AddForeignKey
ALTER TABLE "Peliculas" ADD CONSTRAINT "Peliculas_idGenero_fkey" FOREIGN KEY ("idGenero") REFERENCES "Generos"("idGenero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funciones" ADD CONSTRAINT "Funciones_idPelicula_fkey" FOREIGN KEY ("idPelicula") REFERENCES "Peliculas"("idPelicula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funciones" ADD CONSTRAINT "Funciones_idSala_fkey" FOREIGN KEY ("idSala") REFERENCES "Salas"("idSala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Salas" ADD CONSTRAINT "Salas_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categorias"("idCategoria") ON DELETE RESTRICT ON UPDATE CASCADE;
