import { PrismaClient } from '@prisma/client'
import { contribuyenteSeeder } from './seeders/contribuyenteSeeder'
import { facturaSeeder } from './seeders/facturasSeeder';
import { impuestoSeeder } from './seeders/impuestoSeeder';
import { pagoSeeder } from './seeders/pagoSeeder';
import { retencionSeeder } from './seeders/retencionSeeder';

const prisma = new PrismaClient()

async function main() {
    await contribuyenteSeeder();
    await facturaSeeder();
    await pagoSeeder();
    await retencionSeeder();
    await impuestoSeeder();
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