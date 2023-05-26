import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const camaSeeder = async () => {
  const cama = await prisma.cama.createMany({
    data: [
      {
        numero_cama: 21,
        habitacion: "29-B",
        ocupada: true,
      },
      {
        numero_cama: 15,
        habitacion: "17-A",
        ocupada: true,
      },
      {
        numero_cama: 9,
        habitacion: "12-C",
        ocupada: true,
      },
    ],
  });
  console.log({ cama });
};
