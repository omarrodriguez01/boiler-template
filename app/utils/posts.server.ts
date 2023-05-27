import prisma from "./db"

export const getPosts = async (forumId: number) => {
    return prisma.review.findMany({
        where: {
            forumId: forumId
        }
    })
    .catch(error => {
        console.error("error en la base de datos")
      })
  }

export const getPost = async (reviewId: number) => {
    return prisma.review.findUnique({
        where : {
            id: reviewId
        }
    }).catch(error => {
        console.error("error en la base de datos")
      })
}

export const updatePost = async (reviewId: number, newComment: any) => {
    return prisma.review.update({
        where : {
            id: reviewId
        },
        data : {
            comments: newComment
        }
    }).catch(error => {
        console.error("error en la base de datos")
      })
}

export const createPost = async (comment:any, forumId: number, stars: number) => {
    return prisma.review.create({
        data: {
            userId: 1,
            movieId: 1,
            forumId: forumId,
            stars: stars,
            comments: comment
        }

    }).catch(error => {
        console.error("error en la base de datos")
      })
}

export const deletePost = async (postId: number) => {
    return prisma.review.delete({
        where: {
            id: postId
        }
    }).catch(error => {
        console.error("error en la base de datos")
      })
}