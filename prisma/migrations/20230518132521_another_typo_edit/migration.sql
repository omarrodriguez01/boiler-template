/*
  Warnings:

  - You are about to drop the column `customer_specialty` on the `Employees` table. All the data in the column will be lost.
  - Added the required column `employee_specialty` to the `Employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employees" DROP COLUMN "customer_specialty",
ADD COLUMN     "employee_specialty" TEXT NOT NULL;
