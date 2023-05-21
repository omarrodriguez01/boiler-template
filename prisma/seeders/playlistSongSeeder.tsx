import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const playlistSongSeeder= async () => {
    const playlistSongs = await prisma.playlistSong.createMany({
        data: [{
            playlistId: 1,
            songId: 9
        },
        {
            playlistId: 1,
            songId: 16
        },
        {
            playlistId: 1,
            songId: 12
        },
        {
            playlistId: 1,
            songId: 3
        },
        {
            playlistId: 1,
            songId: 1
        },
        {
            playlistId: 2,
            songId: 2
        },
        {
            playlistId: 2,
            songId: 8
        },
        {
            playlistId: 2,
            songId: 15
        },
        {
            playlistId: 2,
            songId: 11
        },
        {
            playlistId: 3,
            songId: 10
        },
        {
            playlistId: 3,
            songId: 11
        },
        {
            playlistId: 3,
            songId: 2
        },
        {
            playlistId: 3,
            songId: 13
        },
        {
            playlistId: 3,
            songId: 7
        },
        {
            playlistId: 3,
            songId: 4
        },
    ]
      })
  console.log({ playlistSongs })
}
