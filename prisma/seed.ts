import { PrismaClient } from '@prisma/client'
import { empleadosSeeder } from './seeders/empleadosSeeder';
import { productosMenuSeeder } from './seeders/productosMenuSeeder';
import { ordenesSeeder } from './seeders/ordenesSeeder';
import { ordenesItemsSeeder } from './seeders/ordenesItemsSeeder';
// import { studentSeeder } from './seeders/studentsSeeder'


const prisma = new PrismaClient()


async function main() {
     await empleadosSeeder();
     await productosMenuSeeder(); 
     await ordenesSeeder(); 
     await ordenesItemsSeeder();
     //await studentSeeder();  
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