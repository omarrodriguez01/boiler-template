/*
  Warnings:

  - Added the required column `updatedAt` to the `empleados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `orden_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ordenes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `productos_menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "empleados" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "orden_items" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ordenes" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "productos_menu" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
