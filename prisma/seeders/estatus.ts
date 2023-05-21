import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const estatusSeeder = async () => {
  const estatus = await prisma.estatus.createMany({
    data: [
        {
            ID: 1,
            Estatus: "Prospectado",
        },
        {
            ID: 2,
            Estatus: "Primer Contacto",
        },
        {
            ID: 3,
            Estatus: "Acuerdo",
        },
        {
            ID: 4,
            Estatus: "Venta",
        },{
            ID: 5,
            Estatus: "Cerrado",
        },
    ]
  });
  console.log({ estatus });
};
