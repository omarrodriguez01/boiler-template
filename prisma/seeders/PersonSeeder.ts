import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const personSeeder = async () => {
    const person = await prisma.person.createMany({
        data: [
            { name: "Sofía García Rodríguez" },
            { name: "Carlos López Martínez" },
            { name: "Ana Morales Herrera" },
            { name: "Juan Torres Sánchez" },
            { name: "Laura Martínez Gómez" },
            { name: "Alejandro Pérez Jiménez" },
            { name: "Valentina Ruiz Fernández" },
            { name: "Sebastián González Ramírez" },
            { name: "Isabella Rodríguez López" },
            { name: "Andrés Hernández Vargas" },
        ]
      })
  console.log({ person })
}