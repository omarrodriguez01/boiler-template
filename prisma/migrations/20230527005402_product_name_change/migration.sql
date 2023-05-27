/*
  Warnings:

  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name_product]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Product_name_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "name",
ADD COLUMN     "name_product" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_product_key" ON "Product"("name_product");
