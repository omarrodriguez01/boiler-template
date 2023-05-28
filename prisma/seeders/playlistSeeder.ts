import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const playlistSeeder = async () => {
    const playlist = await prisma.playlist.createMany({
        data: [{
            title: 'My movies of the year',
            image: 'https://firebase.com/franciscoMovies.jpg',
            userId: 3,
        },
        {
            title: 'Top disney movies',
            image: 'https://firebase.com/fazFavoriteMovies.jpg',
            userId: 2,
        },
        {
            title: 'Top Marvel Movies',
            image: 'https://firebase.com/marvelMovies.jpg',
            userId: 3,
        }
        ]
      })
  console.log({ playlist })
}
