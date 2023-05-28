import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publication_date: new Date("1960-07-11"),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "1984",
    author: "George Orwell",
    publication_date: new Date("1949-06-08"),
    available: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publication_date: new Date("1813-01-28"),
    available: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const BookSeeder = async () => {
  for (const book of books) {
    const createdBook = await prisma.book.create({
      data: book,
    });

    console.log("Created book:", createdBook);
  }
};
