import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const librosSeeder = async () => {

  const libro3 = await prisma.libro.create({
    data: {
      id: 8,
      titulo: "Harry Potter y el misterio del principe mestizo",
      autor_id: 20,
      stock: 4,
    },
  });
  console.log({ libro3 });
};
