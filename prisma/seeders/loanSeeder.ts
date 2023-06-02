import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const loanSeeder = async () => {
    const loan = await prisma.loan.createMany({
        data: [
            {   
                bookId: 21,
                startDate: new Date(),
                endDate: new Date(),
                personId: 10,
            },
            {   
                bookId: 35,
                startDate: new Date(),
                endDate: new Date(),
                personId: 10,
            },
            {   
                bookId: 24,
                startDate: new Date(),
                endDate: new Date(),
                personId: 5,
            },
            {   
                bookId: 66,
                startDate: new Date(),
                endDate: new Date(),
                personId: 1,
            },
            {   
                bookId: 49,
                startDate: new Date(),
                endDate: new Date(),
                personId: 3,
            },
            {   
                bookId: 52,
                startDate: new Date(),
                endDate: new Date(),
                personId: 8,
            },
            {   
                bookId: 57,
                startDate: new Date(),
                endDate: new Date(),
                personId: 9,
            },
            {   
                bookId: 58,
                startDate: new Date(),
                endDate: new Date(),
                personId: 7,
            },
            {   
                bookId: 60,
                startDate: new Date(),
                endDate: new Date(),
                personId: 7,
            },
            {   
                bookId: 30,
                startDate: new Date(),
                endDate: new Date(),
                personId: 2,
            },
            {   
                bookId: 33,
                startDate: new Date(),
                endDate: new Date(),
                personId: 4,
            },
        ]
      })
  console.log({ loan })
}
