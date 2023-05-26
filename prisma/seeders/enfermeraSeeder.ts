import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const enfermeraSeeder = async () => {
  const enfermera = await prisma.enfermera.createMany({
    data: [
      {
        nombre: "Melissa",
        telefono: "8134987986",
        correo_electronico: "melissa@correo.com",
      },
      {
        nombre: "Pedra",
        telefono: "8198374652",
        correo_electronico: "pedra@correo.com",
      },
      {
        nombre: "Ana",
        telefono: "8246519783",
        correo_electronico: "ana@correo.com",
      },
    ],
  });
  console.log({ enfermera });
};
