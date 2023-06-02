import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Se insertan datos a la tabla contribuyente
export const detallePagoSeeder = async () => {
  const detalleP1 = await prisma.detallePago.create({
    data: {
      id: 1,
      pagoId: 1,
      concepto: "salario",
      monto: 500,
      facturaId: 1,
    },
  });

  const detalleP2 = await prisma.detallePago.create({
    data: {
      id: 2,
      pagoId: 1,
      concepto: "salario",
      monto: 500,
      facturaId: 2,
    },
  });

  const detalleP3 = await prisma.detallePago.create({
    data: {
      id: 3,
      pagoId: 1,
      concepto: "salario",
      monto: 500,
      facturaId: 3,
    },
  });
};
