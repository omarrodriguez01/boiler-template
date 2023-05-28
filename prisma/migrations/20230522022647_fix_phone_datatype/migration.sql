/*
  Warnings:

  - You are about to drop the column `genre` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "genre";

-- AlterTable
ALTER TABLE "Member" ALTER COLUMN "phone" SET DATA TYPE TEXT;
