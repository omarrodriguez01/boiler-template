import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const songSeeder= async () => {
    const songs = await prisma.song.createMany({
        data: [{
            id: 1,
            title: 'Sparks Fly',
            duration: '3:00',
            artistId: 1,
            albumId: 1,
        },
        {
            id: 2,
            title: 'Better than Revenge',
            duration: '2:54',
            artistId: 1,
            albumId: 1,
        },
        {
            id: 3,
            title: 'Haunted',
            duration: '3:04',
            artistId: 1,
            albumId: 1,
        },
        {
            id: 4,
            title: 'Enchanted',
            duration: '2:34',
            artistId: 1,
            albumId: 1,
        },
        {
            id: 5,
            title: 'Lavender Haze',
            duration: '2:44',
            artistId: 1,
            albumId: 2,
        },
        {
            id: 6,
            title: 'Anti-Hero',
            duration: '2:34',
            artistId: 1,
            albumId: 2,
        },
        {
            id: 7,
            title: 'Bejeweled',
            duration: '3:05',
            artistId: 1,
            albumId: 2,
        },
        {           
            id: 8,
            title: 'Karma',
            duration: '3:12',
            artistId: 1,
            albumId: 2,

        },
        {           
            id: 9,
            title: 'Punto y Aparte',
            duration: '3:31',
            artistId: 2,
            albumId: 3,

        },
        {           
            id: 10,
            title: 'Besos en Guerra',
            duration: '3:52',
            artistId: 2,
            albumId: 3,

        },
        {           
            id: 11,
            title: 'Cuando el Amor Se Escapa',
            duration: '2:56',
            artistId: 2,
            albumId: 3,

        },
        {           
            id: 12,
            title: 'Acuerdate de Mí',
            duration: '3:41',
            artistId: 2,
            albumId: 3,

        },
        {           
            id: 13,
            title: 'Roar',
            duration: '3:43',
            artistId: 3,
            albumId: 4,

        },
        {           
            id: 14,
            title: 'Dark Horse',
            duration: '3:43',
            artistId: 3,
            albumId: 4,

        },
        {           
            id: 15,
            title: 'International Smile',
            duration: '3:48',
            artistId: 3,
            albumId: 4,

        },
        {           
            id: 16,
            title: 'Unconditionally',
            duration: '3:48',
            artistId: 3,
            albumId: 4,

        },
        
        
    ]
      })
  console.log({ songs })
}
