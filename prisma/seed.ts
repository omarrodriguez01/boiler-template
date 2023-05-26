import { PrismaClient } from '@prisma/client'
// import { studentSeeder } from './seeders/studentsSeeder'
import { cheapNetflixSeeders } from './seeders/cheapNetflixSeeders'


const prisma = new PrismaClient()


async function main() {
    // await studentSeeder();
    await cheapNetflixSeeders();
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  /*
SELECT id, name, "birthDate", "originPlace", photo, "createdAt", "updatedAt" FROM public.artist;
SELECT "familyId", "userId", "isHead", "createdAt", "updatedAt" FROM public."belongsTo";
SELECT id, name, "releaseDate", "time", rating, photo, description, "seasonId", "createdAt", "updatedAt" FROM public.episode;
SELECT "episodeId", "artistId", role, "createdAt", "updatedAt" FROM public."episodeInvolment";
SELECT id, email, "createdAt", "updatedAt" FROM public.family;
SELECT id, name, "releaseDate", "time", genre, rating, photo, description, "createdAt", "updatedAt" FROM public.movie;
SELECT "movieId", "artistId", role, "createdAt", "updatedAt" FROM public."movieInvolment";
SELECT "movieId", "userId", "isLiked", "isDisliked", "inWatchlist", "createdAt", "updatedAt" FROM public."movieUser";
SELECT id, "seriesId", "seasonName", "createdAt", "updatedAt" FROM public.season;
SELECT id, name, description, genre, rating, photo, "releaseDate", "createdAt", "updatedAt" FROM public.series;
SELECT "seriesId", "userId", "isLiked", "isDisliked", "inWatchlist", "createdAt", "updatedAt" FROM public."seriesUser";
SELECT id, name, "birthDate", email, "userPassword", "createdAt", "updatedAt" FROM public."user";

DELETE FROM public.artist;
DELETE FROM public.episode;
DELETE FROM public.family;
DELETE FROM public.movie;
DELETE FROM public.season;
DELETE FROM public.series;
DELETE FROM public."user";
  */