import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const customerSeeder= async () => {
    const customer = await prisma.customers.createMany({
        data: [{
          customer_name: 'Patricio Santos',
          customer_email: 'patosantos2001@gmail.com',
          customer_phone: '123456789',
          customer_address: 'Calle 123'
        },
        {
          customer_name: 'Nicolas Reeling',
          customer_email: 'nicobrower2002@gmail.com',
          customer_phone: '987654321',
          customer_address: 'Calle 555'
        },
        {
          customer_name: 'Brenda Saucedo',
          customer_email: 'brendasaucedo001@hotmail.com',
          customer_phone: '11223344',
          customer_address: 'Calle 876'
        }
      ]
      })
  console.log({ customer })
}
