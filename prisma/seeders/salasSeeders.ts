import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const salasSeeders= async () => {
 
  const sala = await prisma.sala.createMany({
    data:[
      {
        numero: "1"
      },
      {
        numero: "2"
      },
      {
        numero: "3"
      }
    ]
  })
  console.log( sala)
}