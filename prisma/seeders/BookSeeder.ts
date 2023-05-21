import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const bookSeeder = async () => {
    const book = await prisma.book.createMany({
      data: [
        {title: 'A Little Life', authorId: 1, editorialId: 1, genreId: 1},
        {title: 'Les Miserables', authorId: 2, editorialId: 7, genreId: 10},
        {title: 'Nuestra Señora de París', authorId: 2, editorialId: 8, genreId: 2},
        {title: 'El último día de un condenado', authorId: 2, editorialId: 6, genreId: 10},
        {title: 'Crimen y Castigo', authorId: 3, editorialId: 1, genreId: 2},
        {title: 'Memorias del subsuelo', authorId: 3, editorialId: 3, genreId: 4},
        {title: 'La metamorfosis', authorId: 4, editorialId: 6, genreId: 3},
        {title: 'Cartas a Milena', authorId: 4, editorialId: 4, genreId: 11},
        {title: 'Rayuela', authorId: 5, editorialId: 5, genreId: 10},
        {title: 'Bestiario', authorId: 5, editorialId: 5, genreId: 6},
      ]
    })
  console.log({ book })
}