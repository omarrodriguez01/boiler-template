import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const AutorSeeder = async () => {
    const autor = await prisma.autor.createMany({
        data: [
            {
                nombre: 'Becca Fitzpatrick',
                nacionalidad: 'estadounidense',
            },
            {
                nombre: 'Susan Ee',
                nacionalidad: 'estadounidense',
            },
            {
                nombre: 'J. K. Rowling',
                nacionalidad: 'britanica',
            },
        ]
      })
  console.log({ autor })
}