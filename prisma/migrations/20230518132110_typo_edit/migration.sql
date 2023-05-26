/*
  Warnings:

  - You are about to drop the column `employeer_name` on the `Employees` table. All the data in the column will be lost.
  - Added the required column `employee_name` to the `Employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employees" DROP COLUMN "employeer_name",
ADD COLUMN     "employee_name" TEXT NOT NULL;
