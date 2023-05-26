import { PrismaClient } from '@prisma/client'

import { archivosSeeder } from './seeders/archivos'
import { clienteSeeder } from './seeders/cliente'
import { estatusSeeder } from './seeders/estatus'
import { involucradosSeeder } from './seeders/involucrados'
import { tareasSeeder } from './seeders/tareas'

const prisma = new PrismaClient()


async function main() {
    // await studentSeeder();
    await estatusSeeder();
    await clienteSeeder();
    await archivosSeeder();
    await involucradosSeeder();
    await tareasSeeder();
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