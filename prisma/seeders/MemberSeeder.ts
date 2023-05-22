import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const members = [
  {
    name: "John Doe",
    address: "123 Main St",
    phone: "1234567890",
    email: "john@example.com",
    join_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Jane Smith",
    address: "456 Elm St",
    phone: "9876543210",
    email: "jane@example.com",
    join_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Michael Johnson",
    address: "789 Oak St",
    phone: "5555555555",
    email: "michael@example.com",
    join_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const MemberSeeder = async () => {
  for (const member of members) {
    const createdMember = await prisma.member.create({
      data: member,
    });

    console.log("Created member:", createdMember);
  }
};
