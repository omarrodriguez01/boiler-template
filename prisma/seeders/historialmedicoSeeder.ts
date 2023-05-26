import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const historialmedicoSeeder = async () => {
  const historialMedico = await prisma.historialMedico.createMany({
    data: [
      {
        id_paciente: 1,
        diagnostico: "Dolor garganta",
        tratamiento: "Reposo",
        medicamentos: "Paracetamol",
      },
      {
        id_paciente: 2,
        diagnostico: "Fiebre",
        tratamiento: "Hidratación",
        medicamentos: "Ibuprofeno",
      },
      {
        id_paciente: 3,
        diagnostico: "Esguince de tobillo",
        tratamiento: "Vendaje y reposo",
        medicamentos: "Antiinflamatorios",
      },
    ],
  });
  console.log({ historialMedico });
};
