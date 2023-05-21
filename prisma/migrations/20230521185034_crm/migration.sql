-- CreateTable
CREATE TABLE "Archivos" (
    "ID" INTEGER NOT NULL,
    "Nombre" TEXT,
    "Path" TEXT,
    "ClienteFK" INTEGER NOT NULL,

    CONSTRAINT "Archivos_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "ID" INTEGER NOT NULL,
    "Nombre" TEXT,
    "Empresa" TEXT,
    "Contacto" TEXT,
    "EstatusFK" INTEGER NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Estatus" (
    "ID" INTEGER NOT NULL,
    "Estatus" TEXT,

    CONSTRAINT "Estatus_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Involucrados" (
    "ID" INTEGER NOT NULL,
    "Nombre" TEXT,
    "Puesto" TEXT,

    CONSTRAINT "Involucrados_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Tareas" (
    "ID" INTEGER NOT NULL,
    "Nombre" TEXT,
    "Descripcion" TEXT,
    "FechaLimite" TEXT,
    "InvolucradoFK" INTEGER NOT NULL,
    "ClienteFK" INTEGER NOT NULL,

    CONSTRAINT "Tareas_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "Archivos" ADD CONSTRAINT "Archivos_ClienteFK_fkey" FOREIGN KEY ("ClienteFK") REFERENCES "Cliente"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_EstatusFK_fkey" FOREIGN KEY ("EstatusFK") REFERENCES "Estatus"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tareas" ADD CONSTRAINT "Tareas_InvolucradoFK_fkey" FOREIGN KEY ("InvolucradoFK") REFERENCES "Involucrados"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tareas" ADD CONSTRAINT "Tareas_ClienteFK_fkey" FOREIGN KEY ("ClienteFK") REFERENCES "Cliente"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
