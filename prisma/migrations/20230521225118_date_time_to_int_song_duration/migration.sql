/*
  Warnings:

  - Changed the type of `duracion` on the `Cancion` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Cancion" DROP COLUMN "duracion",
ADD COLUMN     "duracion" INTEGER NOT NULL;
