import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const studentSeeder= async () => {
    const student = await prisma.student.create({
        data: {
          id: 3,
          firstName: 'Omar',
          lastName: 'Rodriguez',
          email: 'omar@omar.com',
          phone: '661-890-1820',
          address:  'Address',
          gender : 'N/A',
          dateOfBirth: new Date('1999-01-08 04:05:06'),
          enrollmentDate: new Date('1999-01-08 04:05:06'),
          graduationDate: new Date('1999-01-08 04:05:06'),
        },
      })
  console.log({ student })
}
