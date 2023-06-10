import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const labTestsSeeder= async () => {
    const labTests = await prisma.lab_tests.createMany({
        data:[
            { test_name: 'Blood Test', description: 'Complete blood count' },
            { test_name: 'Urinalysis', description: 'Urine test' },
            { test_name: 'X-Ray' },
        ]
      })
  console.log({ labTests })
}