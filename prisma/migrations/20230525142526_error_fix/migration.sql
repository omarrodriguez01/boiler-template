/*
  Warnings:

  - You are about to drop the `involment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `video` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "involment" DROP CONSTRAINT "involment_artistId_fkey";

-- DropForeignKey
ALTER TABLE "involment" DROP CONSTRAINT "involment_videoId_fkey";

-- DropForeignKey
ALTER TABLE "movieUser" DROP CONSTRAINT "movieUser_movieId_fkey";

-- DropForeignKey
ALTER TABLE "video" DROP CONSTRAINT "video_seasonId_fkey";

-- DropTable
DROP TABLE "involment";

-- DropTable
DROP TABLE "video";

-- CreateTable
CREATE TABLE "episode" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "time" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "seasonId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "episode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "time" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "episodeInvolment" (
    "episodeId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "episodeInvolment_pkey" PRIMARY KEY ("episodeId","artistId")
);

-- CreateTable
CREATE TABLE "movieInvolment" (
    "movieId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movieInvolment_pkey" PRIMARY KEY ("movieId","artistId")
);

-- CreateIndex
CREATE UNIQUE INDEX "episode_id_key" ON "episode"("id");

-- CreateIndex
CREATE UNIQUE INDEX "movie_id_key" ON "movie"("id");

-- AddForeignKey
ALTER TABLE "episode" ADD CONSTRAINT "episode_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "season"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "episodeInvolment" ADD CONSTRAINT "episodeInvolment_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "episode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "episodeInvolment" ADD CONSTRAINT "episodeInvolment_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movieInvolment" ADD CONSTRAINT "movieInvolment_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movieInvolment" ADD CONSTRAINT "movieInvolment_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movieUser" ADD CONSTRAINT "movieUser_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
