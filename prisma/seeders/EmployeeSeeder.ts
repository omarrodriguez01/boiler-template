import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const employeeSeeder= async () => {
    const empleado1 = await prisma.employee.create({
        data: {
          id: 1,
          name: 'Cristina Hernandez',
          startDate: new Date("2022-07-18"),
          roleName: 'Panadera',
          bakeryId: 3,
        },
      })

      const empleado2 = await prisma.employee.create({
        data: {
          id: 2,
          name: 'Dan Polanco',
          startDate: new Date("2022-11-7"),
          roleName: 'Gerente Regional',
          bakeryId: 2,
        },
      })

      const empleado3 = await prisma.employee.create({
        data: {
          id: 3,
          name: 'Hugo Hernandez',
          startDate: new Date("2023-4-1"),
          roleName: 'Botarguero',
          bakeryId: 1,
        },
      })

      console.log({ empleado1 })
      console.log({ empleado2 })
      console.log({ empleado3 })
}
