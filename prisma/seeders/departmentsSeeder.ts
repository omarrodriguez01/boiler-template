import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const departmentsSeeder= async () => {
    const department = await prisma.departments.createMany({
        data:[
            { department_name: "Cardiology" },
            { department_name: "Dermatology" },
            { department_name: "Neurology" },
        ]
      })
  console.log({ department })
}