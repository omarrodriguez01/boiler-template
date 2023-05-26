import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const equipomedicoSeeder = async () => {
  const equipoMedico = await prisma.equipoMedico.createMany({
    data: [
      {
        nombre: "Monitor de signos vitales",
        descripcion:
          "Equipo médico para medir y monitorear los signos vitales del paciente",
        ubicacion_actual: "Sala de cuidados intensivos",
      },
      {
        nombre: "Bomba de infusión",
        descripcion:
          "Equipo médico para administrar de manera controlada y precisa medicamentos o líquidos al paciente",
        ubicacion_actual: "Quirófano 2",
      },
      {
        nombre: "Electrocardiógrafo",
        descripcion:
          "Equipo médico para registrar la actividad eléctrica del corazón",
        ubicacion_actual: "Sala de Cardiología",
      },
    ],
  });
  console.log({ equipoMedico });
};
