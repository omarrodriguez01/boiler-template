import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const bookCategories = [
  {
    bookid: 1,
    categoryid: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    bookid: 2,
    categoryid: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    bookid: 3,
    categoryid: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const BookCategorySeeder = async () => {
  for (const bookCategory of bookCategories) {
    const createdBookCategory = await prisma.bookCategory.create({
      data: bookCategory,
    });

    console.log("Created book category:", createdBookCategory);
  }
};
