import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const boletasSeeders= async () => {

  const boleta = await prisma.boleta.createMany({
    data:[
      {
        idFuncion: 1,
        asiento: 232
      },
      {
        idFuncion: 5,
        asiento: 158
      },
      {
        idFuncion: 7,
        asiento: 34
      }
    ]
  })
  console.log( boleta)
}
