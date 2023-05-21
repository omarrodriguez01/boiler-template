import { PrismaClient } from '@prisma/client'
import { bakerySeeder } from './seeders/BakerySeeder'
import { employeeSeeder } from './seeders/EmployeeSeeder';
import { categorySeeder } from './seeders/CategorySeeder';
import { productSeeder } from './seeders/ProductSeeder';
import { orderSeeder } from './seeders/OrderSeeder';

const prisma = new PrismaClient()


async function main() {
   await bakerySeeder();
   await employeeSeeder();
   await categorySeeder();
   await productSeeder();
   await orderSeeder();
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })