import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const spare_partSeeder= async () => {
    const spare_part = await prisma.spare_Parts.createMany({
        data: [{
          car_id: 1,
          spare_part_name: 'Llanta',
          spare_part_price: 1000,
          spare_part_stock: 4
        },
        {
          car_id: 2,
          spare_part_name: 'Aceite 1L',
          spare_part_price: 300,
          spare_part_stock: 15
        },
        {
          car_id: 3,
          spare_part_name: 'Freno',
          spare_part_price: 2000,
          spare_part_stock: 3
        }
      ]
      })
  console.log({ spare_part })
}
