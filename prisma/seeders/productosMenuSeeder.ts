import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const productosMenuSeeder = async () => {
  const productosMenu = await prisma.productos_menu.createMany({
    data: [
      {
        nombre: "Hamburguesa sencilla", 
        descripcion: "Sabrosa hamburguesa de res con doble queso y tocino", 
        precio: 250, 
        categoria: "Hamburguesas", 
        imagen_url: "hamburguesa.jpg", 
      },
      {
        nombre: "Costillas BBQ", 
        descripcion: "Sabrosas costillas de cerdo bañadas en salsa BBQ", 
        precio: 300, 
        categoria: "Grill", 
        imagen_url: "ribs.jpg", 
      },
      {
        nombre: "Ensalada", 
        descripcion: "Deliciosa ensalada césar", 
        precio: 180, 
        categoria: "Greens", 
        imagen_url: "ensalada.jpg", 
      },
    ],
  });
  console.log({ productosMenu });
};