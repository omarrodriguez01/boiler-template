import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const forumSeeder = async () => {
    const forums = await prisma.forum.createMany({
        data: [{
          title: 'Action movies',
          contributors: 2,
        },
        {
            title: '2023 Movies',
            contributors: 10,
        },
        {
            title: 'Best movies of all times',
            contributors: 5,
        },
        ]
      })
  console.log({ forums })
}
