import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const loans = [
  {
    book_id: 1,
    member_id: 1,
    loan_date: new Date(),
    due_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    book_id: 2,
    member_id: 2,
    loan_date: new Date(),
    due_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    book_id: 3,
    member_id: 3,
    loan_date: new Date(),
    due_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const LoanSeeder = async () => {
  for (const loan of loans) {
    const createdLoan = await prisma.loan.create({
      data: loan,
    });

    console.log("Created loan:", createdLoan);
  }
};
