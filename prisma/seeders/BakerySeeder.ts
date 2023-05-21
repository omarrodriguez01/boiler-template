import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const bakerySeeder= async () => {
  // ----- Bakeries -----
    const panaderia1 = await prisma.bakery.create({
        data: {
          id: 1,
          name: 'Panaderia Pan Jose',
          address: 'Av. Dr. Burton E. Grossman 501 Pte-SECTOR 1, Tampico Altamira, 89605 Miramar, Tamps.',
        },
      })

      const panaderia2 = await prisma.bakery.create({
        data: {
          id: 2,
          name: 'Panes y Mas',
          address: '1600 W Bank Dr, Peterborough, ON K9L 0G2, Canada',
        },
      })

      const panaderia3 = await prisma.bakery.create({
        data: {
          id: 3,
          name: 'Pan de Cada Dia',
          address: 'Calle Alejandro de Rodas 91, Cumbres Elite 2do. Sector, 64349 Monterrey, N.L.',
        },
      })
      
  console.log({ panaderia1 })
  console.log({ panaderia2 })
  console.log({ panaderia3 })
}
