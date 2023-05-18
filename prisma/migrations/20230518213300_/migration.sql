-- CreateTable
CREATE TABLE "Paciente" (
    "id_paciente" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "genero" TEXT NOT NULL,
    "telefono" TEXT,
    "correo_electronico" TEXT,
    "direccion" TEXT,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id_paciente")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id_doctor" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,
    "telefono" TEXT,
    "correo_electronico" TEXT,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id_doctor")
);

-- CreateTable
CREATE TABLE "Enfermera" (
    "id_enfermera" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT,
    "correo_electronico" TEXT,

    CONSTRAINT "Enfermera_pkey" PRIMARY KEY ("id_enfermera")
);

-- CreateTable
CREATE TABLE "Cita" (
    "id_cita" SERIAL NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "id_doctor" INTEGER NOT NULL,
    "fecha_hora" TIMESTAMP(3) NOT NULL,
    "duracion_estimada" INTEGER NOT NULL,

    CONSTRAINT "Cita_pkey" PRIMARY KEY ("id_cita")
);

-- CreateTable
CREATE TABLE "HistorialMedico" (
    "id_historial" SERIAL NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "diagnostico" TEXT NOT NULL,
    "tratamiento" TEXT,
    "medicamentos" TEXT,

    CONSTRAINT "HistorialMedico_pkey" PRIMARY KEY ("id_historial")
);

-- CreateTable
CREATE TABLE "Cama" (
    "id_cama" SERIAL NOT NULL,
    "numero_cama" INTEGER NOT NULL,
    "habitacion" TEXT NOT NULL,
    "ocupada" BOOLEAN NOT NULL,

    CONSTRAINT "Cama_pkey" PRIMARY KEY ("id_cama")
);

-- CreateTable
CREATE TABLE "AdmisionPaciente" (
    "id_admision" SERIAL NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "id_cama" INTEGER NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_alta" TIMESTAMP(3),

    CONSTRAINT "AdmisionPaciente_pkey" PRIMARY KEY ("id_admision")
);

-- CreateTable
CREATE TABLE "EquipoMedico" (
    "id_equipo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "ubicacion_actual" TEXT NOT NULL,

    CONSTRAINT "EquipoMedico_pkey" PRIMARY KEY ("id_equipo")
);

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente"("id_paciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_id_doctor_fkey" FOREIGN KEY ("id_doctor") REFERENCES "Doctor"("id_doctor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistorialMedico" ADD CONSTRAINT "HistorialMedico_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente"("id_paciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdmisionPaciente" ADD CONSTRAINT "AdmisionPaciente_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente"("id_paciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdmisionPaciente" ADD CONSTRAINT "AdmisionPaciente_id_cama_fkey" FOREIGN KEY ("id_cama") REFERENCES "Cama"("id_cama") ON DELETE RESTRICT ON UPDATE CASCADE;
