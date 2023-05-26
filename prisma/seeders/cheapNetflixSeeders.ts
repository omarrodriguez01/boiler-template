import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const cheapNetflixSeeders = async () => {
  const user = await prisma.user.createMany({
    data: [
      {
        id: 1,
        name: 'Mario Isai Robles Lozano',
        birthDate: new Date('2001-09-14 00:00:00'),
        email: 'marioisai11@hotmail.com',
        userPassword: 'password1',
      },
      {
        id: 2,
        name: 'Myriam Judith Robles Lozano',
        birthDate: new Date('2003-11-06 00:00:00'),
        email: 'myriamjudith22@hotmail.com',
        userPassword: 'password2',
      },
      {
        id: 3,
        name: 'Cesar Miguel Camarillo Cepeda',
        birthDate: new Date('2002-07-08 00:00:00'),
        email: 'cesarmiguel33@hotmail.com',
        userPassword: 'password3',
      },
    ]
  });
  
  console.log({ user });

  const series = await prisma.series.createMany({
    data: [
      {
        id: 1,
        name: 'Fear the Walking Dead',
        description: 'The lives of the residents of Los Angeles turn upside down when a zombie apocalypse occurs. A dysfunctional family has to reinvent itself and adapt to new ways of surviving the disaster.',
        genre: 'Horror',
        rating: 7,
        photo: 'profile photo link',
        releaseDate: new Date('2015-08-23 00:00:00'),
      },
      {
        id: 2,
        name: 'The Office',
        description: 'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.',
        genre: 'Sitcom',
        rating: 9,
        photo: 'profile photo link',
        releaseDate: new Date('2005-12-19 00:00:00'),
      },
      {
        id: 3,
        name: 'Young Sheldon',
        description: 'Sheldon Cooper, a bona fide genius, has been promoted four grades. Meanwhile, he struggles to fit in with his unintellectual family in Texas.',
        genre: 'Comedy',
        rating: 8,
        photo: 'profile photo link',
        releaseDate: new Date('2017-09-25 00:00:00'),
      },
    ]
  });
  
  console.log({ series });

  const season = await prisma.season.createMany({
    data: [
      {
        id: 1,
        seriesId: 1,
        seasonName: 'Season 1',
      },
      {
        id: 2,
        seriesId: 1,
        seasonName: 'Season 2',
      },
      {
        id: 3,
        seriesId: 2,
        seasonName: 'Season 1',
      },
      {
        id: 4,
        seriesId: 3,
        seasonName: 'Season 1',
      },
    ]
  });
  
  console.log({ season });  

  const episode = await prisma.episode.createMany({
    data: [
      {
        id: 1,
        name: 'Pilot',
        releaseDate: new Date('2015-08-23 00:00:00'),
        time: 64,
        rating: 7,
        photo: 'profile photo link',
        description: 'Episode one season one description',
        seasonId: 1,
      },
      {
        id: 2,
        name: 'So close, yet so far',
        releaseDate: new Date('2015-08-29 00:00:00'),
        time: 43,
        rating: 7,
        photo: 'profile photo link',
        description: 'Episode two season one description',
        seasonId: 1,
      },
      {
        id: 3,
        name: 'Monster',
        releaseDate: new Date('2016-04-10 00:00:00'),
        time: 43,
        rating: 7,
        photo: 'profile photo link',
        description: 'Episode one season two description',
        seasonId: 2,
      },
      {
        id: 4,
        name: 'We all fall down',
        releaseDate: new Date('2016-04-17 00:00:00'),
        time: 43,
        rating: 7,
        photo: 'profile photo link',
        description: 'Episode two season two description',
        seasonId: 2,
      },
      {
        id: 5,
        name: 'Pilot',
        releaseDate: new Date('2005-12-19 00:00:00'),
        time: 23,
        rating: 7,
        photo: 'profile photo link',
        description: 'Episode one season one description',
        seasonId: 3,
      },
      {
        id: 6,
        name: 'Diversity Day',
        releaseDate: new Date('2005-12-20 00:00:00'),
        time: 23,
        rating: 8,
        photo: 'profile photo link',
        description: 'Episode two season one description',
        seasonId: 3,
      },
      {
        id: 7,
        name: 'Pilot',
        releaseDate: new Date('2017-09-25 00:00:00'),
        time: 19,
        rating: 8,
        photo: 'profile photo link',
        description: 'Episode one season one description',
        seasonId: 4,
      },
    ]
  });

  console.log({ episode }); 
  
  const movie = await prisma.movie.createMany({
    data: [
      {
        id: 1,
        name: 'Shrek',
        releaseDate: new Date('2001-06-29 00:00:00'),
        time: 90,
        genre: 'Comedy',
        rating: 8,
        photo: 'profile photo link',
        description: 'A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.',
      },
      {
        id: 2,
        name: 'Shrek 2',
        releaseDate: new Date('2002-06-29 00:00:00'),
        time: 90,
        genre: 'Comedy',
        rating: 9,
        photo: 'profile photo link',
        description: 'When Shrek and Fiona return from their honeymoon, her parents, the rulers of Far Far Away, invite them over. But as the king does not like Shrek, he enlists a fairy to keep him away from his daughter.',
      },
      {
        id: 3,
        name: 'Shrek 3',
        releaseDate: new Date('2003-06-29 00:00:00'),
        time: 90,
        genre: 'Comedy',
        rating: 7,
        photo: 'profile photo link',
        description: 'After Shreks father-in-law King Harold becomes sick, Shrek is the next in line to take over. However, he tries to make Artie the king and takes help from Donkey and Puss in Boots.',
      },
    ]
  });
  
  console.log({ movie });  

  const artist = await prisma.artist.createMany({
    data: [
        {
        id: 1,
        name: 'Kim Dickens',
        birthDate: new Date('1980-01-01 00:00:00'),
        originPlace: 'N/A',
        photo: 'profile photo link',
      },
      {
        id: 2,
        name: 'Frank Dillane',
        birthDate: new Date('1995-01-01 00:00:00'),
        originPlace: 'N/A',
        photo: 'profile photo link',
      },
      {
        id: 3,
        name: 'Steve Carell',
        birthDate: new Date('1980-01-01 00:00:00'),
        originPlace: 'N/A',
        photo: 'profile photo link',
      },
      {
        id: 4,
        name: 'John Krasinski',
        birthDate: new Date('1985-01-01 00:00:00'),
        originPlace: 'N/A',
        photo: 'profile photo link',
      },
      {
        id: 5,
        name: 'Iain Armitage',
        birthDate: new Date('2008-01-01 00:00:00'),
        originPlace: 'N/A',
        photo: 'profile photo link',
      },
      {
        id: 6,
        name: 'Mike Myers',
        birthDate: new Date('1963-01-01 00:00:00'),
        originPlace: 'N/A',
        photo: 'profile photo link',
      },
    ]
  });
  
  console.log({ artist });  

  const episodeInvolment = await prisma.episodeInvolment.createMany({
    data: [
      {
        episodeId: 1,
        artistId: 1,
        role: 'Main Role',
      },
      {
        episodeId: 2,
        artistId: 1,
        role: 'Main Role',
      },
      {
        episodeId: 3,
        artistId: 1,
        role: 'Main Role',
      },
      {
        episodeId: 4,
        artistId: 1,
        role: 'Main Role',
      },
      {
        episodeId: 1,
        artistId: 2,
        role: 'Main Role',
      },
      {
        episodeId: 2,
        artistId: 2,
        role: 'Main Role',
      },
      {
        episodeId: 3,
        artistId: 2,
        role: 'Main Role',
      },
      {
        episodeId: 4,
        artistId: 2,
        role: 'Main Role',
      },
      {
        episodeId: 5,
        artistId: 3,
        role: 'Main Role',
      },
      {
        episodeId: 6,
        artistId: 3,
        role: 'Main Role',
      },
      {
        episodeId: 5,
        artistId: 4,
        role: 'Main Role',
      },
      {
        episodeId: 6,
        artistId: 4,
        role: 'Main Role',
      },
      {
        episodeId: 7,
        artistId: 5,
        role: 'Main Role',
      },
    ]
  });

  console.log({ episodeInvolment });
  
  const movieInvolment = await prisma.movieInvolment.createMany({
    data: [
      {
        movieId: 1,
        artistId: 6,
        role: 'Main Role',
      },
      {
        movieId: 2,
        artistId: 6,
        role: 'Main Role',
      },
      {
        movieId: 3,
        artistId: 6,
        role: 'Main Role',
      },
    ]
  });
  
  console.log({ movieInvolment });
  

  const movieUser = await prisma.movieUser.createMany({
    data: [
      {
        movieId: 1,
        userId: 1,
        isLiked: true,
        isDisliked: false,
        inWatchlist: true,
      },
      {
        movieId: 1,
        userId: 2,
        isLiked: true,
        isDisliked: false,
        inWatchlist: false,
      },
      {
        movieId: 1,
        userId: 3,
        isLiked: false,
        isDisliked: false,
        inWatchlist: true,
      },
      {
        movieId: 2,
        userId: 1,
        isLiked: true,
        isDisliked: false,
        inWatchlist: true,
      },
      {
        movieId: 2,
        userId: 2,
        isLiked: true,
        isDisliked: false,
        inWatchlist: false,
      },
      {
        movieId: 2,
        userId: 3,
        isLiked: false,
        isDisliked: false,
        inWatchlist: true,
      },
    ]
  });
  
  console.log({ movieUser });  

  const seriesUser = await prisma.seriesUser.createMany({
    data: [
      {
        seriesId: 1,
        userId: 1,
        isLiked: true,
        isDisliked: false,
        inWatchlist: false,
      },
      {
        seriesId: 2,
        userId: 2,
        isLiked: true,
        isDisliked: false,
        inWatchlist: true,
      },
      {
        seriesId: 3,
        userId: 3,
        isLiked: false,
        isDisliked: true,
        inWatchlist: false,
      },
    ]
  });
  
  console.log({ seriesUser });  

  const family = await prisma.family.createMany({
    data: [
      {
        id: 1,
        email: 'marioisai44@hotmail.com',
      },
      {
        id: 2,
        email: 'algo@hotmail.com',
      },
      {
        id: 3,
        email: 'alguien@hotmail.com',
      },
    ]
  });
  
  console.log({ family });  

  const belongsTo = await prisma.belongsTo.createMany({
    data: [
      {
        familyId: 1,
        userId: 1,
        isHead: true,
      },
      {
        familyId: 1,
        userId: 2,
        isHead: false,
      },
      {
        familyId: 2,
        userId: 3,
        isHead: true,
      },
    ]
  });
  
  console.log({ belongsTo });  
}

/*
seasons season[], users seriesUser[] for series model
episodes video[] for season model
artist involment[], movies movieUser[] for video model
video involment[] for artist model
family belongsTo[] for family model
*/