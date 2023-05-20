import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ordenesSeeder = async () => {
  const ordenes = await prisma.ordenes.createMany({
    data: [
      {
        cliente_nombre: "Alejandro", 
        orden_fecha: new Date("2023-05-1"), 
        mesa_numero: 10, 
        estatus: "Cerrado", 
        empleado_id: 1
      },
      {
        cliente_nombre: "Raquel", 
        orden_fecha: new Date("2023-02-28"), 
        mesa_numero: 4, 
        estatus: "Cerrado", 
        empleado_id: 3
      },
      {
        cliente_nombre: "Jose", 
        orden_fecha: new Date("2023-05-19"), 
        mesa_numero: 7, 
        estatus: "Abierto", 
        empleado_id: 3
      },
    ],
  });
  console.log({ ordenes });
};