import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Se insertan datos a la tabla contribuyente
export const impuestoSeeder = async () => {
  const impuesto1 = await prisma.impuesto.create({
    data: {
      id: 1,
      facturaId: 1,
      tipo: "IVA",
      tasa: 16,
      monto: 116,
    },
  });

  const impuesto2 = await prisma.impuesto.create({
    data: {
      id: 2,
      facturaId: 2,
      tipo: "IVA",
      tasa: 16,
      monto: 80,
    },
  });

  const impuesto3 = await prisma.impuesto.create({
    data: {
      id: 3,
      facturaId: 3,
      tipo: "IVA",
      tasa: 16,
      monto: 16,
    },
  });
};
