import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const citaSeeder = async () => {
  const cita = await prisma.cita.createMany({
    data: [
      {
        id_paciente: 1,
        id_doctor: 1,
        fecha_hora: new Date("2023-05-18"),
        duracion_estimada: 2,
      },
      {
        id_paciente: 2,
        id_doctor: 2,
        fecha_hora: new Date("2023-05-19"),
        duracion_estimada: 1,
      },
      {
        id_paciente: 3,
        id_doctor: 3,
        fecha_hora: new Date("2023-05-20"),
        duracion_estimada: 3,
      },
    ],
  });
  console.log({ cita });
};
