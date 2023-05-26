import { PrismaClient } from '@prisma/client'
import { contribuyenteSeeder } from './seeders/contribuyenteSeeder'
import { detalleFacturaSeeder } from './seeders/detalleFacturaSeeder';
import { detallePagoSeeder } from './seeders/detallePagoSeeder';
import { facturasSeeder } from './seeders/facturasSeeder';
import { impuestoSeeder } from './seeders/impuestoSeeder';
import { pagoSeeder } from './seeders/pagoSeeder';
import { retencionSeeder } from './seeders/retencionSeeder';

const prisma = new PrismaClient()

async function main() {
    await contribuyenteSeeder();
    await facturasSeeder();
    await pagoSeeder();
    await retencionSeeder();
    await impuestoSeeder();
    await detalleFacturaSeeder();
    await detallePagoSeeder();
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