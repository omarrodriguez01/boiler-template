import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const subscriptionSeeder= async () => {
    const subscriptions = await prisma.subscription.createMany({
        data: [{
            id: 1,
            type: 'Free',
            price: 0.00,
            description: 'Access a limited selection of songs for free and enjoy music streaming without any cost.'
            },
            {
            id: 2,
            type: 'Basic',
            price: 5.89,
            description: 'Ad-free listening and a wider selection of songs.'
            },
            {
                id: 3,
                type: 'Premium',
                price: 11.99,
                description: 'Unlimited access to songs, experience high-quality audio, enjoy ad-free and uninterrupted listening, and receive personalized recommendations.'
            },
    ]
      })
  console.log({ subscriptions })
}
