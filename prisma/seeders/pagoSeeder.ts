import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Se insertan datos a la tabla contribuyente
export const pagoSeeder = async () => {
  const pago1 = await prisma.pago.create({
    data: {
      id: 1,
      contribuyenteId: 1,
      fechaPago: new Date("2019-05-10"),
      montoPagado: 1000,
    },
  });

  const pago2 = await prisma.pago.create({
    data: {
      id: 2,
      contribuyenteId: 2,
      fechaPago: new Date("2020-05-10"),
      montoPagado: 2000,
    },
  });

  const pago3 = await prisma.pago.create({
    data: {
      id: 3,
      contribuyenteId: 3,
      fechaPago: new Date("2023-05-10"),
      montoPagado: 8000,
    },
  });
};
