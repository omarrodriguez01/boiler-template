import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Se insertan datos a la tabla contribuyente
export const facturasSeeder = async () => {
  const factura1 = await prisma.factura.create({
    data: {
      id: 1,
      contribuyenteId: 1,
      fecha: new Date("2019-05-10"),
      total: 550,
      iva: 88,
      descuento: 0,
      subtotal: 462,
    },
  });

  const factura2 = await prisma.factura.create({
    data: {
      id: 2,
      contribuyenteId: 1,
      fecha: new Date("2019-05-10"),
      total: 550,
      iva: 88,
      descuento: 0,
      subtotal: 462,
    },
  });

  const factura3 = await prisma.factura.create({
    data: {
      id: 3,
      contribuyenteId: 2,
      fecha: new Date("2019-05-10"),
      total: 550,
      iva: 88,
      descuento: 0,
      subtotal: 462,
    },
  });

  const factura4 = await prisma.factura.create({
    data: {
      id: 4,
      contribuyenteId: 3,
      fecha: new Date("2019-05-10"),
      total: 550,
      iva: 88,
      descuento: 0,
      subtotal: 462,
    },
  });
};
