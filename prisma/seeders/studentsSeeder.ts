import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const studentSeeder= async() => {
  const producto1 = await prisma.productos.create({
    data: {
      nombre: 'Pan Dulce',
      precio: 1000,
      stock: 100,
    },
  })
  console.log(producto1)

  const producto2 = await prisma.productos.create({
    data: {
      nombre: 'Pan Integral',
      precio: 1100,
      stock: 30,
    },
  })
  console.log(producto2)

  const producto3 = await prisma.productos.create({
    data: {
      nombre: 'Dona',
      precio: 400,
      stock: 40,
    },
  })
  console.log(producto3)

  const venta1 = await prisma.ventas.create({
    data: {
      total: 400
    },
  })
  console.log(venta1)

  const venta2 = await prisma.ventas.create({
    data: {
      total: 1100
    },
  })
  console.log(venta2)
  
  const venta3 = await prisma.ventas.create({
    data: {
      total: 1000
    },
  })
  console.log(venta3)

  const detalleVenta1 = await prisma.detalle_Ventas.create({
    data: {
      idVenta: venta1.idVenta,
      idProducto: producto1.idProducto,
      cantidad: 1,
      subtotal: 400,
    }
  })
  console.log(detalleVenta1)

  const detalleVenta2 = await prisma.detalle_Ventas.create({
    data: {
      idVenta: venta2.idVenta,
      idProducto: producto2.idProducto,
      cantidad: 1,
      subtotal: 1100,
    }
  })
  console.log(detalleVenta2)

  const detalleVenta3 = await prisma.detalle_Ventas.create({
    data: {
      idVenta: venta3.idVenta,
      idProducto: producto3.idProducto,
      cantidad: 1,
      subtotal: 1000,
    }
  })
  console.log(detalleVenta3)
}

