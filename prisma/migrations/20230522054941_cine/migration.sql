-- CreateTable
CREATE TABLE "Peliculas" (
    "id" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "duracion" TEXT NOT NULL,
    "sinopsis" TEXT,

    CONSTRAINT "Peliculas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Salas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "capacidad" INTEGER NOT NULL,

    CONSTRAINT "Salas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funciones" (
    "id" INTEGER NOT NULL,
    "fechaHora" TIMESTAMP(3) NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "idPelicula" INTEGER NOT NULL,
    "idSala" INTEGER NOT NULL,

    CONSTRAINT "Funciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "correoElec" TEXT NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservas" (
    "id" INTEGER NOT NULL,
    "cantidadEntradas" INTEGER NOT NULL,
    "idFuncion" INTEGER NOT NULL,
    "idUsuario" INTEGER NOT NULL,

    CONSTRAINT "Reservas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuscarPelicula" (
    "id" INTEGER NOT NULL,
    "terminoBusqueda" TEXT NOT NULL,
    "fechaBusqueda" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BuscarPelicula_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Funciones" ADD CONSTRAINT "Funciones_idPelicula_fkey" FOREIGN KEY ("idPelicula") REFERENCES "Peliculas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funciones" ADD CONSTRAINT "Funciones_idSala_fkey" FOREIGN KEY ("idSala") REFERENCES "Salas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservas" ADD CONSTRAINT "Reservas_idFuncion_fkey" FOREIGN KEY ("idFuncion") REFERENCES "Funciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservas" ADD CONSTRAINT "Reservas_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
