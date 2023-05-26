-- CreateTable
CREATE TABLE "Pelicula" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "genero" TEXT,
    "duracion" INTEGER NOT NULL,
    "sinopsis" TEXT,
    "rating" DOUBLE PRECISION,
    "fechaEstreno" TEXT,
    "paisOrigen" TEXT,
    "director" TEXT,
    "posterUrl" TEXT,

    CONSTRAINT "Pelicula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sala" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "capacidad" INTEGER NOT NULL,
    "tipo" TEXT,
    "descripcion" TEXT,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Funcion" (
    "id" SERIAL NOT NULL,
    "peliculaId" INTEGER NOT NULL,
    "salaId" INTEGER NOT NULL,
    "fechaHora" TIMESTAMP(3) NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Funcion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correoElectronico" TEXT NOT NULL,
    "telefono" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservacion" (
    "id" SERIAL NOT NULL,
    "funcionId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "cantidadTickets" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "fechaHora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reservacion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pelicula_id_key" ON "Pelicula"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Sala_id_key" ON "Sala"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Funcion_id_key" ON "Funcion"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_id_key" ON "Cliente"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_correoElectronico_key" ON "Cliente"("correoElectronico");

-- CreateIndex
CREATE UNIQUE INDEX "Reservacion_id_key" ON "Reservacion"("id");

-- AddForeignKey
ALTER TABLE "Funcion" ADD CONSTRAINT "Funcion_peliculaId_fkey" FOREIGN KEY ("peliculaId") REFERENCES "Pelicula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funcion" ADD CONSTRAINT "Funcion_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservacion" ADD CONSTRAINT "Reservacion_funcionId_fkey" FOREIGN KEY ("funcionId") REFERENCES "Funcion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservacion" ADD CONSTRAINT "Reservacion_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
