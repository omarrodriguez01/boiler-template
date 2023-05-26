import { PrismaClient } from '@prisma/client'
import { AutorSeeder } from './seeders/AutorSeeder'
import { EditorialSeeder } from './seeders/EditorialSeeder'
import { LibroSeeder } from './seeders/LibroSeeder'
import { CopiaSeeder } from './seeders/CopiaSeeder'
import { PedidoSeeder } from './seeders/PedidoSeeder'


const prisma = new PrismaClient()


async function main() {
    await AutorSeeder();
    await EditorialSeeder();
    await LibroSeeder();
    await CopiaSeeder();
    await PedidoSeeder();
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