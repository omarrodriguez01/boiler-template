/*
  Warnings:

  - Added the required column `updatedAt` to the `detalle_Ventas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ventas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "detalle_Ventas" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "productos" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ventas" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
