import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const reviewsSeeder = async () => {
    const reviews = await prisma.review.createMany({
        data: [{
            userId: 3,
            movieId: 1,
            forumId: 1,
            stars: 4,
            comments: 'I loved the movie'
        },
        {
            userId: 3,
            movieId: 3,
            forumId: 1,
            stars: 3,
            comments: 'Amazing VFX even though'
        },
        {
            userId: 2,
            movieId: 1,
            forumId: 2,
            stars: 3,
            comments: 'Great movie'
        }
        ]
      })
  console.log({ reviews })
}
