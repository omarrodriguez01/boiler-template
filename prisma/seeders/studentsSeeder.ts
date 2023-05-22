import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


export const studentSeeder= async () => {
  const country1 = await prisma.countries.create({
    data: {
      name: "Land of Fire",
      citizen_amount: 10000,
    },
  })
  console.log({ country1 })

  const country2 = await prisma.countries.create({
    data: {
      name: "Land of Earth",
      citizen_amount: 5000,
    },
  })
  console.log({ country2 })

  const country3 = await prisma.countries.create({
    data: {
      name: "Land of Iron",
      citizen_amount: 10000,
    },
  })
  console.log({ country3 })
  
  const village1 = await prisma.villages.create({
    data: {
      name: "Leaf Village",
      country_id: 1,
    },
  })
  console.log({ village1 })

  const village2 = await prisma.villages.create({
    data: {
      name: "Rock Village",
      country_id: 2,
    },
  })
  console.log({ village2 })

  const village3 = await prisma.villages.create({
    data: {
      name: "Hacho Village",
      country_id: 1,
    },
  })
  console.log({ village3 })


  const ninja1 = await prisma.characters.create({
      data: {
        name: "Sasuke Uchiha",
        village_id: 1,
      },
    })
    console.log({ ninja1 })
    
    const ninja2 = await prisma.characters.create({
      data: {
        name: "Naruto Uzumaki",
        village_id: 1,
      },
    })
    console.log({ ninja2 })

    const ninja3 = await prisma.characters.create({
      data: {
        name: "Kenji",
        village_id: 2,
      },
    })
    console.log({ ninja3 })
}
