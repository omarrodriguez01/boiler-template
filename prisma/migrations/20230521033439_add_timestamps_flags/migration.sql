/*
  Warnings:

  - Added the required column `updatedAt` to the `Boleta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Funcion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Pelicula` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Sala` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Boleta" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Funcion" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Pelicula" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Sala" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
