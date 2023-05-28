import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const usersSeeder = async () => {
    const users = await prisma.user.createMany({
        data: [{
          username: 'Omar',
          email: 'omar@omar.com',
          password: 'postgres',
          firstName: 'Omar',
          lastName: 'Rodriguez',
          profilePicture: 'https://firebase.com/omarPicture.jpg',
          subscriptionTier: 'Fan'
        },
        {
          username: 'fazfaz7',
          email: 'fazfaz@gmail.com',
          password: 'soapToday',
          firstName: 'Adrian',
          lastName: 'Faz',
          profilePicture: 'https://firebase.com/fazPicture.jpg',
          subscriptionTier: 'Super Fan'
        },
        {
          username: 'panchitomest',
          email: 'panchitom@gmail.com',
          password: 'peliculas2',
          firstName: 'Francisco',
          lastName: 'Mestizo',
          profilePicture: 'https://firebase.com/panchitoPicture.jpg',
          subscriptionTier: 'Super Fan'
        },
      ]
      })
  console.log({ users })
}
