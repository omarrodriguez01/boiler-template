import { PrismaClient } from '@prisma/client'
import { boletosSeeder } from './seeders/boletosSeeders'
import { funcionesSeeder } from './seeders/funcionesSeeders'
import { peliculasSeeder } from './seeders/peliculasSeeder'
import { salasSeeder } from './seeders/salasSeeders'
import { usuariosSeeder } from './seeders/usuariosSeeders'

const prisma = new PrismaClient()


async function main() {
    //await studentsSeeder();
    await usuariosSeeder();
    await salasSeeder();
    await peliculasSeeder();
    await funcionesSeeder();
    await boletosSeeder();
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