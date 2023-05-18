import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const admisionpacienteSeeder = async () => {
  const admisionPaciente = await prisma.admisionPaciente.createMany({
    data: [
      {
        id_paciente: 1,
        id_cama: 1,
        fecha_ingreso: new Date("2023-05-18"),
        fecha_alta: new Date("2023-05-18"),
      },
      {
        id_paciente: 2,
        id_cama: 2,
        fecha_ingreso: new Date("2023-05-19"),
        fecha_alta: new Date("2023-05-20"),
      },
      {
        id_paciente: 3,
        id_cama: 3,
        fecha_ingreso: new Date("2023-05-20"),
        fecha_alta: new Date("2023-05-22"),
      },
    ],
  });
  console.log({ admisionPaciente });
};
