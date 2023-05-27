import { Prisma } from '@prisma/client'
import prisma from "./db"

export const getForums = async () => {
  let forums = null
  forums = await prisma.forum.findMany()
  .catch(error => {
      console.error("error en la base de datos")
    })
    return forums
  }