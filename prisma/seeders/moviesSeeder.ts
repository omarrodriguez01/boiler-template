import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const moviesSeeder = async () => {
    const movies = await prisma.movie.createMany({
        data: [{
          title: 'Guardians of the Galaxy Vol. 3',
          director: 'James Gunn',
          duration: 150,
          genre: 'Action',
          rating: '4.2',
          relaseYear: 2023
        },
        {
            title: 'The Super Mario Bros. Movie',
            director: 'Michael Jelenic',
            duration: 92,
            genre: 'Animation',
            rating: '3.5',
            relaseYear: 2023
        },
        {
            title: 'TRON: Legacy',
            director: 'Joseph Kosinski',
            duration: 125,
            genre: 'Action',
            rating: '3.1',
            relaseYear: 2010
        }
        ]
      })
  console.log({ movies })
}
