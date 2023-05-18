-- CreateTable
CREATE TABLE "Autor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Libro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor_id" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "Libro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Existencia" (
    "id" SERIAL NOT NULL,
    "libro_id" INTEGER NOT NULL,
    "ubicacion" TEXT NOT NULL,

    CONSTRAINT "Existencia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Libro" ADD CONSTRAINT "Libro_autor_id_fkey" FOREIGN KEY ("autor_id") REFERENCES "Autor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Existencia" ADD CONSTRAINT "Existencia_libro_id_fkey" FOREIGN KEY ("libro_id") REFERENCES "Libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
