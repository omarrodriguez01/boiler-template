import { PrismaClient } from '@prisma/client'
import { usuarioSeeder } from './seeders/usuarioSeeder'
import { artistaSeeder } from './seeders/artistaSeeder'
import { albumSeeder } from './seeders/albumSeeder'
import { cancionSeeder } from './seeders/cancionSeeder'
import { listaReproduccionSeeder } from './seeders/listaReproduccionSeeder'
import { usuarioArtistaSeguidoSeeder } from './seeders/usuarioArtistaSeguidoSeeder'
import { cancionSeleccionadaSeeder } from './seeders/cancionSeleccionadaSeeder'


const prisma = new PrismaClient()


async function main() {
    await usuarioSeeder();
    await artistaSeeder();
    await albumSeeder();
    await cancionSeeder();
    await listaReproduccionSeeder();
    await usuarioArtistaSeguidoSeeder();
    await cancionSeleccionadaSeeder();
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