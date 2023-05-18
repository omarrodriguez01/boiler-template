import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const carSeeder= async () => {
    const car = await prisma.cars.createMany({
        data: [{
          car_name: 'Ford Focus',
          car_model: 'Focus3',
          car_year: '2010',
          car_color: 'Silver',
          car_price: 100000
        },
        {
          car_name: 'Mazda3',
          car_model: 'Compact',
          car_year: '2012',
          car_color: 'White',
          car_price: 120000
        },
        {
          car_name: 'Toyota Corolla',
          car_model: 'New Corolla',
          car_year: '2013',
          car_color: 'Black',
          car_price: 150000
        }
      ]
      })
  console.log({ car })
}
