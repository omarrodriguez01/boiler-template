-- CreateTable
CREATE TABLE "Libro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "fechaPublicacion" INTEGER NOT NULL,
    "disponible" BOOLEAN NOT NULL,

    CONSTRAINT "Libro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Autor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "biografia" TEXT NOT NULL,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Miembros" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "estatusMembresia" TEXT NOT NULL,

    CONSTRAINT "Miembros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prestamos" (
    "id" SERIAL NOT NULL,
    "fechaPrestamo" TIMESTAMP(3) NOT NULL,
    "fechaDevolucion" TIMESTAMP(3) NOT NULL,
    "miembroId" INTEGER NOT NULL,
    "libroId" INTEGER NOT NULL,

    CONSTRAINT "Prestamos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genero" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Genero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibroGenero" (
    "libroId" INTEGER NOT NULL,
    "generoId" INTEGER NOT NULL,

    CONSTRAINT "LibroGenero_pkey" PRIMARY KEY ("libroId","generoId")
);

-- AddForeignKey
ALTER TABLE "Prestamos" ADD CONSTRAINT "Prestamos_miembroId_fkey" FOREIGN KEY ("miembroId") REFERENCES "Miembros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prestamos" ADD CONSTRAINT "Prestamos_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "Libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibroGenero" ADD CONSTRAINT "LibroGenero_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "Libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibroGenero" ADD CONSTRAINT "LibroGenero_generoId_fkey" FOREIGN KEY ("generoId") REFERENCES "Genero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
