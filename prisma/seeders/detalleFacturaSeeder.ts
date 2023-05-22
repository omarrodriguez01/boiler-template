import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Se insertan datos a la tabla contribuyente
export const detalleFacturaSeeder = async () => {
  const detalleF1 = await prisma.detalleFactura.create({
    data: {
      id: 1,
      facturaId: 1,
      producto: "comida",
      cantidad: 5,
      precioUnitario: 100,
    },
  });

  const detalleF2 = await prisma.detalleFactura.create({
    data: {
      id: 2,
      facturaId: 2,
      producto: "comida",
      cantidad: 5,
      precioUnitario: 100,
    },
  });

  const detalleF3 = await prisma.detalleFactura.create({
    data: {
      id: 3,
      facturaId: 3,
      producto: "comida",
      cantidad: 5,
      precioUnitario: 100,
    },
  });
};
