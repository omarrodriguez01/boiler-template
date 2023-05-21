import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const labResultsSeeder= async () => {
    const labResults = await prisma.lab_results.createMany({
        data:[
            {
                patient_id: 1, // Assuming patient_id 1 is Alice Johnson
                lab_test_id: 1, // Assuming lab_test_id 1 is Blood Test
                result_value: 'Normal',
                result_date: new Date(2023, 5, 21),
            },
            {
                patient_id: 2, // Assuming patient_id 2 is Bob Smith
                lab_test_id: 2, // Assuming lab_test_id 2 is Urinalysis
                result_value: 'Abnormal',
                result_date: new Date(2023, 5, 22),
            },
            {
                patient_id: 3, // Assuming patient_id 3 is Nicole Kidman
                lab_test_id: 3, // Assuming lab_test_id 3 is X-Ray
                result_value: 'Abnormal',
                result_date: new Date(2023, 5, 23),
            },
        ]
      })
  console.log({ labResults })
}

