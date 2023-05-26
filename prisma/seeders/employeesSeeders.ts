import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const employeeSeeder= async () => {
    const employee = await prisma.employees.createMany({
        data: [{
          employee_name: 'Alberto Estrada',
          employee_email: 'albertoestrada002@hotmail.com',
          employee_phone: '99887766',
          employee_specialty: 'Almacen'
        },
        {
          employee_name: 'Mauricio Cantu',
          employee_email: 'maucantu123@gmail.com',
          employee_phone: '19283746',
          employee_specialty: 'Gerencia'
        },
        {
          employee_name: 'Ana Paula Pedroza',
          employee_email: 'paupedroza321@hotmail.com',
          employee_phone: '57483921',
          employee_specialty: 'Mantenimiento'
        }
      ]
      })
  console.log({ employee })
}
