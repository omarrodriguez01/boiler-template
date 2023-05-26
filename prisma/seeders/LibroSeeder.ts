import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const LibroSeeder = async () => {
    const libro = await prisma.libro.createMany({
        data: [
            {
                titulo: 'Hush Hush',
                editorial_id: 1,
                genero_id: 1,
                autor_id: 1,
            },
            {
                titulo: 'Ángeles Caídos',
                editorial_id: 2,
                genero_id: 1,
                autor_id: 2,
            },
            {
                titulo: 'Harry Potter',
                editorial_id: 3,
                genero_id: 2,
                autor_id: 3,
            },
        ]
      })
  console.log({ libro })
}