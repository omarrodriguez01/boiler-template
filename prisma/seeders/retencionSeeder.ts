import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Se insertan datos a la tabla contribuyente
export const retencionSeeder = async () => {
  const retencion1 = await prisma.retencion.create({
    data: {
      id: 1,
      pagoId: 1,
      tipo: "ISR",
      tasa: 30,
      monto: 5000,
    },
  });

  const retencion2 = await prisma.retencion.create({
    data: {
      id: 2,
      pagoId: 2,
      tipo: "ISR",
      tasa: 30,
      monto: 10000,
    },
  });

  const retencion3 = await prisma.retencion.create({
    data: {
      id: 3,
      pagoId: 1,
      tipo: "ISR",
      tasa: 30,
      monto: 5000,
    },
  });
};
