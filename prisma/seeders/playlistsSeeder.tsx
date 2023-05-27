import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const playlistSeeder= async () => {
    const playlists = await prisma.playlist.createMany({
        data: [{
            id:1,
            userId: 2,
            name: 'Canciones para llorar',
        },
        {
            id:2,
            userId: 4,
            name: 'Favoritas',
        },
        {
            id:3,
            userId: 1,
            name: 'Canciones para Roadtrip',
        },
        
    ]
      })
  console.log({ playlists })
}
