import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const existenciaSeeder = async () => {
  const existencia = await prisma.existencia.create({
    data: {
      id: 4,
      libro_id: 6,
      ubicacion: "T-U 9",
    },
  });
  console.log({ existencia });

  const existencia2 = await prisma.existencia.create({
    data: {
      id: 5,
      libro_id: 7,
      ubicacion: "L-N 8",
    },
  });
  console.log({ existencia });

  const existencia3 = await prisma.existencia.create({
    data: {
      id: 6,
      libro_id: 8,
      ubicacion: 'G-I 6',
    },
  })
console.log({ existencia })
};
