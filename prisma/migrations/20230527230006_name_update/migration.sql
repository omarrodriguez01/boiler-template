/*
  Warnings:

  - Made the column `name_product` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "name_product" SET NOT NULL;
