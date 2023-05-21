import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const artistSeeder= async () => {
    const artists = await prisma.artist.createMany({
        data: [{
            id: 1,
            name: 'Taylor Swift',
            biography: 'Grammy-winning pop artist known for heartfelt songwriting and captivating performances.',
        },
        {
            id: 2,
            name: 'Morat',
            biography: 'Colombian pop-rock band known for their catchy melodies and energetic performances. With a blend of pop, rock, and Latin influences, Morat has gained popularity for their relatable lyrics and harmonious sound.',
        },
        {
            id: 3,
            name: 'Katy Perry',
            biography: 'American singer and songwriter known for chart-topping hits and vibrant stage presence',
        }
    ]
      })
  console.log({ artists })
}
