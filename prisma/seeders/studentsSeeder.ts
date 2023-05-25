import { PrismaClient, Book, Author, Member } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Create three Book objects
    const book1: Book = await prisma.book.create({
      data: {
        title: 'Book 1',
        author: 'Author 1',
        publicationYear: 2021,
        availability: true,
      },
    });

    const book2: Book = await prisma.book.create({
      data: {
        title: 'Book 2',
        author: 'Author 2',
        publicationYear: 2022,
        availability: true,
      },
    });

    const book3: Book = await prisma.book.create({
      data: {
        title: 'Book 3',
        author: 'Author 3',
        publicationYear: 2023,
        availability: false,
      },
    });

    // Create three Author objects
    const author1: Author = await prisma.author.create({
      data: {
        name: 'Author 1',
        biography: 'Biography 1',
      },
    });

    const author2: Author = await prisma.author.create({
      data: {
        name: 'Author 2',
        biography: 'Biography 2',
      },
    });

    const author3: Author = await prisma.author.create({
      data: {
        name: 'Author 3',
        biography: 'Biography 3',
      },
    });

    // Create three Member objects
    const member1: Member = await prisma.member.create({
      data: {
        name: 'Member 1',
        address: 'Address 1',
        phone: '123456789',
        email: 'member1@example.com',
        membershipStatus: 'Active',
      },
    });

    const member2: Member = await prisma.member.create({
      data: {
        name: 'Member 2',
        address: 'Address 2',
        phone: '987654321',
        email: 'member2@example.com',
        membershipStatus: 'Active',
      },
    });

    const member3: Member = await prisma.member.create({
      data: {
        name: 'Member 3',
        address: 'Address 3',
        phone: '111222333',
        email: 'member3@example.com',
        membershipStatus: 'Inactive',
      },
    });

    console.log('Seeder executed successfully');
  } catch (error) {
    console.error('Error executing seeder:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();