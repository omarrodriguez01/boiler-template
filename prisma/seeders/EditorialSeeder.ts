import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const EditorialSeeder = async () => {
    const editorial = await prisma.editorial.createMany({
        data: [
            {
                nombre: 'Ediciones B',
            },
            {
                nombre: 'Océano Gran Travesía',
            },
            {
                nombre: 'Salamandra',
            },
        ]
      })
  console.log({ editorial })
}