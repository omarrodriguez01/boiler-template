import { PrismaClient } from "@prisma/client";
import { restaurantSeeder } from "./seeders/restaurantSeeder";
import { tableSeeder } from "./seeders/tableSeeder";
import { dishSeeder } from "./seeders/dishSeeder";
import { orderSeeder } from "./seeders/orderSeeder";
import { orderItemSeeder } from "./seeders/orderItemSeeder";
import { paymentSeeder } from "./seeders/paymentSeeder";

const prisma = new PrismaClient();

async function main() {
  await restaurantSeeder();
  await tableSeeder();
  await dishSeeder();
  await orderSeeder();
  await orderItemSeeder();
  await paymentSeeder();
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
