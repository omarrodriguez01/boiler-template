import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const librosSeeder = async () => {
  const libro = await prisma.libro.create({
    data: {
      id: 6,
      titulo: "Trono de Cristal",
      autor_id: 21,
      stock: 20,
    },
  });
  console.log({ libro });

  const libro2 = await prisma.libro.create({
    data: {
      id: 7,
      titulo: "La Seleccion",
      autor_id: 22,
      stock: 23,
    },
  });
  console.log({ libro });

  const libro3 = await prisma.libro.create({
    data: {
      id: 8,
      titulo: "THarry Potter y el misterio del principe mestizo",
      autor_id: 20,
      stock: 4,
    },
  });
  console.log({ libro });
};
