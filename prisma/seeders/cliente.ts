import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const clienteSeeder = async () => {
  const cliente = await prisma.cliente.createMany({
    data: [
        {
            ID: 1,
            Nombre: "Jorge Perez",
            Empresa: "Empresa1",
            Contacto: "jorgeperez@gmail.com",
            EstatusFK: 1
        },
        {
            ID: 2,
            Nombre: "Manuel Gonzalez",
            Empresa: "Empresa2",
            Contacto: "manuelgonzalez@gmail.com",
            EstatusFK: 3
        },
        {
            ID: 3,
            Nombre: "Sergio Lopez",
            Empresa: "Empresa3",
            Contacto: "sergiolopez@gmail.com",
            EstatusFK: 4
        }
    ]
  });
  console.log({ cliente });
};