import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const archivosSeeder = async () => {
  const archivos = await prisma.archivos.createMany({
    data: [
        {
            ID: 1,
            Nombre: "File1.pdf",
            Path: "public/files/File1.pdf",
            ClienteFK: 1
        },
        {
            ID: 2,
            Nombre: "File2.pdf",
            Path: "public/files/File2.pdf",
            ClienteFK: 2
        },
        {
            ID: 3,
            Nombre: "File3.pdf",
            Path: "public/files/File3.pdf",
            ClienteFK: 3
        }
    ]
  });
  console.log({ archivos });
};