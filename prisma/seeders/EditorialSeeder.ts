import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const editorialSeeder = async () => {
    const editorial = await prisma.editorial.createMany({
        data: [
            { name: "Penguin Randomhouse" },
            { name: "Fondo de Cultura Económica" },
            { name: "Alfaguara" },
            { name: "Planeta" },
            { name: "Grijalbo" },
            { name: "Algarabía" },
            { name: "DEBOLSILLO" },
            { name: "Oceano" },
        ]
      })
  console.log({ editorial })
}