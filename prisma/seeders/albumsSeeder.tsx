import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const albumSeeder= async () => {
    const albums = await prisma.album.createMany({
        data: [{
            id: 1,
            title: 'Speak Now',
            artistId: 1,
            releaseDate: '2010-10-25T00:00:00.451Z',
        },
        {
            id: 2,
            title: 'Midnights',
            artistId: 1,
            releaseDate: '2022-10-21T00:00:00.451Z',
        },
        {
            id: 3,
            title: 'Balas Perdidas',
            artistId: 2,
            releaseDate: '2018-10-25T00:00:00.451Z',
        },
        {
            id: 4,
            title: 'PRISM',
            artistId: 3,
            releaseDate: '2013-11-03T00:00:00.451Z',
        },

    ]
      })
  console.log({ albums })
}
