/*
  Warnings:

  - You are about to drop the column `releaseYear` on the `series` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `artist` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `birthDate` on the `artist` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `belongsTo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `family` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `involment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `movieUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `season` table without a default value. This is not possible if the table is not empty.
  - Added the required column `releaseDate` to the `series` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `series` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `seriesUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `video` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `releaseDate` on the `video` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "artist" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "birthDate",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "belongsTo" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "family" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "involment" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "movieUser" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "season" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "series" DROP COLUMN "releaseYear",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "releaseDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "seriesUser" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "video" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "releaseDate",
ADD COLUMN     "releaseDate" TIMESTAMP(3) NOT NULL;
