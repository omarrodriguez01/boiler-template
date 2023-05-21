import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const cheapNetflixSeeders = async () => {
  const user1 = await prisma.user.create({
    data: {
      id: 1,
      name: 'Mario Isai Robles Lozano',
      birthDate: new Date('2001-09-14 00:00:00'),
      email: 'marioisai11@hotmail.com',
      userPassword: 'password1',
    },
  })
  
  const user2 = await prisma.user.create({
    data: {
      id: 2,
      name: 'Myriam Judith Robles Lozano',
      birthDate: new Date('2003-11-06 00:00:00'),
      email: 'myriamjudith22@hotmail.com',
      userPassword: 'password2',
    },
  });
  
  const user3 = await prisma.user.create({
    data: {
      id: 3,
      name: 'Cesar Miguel Camarillo Cepeda',
      birthDate: new Date('2002-07-08 00:00:00'),
      email: 'cesarmiguel33@hotmail.com',
      userPassword: 'password3',
    },
  });
  
  console.log({ user1, user2, user3 });

  const series1 = await prisma.series.create({
    data: {
      id: 1,
      name: 'Fear the Walking Dead',
      description: 'The lives of the residents of Los Angeles turn upside down when a zombie apocalypse occurs. A dysfunctional family has to reinvent itself and adapt to new ways of surviving the disaster.',
      genre: 'Horror',
      rating: 7,
      photo: 'profile photo link',
      releaseDate: new Date('2015-08-23 00:00:00'),
    },
  });
  
  const series2 = await prisma.series.create({
    data: {
      id: 2,
      name: 'The Office',
      description: 'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.',
      genre: 'Sitcom',
      rating: 9,
      photo: 'profile photo link',
      releaseDate: new Date('2005-12-19 00:00:00'),
    },
  });
  
  const series3 = await prisma.series.create({
    data: {
      id: 3,
      name: 'Young Sheldon',
      description: 'Sheldon Cooper, a bona fide genius, has been promoted four grades. Meanwhile, he struggles to fit in with his unintellectual family in Texas.',
      genre: 'Comedy',
      rating: 8,
      photo: 'profile photo link',
      releaseDate: new Date('2017-09-25 00:00:00'),
    },
  });
  
  console.log({ series1, series2, series3 });

  const season1 = await prisma.season.create({
    data: {
      id: 1,
      seriesId: 1,
      seasonName: 'Season 1',
    },
  });
  
  const season2 = await prisma.season.create({
    data: {
      id: 2,
      seriesId: 1,
      seasonName: 'Season 2',
    },
  });
  
  const season3 = await prisma.season.create({
    data: {
      id: 3,
      seriesId: 2,
      seasonName: 'Season 1',
    },
  });
  
  const season4 = await prisma.season.create({
    data: {
      id: 4,
      seriesId: 3,
      seasonName: 'Season 1',
    },
  });
  
  console.log({ season1, season2, season3, season4 });  

  const video1 = await prisma.video.create({
    data: {
      id: 1,
      name: 'Pilot',
      releaseDate: new Date('2015-08-23 00:00:00'),
      time: 64,
      genre: 'N/A',
      rating: 7,
      photo: 'profile photo link',
      description: 'Episode one season one description',
      seasonId: 1,
    },
  });
  
  const video2 = await prisma.video.create({
    data: {
      id: 2,
      name: 'So close, yet so far',
      releaseDate: new Date('2015-08-29 00:00:00'),
      time: 43,
      genre: 'N/A',
      rating: 7,
      photo: 'profile photo link',
      description: 'Episode two season one description',
      seasonId: 1,
    },
  });
  
  const video3 = await prisma.video.create({
    data: {
      id: 3,
      name: 'Monster',
      releaseDate: new Date('2016-04-10 00:00:00'),
      time: 43,
      genre: 'N/A',
      rating: 7,
      photo: 'profile photo link',
      description: 'Episode one season two description',
      seasonId: 2,
    },
  });
  
  const video4 = await prisma.video.create({
    data: {
      id: 4,
      name: 'We all fall down',
      releaseDate: new Date('2016-04-17 00:00:00'),
      time: 43,
      genre: 'N/A',
      rating: 7,
      photo: 'profile photo link',
      description: 'Episode two season two description',
      seasonId: 2,
    },
  });
  
  const video5 = await prisma.video.create({
    data: {
      id: 5,
      name: 'Pilot',
      releaseDate: new Date('2005-12-19 00:00:00'),
      time: 23,
      genre: 'N/A',
      rating: 7,
      photo: 'profile photo link',
      description: 'Episode one season one description',
      seasonId: 3,
    },
  });
  
  const video6 = await prisma.video.create({
    data: {
      id: 6,
      name: 'Diversity Day',
      releaseDate: new Date('2005-12-20 00:00:00'),
      time: 23,
      genre: 'N/A',
      rating: 8,
      photo: 'profile photo link',
      description: 'Episode two season one description',
      seasonId: 3,
    },
  });
  
  const video7 = await prisma.video.create({
    data: {
      id: 7,
      name: 'Pilot',
      releaseDate: new Date('2017-09-25 00:00:00'),
      time: 19,
      genre: 'N/A',
      rating: 8,
      photo: 'profile photo link',
      description: 'Episode one season one description',
      seasonId: 4,
    },
  });
  
  const video8 = await prisma.video.create({
    data: {
      id: 8,
      name: 'Shrek',
      releaseDate: new Date('2001-06-29 00:00:00'),
      time: 90,
      genre: 'Comedy',
      rating: 8,
      photo: 'profile photo link',
      description: 'A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.',
      seasonId: 0,
    },
  });
  
  console.log({ video1, video2, video3, video4, video5, video6, video7, video8 });  

  const artist1 = await prisma.artist.create({
    data: {
      id: 1,
      name: 'Kim Dickens',
      birthDate: new Date('1980-01-01 00:00:00'),
      originPlace: 'N/A',
      photo: 'profile photo link',
    },
  });
  
  const artist2 = await prisma.artist.create({
    data: {
      id: 2,
      name: 'Frank Dillane',
      birthDate: new Date('1995-01-01 00:00:00'),
      originPlace: 'N/A',
      photo: 'profile photo link',
    },
  });
  
  const artist3 = await prisma.artist.create({
    data: {
      id: 3,
      name: 'Steve Carell',
      birthDate: new Date('1980-01-01 00:00:00'),
      originPlace: 'N/A',
      photo: 'profile photo link',
    },
  });
  
  const artist4 = await prisma.artist.create({
    data: {
      id: 4,
      name: 'John Krasinski',
      birthDate: new Date('1985-01-01 00:00:00'),
      originPlace: 'N/A',
      photo: 'profile photo link',
    },
  });
  
  const artist5 = await prisma.artist.create({
    data: {
      id: 5,
      name: 'Iain Armitage',
      birthDate: new Date('2008-01-01 00:00:00'),
      originPlace: 'N/A',
      photo: 'profile photo link',
    },
  });
  
  const artist6 = await prisma.artist.create({
    data: {
      id: 6,
      name: 'Mike Myers',
      birthDate: new Date('1963-01-01 00:00:00'),
      originPlace: 'N/A',
      photo: 'profile photo link',
    },
  });
  
  console.log({ artist1, artist2, artist3, artist4, artist5, artist6 });  

  const involvement1 = await prisma.involment.create({
    data: {
      videoId: 1,
      artistId: 1,
      role: 'Main Role',
    },
  });
  
  const involvement2 = await prisma.involment.create({
    data: {
      videoId: 2,
      artistId: 1,
      role: 'Main Role',
    },
  });
  
  const involvement3 = await prisma.involment.create({
    data: {
      videoId: 3,
      artistId: 1,
      role: 'Main Role',
    },
  });
  
  const involvement4 = await prisma.involment.create({
    data: {
      videoId: 4,
      artistId: 1,
      role: 'Main Role',
    },
  });
  
  const involvement5 = await prisma.involment.create({
    data: {
      videoId: 1,
      artistId: 2,
      role: 'Main Role',
    },
  });
  
  const involvement6 = await prisma.involment.create({
    data: {
      videoId: 2,
      artistId: 2,
      role: 'Main Role',
    },
  });
  
  const involvement7 = await prisma.involment.create({
    data: {
      videoId: 3,
      artistId: 2,
      role: 'Main Role',
    },
  });
  
  const involvement8 = await prisma.involment.create({
    data: {
      videoId: 4,
      artistId: 2,
      role: 'Main Role',
    },
  });
  
  const involvement9 = await prisma.involment.create({
    data: {
      videoId: 5,
      artistId: 3,
      role: 'Main Role',
    },
  });
  
  const involvement10 = await prisma.involment.create({
    data: {
      videoId: 6,
      artistId: 3,
      role: 'Main Role',
    },
  });
  
  const involvement11 = await prisma.involment.create({
    data: {
      videoId: 5,
      artistId: 4,
      role: 'Main Role',
    },
  });
  
  const involvement12 = await prisma.involment.create({
    data: {
      videoId: 6,
      artistId: 4,
      role: 'Main Role',
    },
  });
  
  const involvement13 = await prisma.involment.create({
    data: {
      videoId: 7,
      artistId: 5,
      role: 'Main Role',
    },
  });
  
  const involvement14 = await prisma.involment.create({
    data: {
      videoId: 8,
      artistId: 6,
      role: 'Main Role',
    },
  });
  
  console.log({ involvement1, involvement2, involvement3, involvement4, involvement5, involvement6, involvement7, involvement8, involvement9, involvement10, involvement11, involvement12, involvement13, involvement14 });
  

  const movieUser1 = await prisma.movieUser.create({
    data: {
      movieId: 1,
      userId: 1,
      isLiked: true,
      isDisliked: false,
      inWatchlist: true,
    },
  });
  
  const movieUser2 = await prisma.movieUser.create({
    data: {
      movieId: 1,
      userId: 2,
      isLiked: true,
      isDisliked: false,
      inWatchlist: false,
    },
  });
  
  const movieUser3 = await prisma.movieUser.create({
    data: {
      movieId: 1,
      userId: 3,
      isLiked: false,
      isDisliked: false,
      inWatchlist: true,
    },
  });
  
  console.log({ movieUser1, movieUser2, movieUser3 });  

  const seriesUser1 = await prisma.seriesUser.create({
    data: {
      seriesId: 1,
      userId: 1,
      isLiked: true,
      isDisliked: false,
      inWatchlist: false,
    },
  });
  
  const seriesUser2 = await prisma.seriesUser.create({
    data: {
      seriesId: 2,
      userId: 2,
      isLiked: true,
      isDisliked: false,
      inWatchlist: true,
    },
  });
  
  const seriesUser3 = await prisma.seriesUser.create({
    data: {
      seriesId: 3,
      userId: 3,
      isLiked: false,
      isDisliked: true,
      inWatchlist: false,
    },
  });
  
  console.log({ seriesUser1, seriesUser2, seriesUser3 });  

  const family1 = await prisma.family.create({
    data: {
      id: 1,
      email: 'marioisai44@hotmail.com',
    },
  });
  
  const family2 = await prisma.family.create({
    data: {
      id: 2,
      email: 'algo@hotmail.com',
    },
  });
  
  const family3 = await prisma.family.create({
    data: {
      id: 3,
      email: 'alguien@hotmail.com',
    },
  });
  
  console.log({ family1, family2, family3 });  

  const belongsTo1 = await prisma.belongsTo.create({
    data: {
      familyId: 1,
      userId: 1,
      isHead: true,
    },
  });
  
  const belongsTo2 = await prisma.belongsTo.create({
    data: {
      familyId: 1,
      userId: 2,
      isHead: false,
    },
  });
  
  const belongsTo3 = await prisma.belongsTo.create({
    data: {
      familyId: 2,
      userId: 3,
      isHead: true,
    },
  });
  
  console.log({ belongsTo1, belongsTo2, belongsTo3 });  
}

cheapNetflixSeeders()
.catch((error) => {
  console.error('Error executing seeders:', error);
})
.finally(async () => {
  await prisma.$disconnect();
});

/*
seasons season[], users seriesUser[] for series model
episodes video[] for season model
artist involment[], movies movieUser[] for video model
video involment[] for artist model
family belongsTo[] for family model
*/