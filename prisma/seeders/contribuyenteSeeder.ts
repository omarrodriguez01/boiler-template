import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Se insertan datos a la tabla contribuyente
export const contribuyenteSeeder = async () => {
  const contribuyente1 = await prisma.contribuyente.create({
    data: {
      id: 1,
      rfc: "PERJ901231ABC",
      nombre: "Juan Pérez",
      direccion: "Calle 123, Ciudad de México",
    },
  });

  const contribuyente2 = await prisma.contribuyente.create({
    data: {
      id: 2,
      rfc: "LOAM890502DEF",
      nombre: "María López",
      direccion: "Avenida Principal 456, Guadalajara",
    },
  });

  const contribuyente3 = await prisma.contribuyente.create({
    data: {
      id: 3,
      rfc: "RAMA950703JKL",
      nombre: "Ana Ramírez",
      direccion: "Calle Central 789, Monterrey",
    },
  });
};
