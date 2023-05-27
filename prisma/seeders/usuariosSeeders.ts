import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const usuariosSeeder= async () => {
    // Poblar la tabla Usuarios
    const usuarios = await prisma.usuarios.createMany({
      data: [
      /*
      {
        id_usuario: 1,
        nombre: 'Usuario 1',
        apellido: 'Apellido 1',
        correo: 'usuario1@example.com',
        contrasena: 'contrasena1',
        tarjeta_credito: '1111-2222-3333-4444',
      },
      */
      {
        id_usuario: 2,
        nombre: 'Usuario 2',
        apellido: 'Apellido 2',
        correo: 'usuario2@example.com',
        contrasena: 'contrasena2',
        tarjeta_credito: '5555-6666-7777-8888',
      },
      {
        id_usuario: 3,
        nombre: 'Usuario 3',
        apellido: 'Apellido 3',
        correo: 'usuario3@example.com',
        contrasena: 'contrasena3',
        tarjeta_credito: '9999-0000-1111-2222',
      },
    ]
    })

    console.log({usuarios})
    
}
