import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const involucradosSeeder = async () => {
  const involucrados = await prisma.involucrados.createMany({
    data: [
        {
            ID: 1,
            Nombre: "Jhon Perez",
            Puesto: "Gerente"
        },
        {
            ID: 2,
            Nombre: "Juan Gonzalez",
            Puesto: "Coordinador"
        },
        {
            ID: 3,
            Nombre: "Fernando Aguirre",
            Puesto: "Especialista"
        }
    ]
  });
  console.log({ involucrados });
};
