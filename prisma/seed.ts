import { PrismaClient } from "@prisma/client";
// import { studentSeeder } from './seeders/studentsSeeder'
import { BookSeeder } from "./seeders/BookSeeder";
import { MemberSeeder } from "./seeders/MemberSeeder";
import { LoanSeeder } from "./seeders/LoanSeeder";
import { CategorySeeder } from "./seeders/CategorySeeder";
import { BookCategorySeeder } from "./seeders/BookCategorySeeder";

const prisma = new PrismaClient();

async function main() {
  await BookSeeder();
  await MemberSeeder();
  await CategorySeeder();
  await LoanSeeder();
  await BookCategorySeeder();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
