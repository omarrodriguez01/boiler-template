-- CreateTable
CREATE TABLE "Autor" (
    "autor_id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "nacionalidad" TEXT,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("autor_id")
);

-- CreateTable
CREATE TABLE "Editorial" (
    "editorial_id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Editorial_pkey" PRIMARY KEY ("editorial_id")
);

-- CreateTable
CREATE TABLE "Libro" (
    "libro_id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "editorial_id" INTEGER NOT NULL,
    "genero_id" INTEGER NOT NULL,
    "autor_id" INTEGER NOT NULL,

    CONSTRAINT "Libro_pkey" PRIMARY KEY ("libro_id")
);

-- CreateTable
CREATE TABLE "Copia" (
    "copia_id" SERIAL NOT NULL,
    "libro_id" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Copia_pkey" PRIMARY KEY ("copia_id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "pedido_id" SERIAL NOT NULL,
    "copia_id" INTEGER NOT NULL,
    "fecha_pedido" TIMESTAMP(3) NOT NULL,
    "fecha_entrega" TIMESTAMP(3),

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("pedido_id")
);

-- AddForeignKey
ALTER TABLE "Libro" ADD CONSTRAINT "Libro_editorial_id_fkey" FOREIGN KEY ("editorial_id") REFERENCES "Editorial"("editorial_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Libro" ADD CONSTRAINT "Libro_autor_id_fkey" FOREIGN KEY ("autor_id") REFERENCES "Autor"("autor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Copia" ADD CONSTRAINT "Copia_libro_id_fkey" FOREIGN KEY ("libro_id") REFERENCES "Libro"("libro_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_copia_id_fkey" FOREIGN KEY ("copia_id") REFERENCES "Copia"("copia_id") ON DELETE RESTRICT ON UPDATE CASCADE;
