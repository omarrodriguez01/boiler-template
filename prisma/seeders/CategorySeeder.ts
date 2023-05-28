import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
  {
    name: "Fiction",
    description: "Books that are made-up stories",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Non-Fiction",
    description: "Books based on real events and facts",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Mystery",
    description: "Books that involve solving a puzzle or crime",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const CategorySeeder = async () => {
  for (const category of categories) {
    const createdCategory = await prisma.category.create({
      data: category,
    });

    console.log("Created category:", createdCategory);
  }
};
