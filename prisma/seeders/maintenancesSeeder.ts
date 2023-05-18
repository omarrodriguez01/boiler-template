import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const maintenanceSeeder= async () => {
    const maintenance = await prisma.maintenances.createMany({
        data: [{
          customer_id: 1,
          car_id: 1,
          employee_id: 1,
          description: 'Cambio de aceite',
          maintenance_date: new Date('2021-10-11'),
        },
        {
          customer_id: 2,
          car_id: 2,
          employee_id: 1,
          description: 'Cambio de llantas',
          maintenance_date: new Date('2021-10-9'),
        },
        {
          customer_id: 3,
          car_id: 3,
          employee_id: 3,
          description: 'Mantenimiento general',
          maintenance_date: new Date('2021-11-12'),
        }
      ]
      })
  console.log({ maintenance })
}
