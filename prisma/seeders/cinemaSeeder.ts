import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const cinemaSeeder = async () => {
    //Seeders tabla peliculas 
  const pelicula1 = await prisma.pelicula.create({
    data: {
      titulo: 'Decision to Leave',
      genero: 'Misterio/Romance',
      duracion: 148,
      sinopsis: 'Mientras investiga la muerte de un hombre en las montañas, el detective Hae-Joon se enamora de la esposa del fallecido, una mujer enigmática.',
      rating: 8.1,
      fechaEstreno: '2022-06-29',
      paisOrigen: 'Corea del Sur',
      director: 'Chan-Wook Park',
      posterUrl: 'https://pics.filmaffinity.com/Decision_to_Leave-793018454-large.jpg',
    },
  });

  const pelicula2 = await prisma.pelicula.create({
    data: {
      titulo: 'The Whale',
      genero: 'Drama/Ficción',
      duracion: 117,
      sinopsis: 'Un profesor de inglés, un tipo solitario que sufre obesidad mórbida, intenta restablecer el contacto con su hija en busca de perdón.',
      rating: 7.2,
      fechaEstreno: '2022-12-09',
      paisOrigen: 'Estados Unidos',
      director: 'Darren Aronofsky',
      posterUrl: 'https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/230081/Whale_Print_Payoff_1-Sheet_7.jpg',
    },
  });

  const pelicula3 = await prisma.pelicula.create({
    data: {
      titulo: 'Everything Everywhere All at Once',
      genero: 'Aventura/Ciencia ficción',
      duracion: 150,
      sinopsis: 'Una heroína inesperada debe usar sus nuevos poderes para luchar contra los desconcertantes peligros del multiverso y así lograr salvar su mundo.',
      rating: 8.9,
      fechaEstreno: '2022-03-11',
      paisOrigen: 'Estados Unidos',
      director: 'Daniel Kwan y Daniel Scheinert',
      posterUrl: 'https://www.themoviedb.org/t/p/original/iQK8LWh9kpR9OcQT8kc598yFhbK.jpg',
    },
  });

    //Seeders tabla salas
  const sala1 = await prisma.sala.create({
    data: {
      nombre: 'Sala 1',
      capacidad: 80,
      tipo: 'Cine tradicional',
      descripcion: 'Sala de cine tradicional',
    },
  });

  const sala2 = await prisma.sala.create({
    data: {
      nombre: 'Sala 2',
      capacidad: 35,
      tipo: 'Sala VIP ',
      descripcion: 'Sala di tipo VIP con trato preferencial',
    },
  });

  const sala3 = await prisma.sala.create({
    data: {
      nombre: 'Sala 3',
      capacidad: 120,
      tipo: 'Sala 3D IMAX',
      descripcion: 'Sala para reproduccion de películas en 3D y experiencia IMAX o 4D',
    },
  });

   //Seeders tabla funciones 
  const funcion1 = await prisma.funcion.create({
    data: {
      peliculaId: pelicula1.id,
      salaId: sala1.id,
      fechaHora: new Date('2023-05-31 18:00:00'),
      precio: 74.99,
    },
  });

  const funcion2 = await prisma.funcion.create({
    data: {
      peliculaId: pelicula2.id,
      salaId: sala2.id,
      fechaHora: new Date('2023-05-31 22:00:00'),
      precio: 175.50,
    },
  });

  const funcion3 = await prisma.funcion.create({
    data: {
      id: 3,
      peliculaId: pelicula3.id,
      salaId: sala3.id,
      fechaHora: new Date('2023-05-31 22:00:00'),
      precio: 125.00,
      disponible: true,
    },
  });

  //Seeders tabla clientes 
  const cliente1 = await prisma.cliente.create({
    data: {
      id: 1,
      nombre: 'Juan Perez',
      correoElectronico: 'juan@mail.com',
      telefono: '8888888888',
    },
  });

  const cliente2 = await prisma.cliente.create({
    data: {
      id: 2,
      nombre: 'Elon Musk',
      correoElectronico: 'tesla@mail.com',
      telefono: '8888888888',
    },
  });

  const cliente3 = await prisma.cliente.create({
    data: {
      id: 3,
      nombre: 'Angelina Jolie',
      correoElectronico: 'angelinajolie@mail.com',
      telefono: '8888888888',
    },
  });

  //Seeders tabla reservacion 
  const reservacion1 = await prisma.reservacion.create({
    data: {
      id: 1,
      funcionId: funcion1.id,
      clienteId: cliente1.id,
      cantidadTickets: 2,
      total: 149.98,
    },
  });

  const reservacion2 = await prisma.reservacion.create({
    data: {
      id: 2,
      funcionId: funcion2.id,
      clienteId: cliente2.id,
      cantidadTickets: 1,
      total: 175.50,
    },
  });

  const reservacion3 = await prisma.reservacion.create({
    data: {
      id: 3,
      funcionId: funcion3.id,
      clienteId: cliente3.id,
      cantidadTickets: 8,
      total: 1000.00,
    },
  });

  console.log('Seed data cargó de manera exitosa :) ');

  // Close Prisma client connection
  await prisma.$disconnect();
};

// Call the seedData function to create the seed data
cinemaSeeder().catch((error) => {
  console.error('Error seeding data:', error);
});



