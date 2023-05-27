import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const categoriasSeeder = async() => {
    const categoria = await prisma.categorias.createMany({
        data: [{
            categoria: 'VIP',
        },
        {
            categoria: 'IMAX',
        },
        {
            categoria: 'MacroXE',
        },]
    })
    console.log(categoria);
}