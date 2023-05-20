import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const PedidoSeeder = async () => {
    const copia = await prisma.pedido.createMany({
        data: [
            {
                copia_id: 1,
                fecha_pedido: new Date("2022-10-24"),
                fecha_entrega: new Date("2022-11-2"),
            },
            {
                copia_id: 2,
                fecha_pedido: new Date("2023-03-10"),
                fecha_entrega: new Date("2023-03-23"),
            },
            {
                copia_id: 1,
                fecha_pedido: new Date("2023-05-19"),
                fecha_entrega: null,
            },
        ]
      })
  console.log({ copia })
}