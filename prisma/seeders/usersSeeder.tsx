import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const userSeeder= async () => {
    const users = await prisma.user.createMany({
        data: [{
            id: 1,
            username: 'adrian_faz',
            email: 'adrian.faz@gmail.com',
            subscriptionId: 3,
            subscription_id: "3",
        },
        {
            id: 2,
            username: 'panchito.mestizo',
            email: 'panchito@outlook.com',
            subscriptionId: 2,
            subscription_id: "2",
        },
        {
            id: 3,
            username: 'armando_j',
            email: 'armandolopez@gmail.com',
            subscriptionId: 2,
            subscription_id: "2",
        },
        {
            id:4,
            username: 'javi_gato',
            email: 'javigato@gmail.com',
            subscriptionId: 1,
            subscription_id: "1",
        },
    ]
      })
  console.log({ users })
}
