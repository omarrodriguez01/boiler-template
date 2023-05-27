/*
  Warnings:

  - Added the required column `salaId` to the `Funcion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Funcion" ADD COLUMN     "salaId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Funcion" ADD CONSTRAINT "Funcion_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
