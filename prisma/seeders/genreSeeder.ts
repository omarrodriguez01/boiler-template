import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const genreSeeder = async () => {
    const genre = await prisma.genre.createMany({
        data: [
            { name: "Novels" },
            { name: "Drama" },
            { name: "Short Stories" },
            { name: "Suspense" },
            { name: "Thriller" },
            { name: "Fantasy" },
            { name: "Science Fiction" },
            { name: "Art" },
            { name: "History" },
            { name: "Classics" },
            { name: "Philosophy" },
            { name: "Poems" },
            { name: "Science" },
            { name: "Epic Fantasy" },
            { name: "Juvenile" },
            { name: "Romance" },
        ]
      })
  console.log({ genre })
}