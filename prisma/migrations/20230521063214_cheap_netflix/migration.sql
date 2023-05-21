-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "userPassword" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "series" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "season" (
    "id" SERIAL NOT NULL,
    "seriesId" INTEGER NOT NULL,
    "seasonName" TEXT NOT NULL,

    CONSTRAINT "season_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "video" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "time" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "seasonId" INTEGER NOT NULL,

    CONSTRAINT "video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "originPlace" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "involment" (
    "videoId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "involment_pkey" PRIMARY KEY ("videoId","artistId")
);

-- CreateTable
CREATE TABLE "movieUser" (
    "movieId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isLiked" BOOLEAN NOT NULL DEFAULT false,
    "isDisliked" BOOLEAN NOT NULL DEFAULT false,
    "inWatchlist" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "movieUser_pkey" PRIMARY KEY ("movieId","userId")
);

-- CreateTable
CREATE TABLE "seriesUser" (
    "seriesId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isLiked" BOOLEAN NOT NULL DEFAULT false,
    "isDisliked" BOOLEAN NOT NULL DEFAULT false,
    "inWatchlist" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "seriesUser_pkey" PRIMARY KEY ("seriesId","userId")
);

-- CreateTable
CREATE TABLE "family" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "family_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "belongsTo" (
    "familyId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isHead" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "belongsTo_pkey" PRIMARY KEY ("familyId","userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "series_id_key" ON "series"("id");

-- CreateIndex
CREATE UNIQUE INDEX "season_id_key" ON "season"("id");

-- CreateIndex
CREATE UNIQUE INDEX "video_id_key" ON "video"("id");

-- CreateIndex
CREATE UNIQUE INDEX "artist_id_key" ON "artist"("id");

-- CreateIndex
CREATE UNIQUE INDEX "family_id_key" ON "family"("id");

-- AddForeignKey
ALTER TABLE "season" ADD CONSTRAINT "season_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "series"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video" ADD CONSTRAINT "video_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "season"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "involment" ADD CONSTRAINT "involment_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "involment" ADD CONSTRAINT "involment_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movieUser" ADD CONSTRAINT "movieUser_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movieUser" ADD CONSTRAINT "movieUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seriesUser" ADD CONSTRAINT "seriesUser_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "series"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seriesUser" ADD CONSTRAINT "seriesUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "belongsTo" ADD CONSTRAINT "belongsTo_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "family"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "belongsTo" ADD CONSTRAINT "belongsTo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
