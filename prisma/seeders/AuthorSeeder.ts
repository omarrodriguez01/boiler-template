import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const authorSeeder = async () => {
    const author = await prisma.author.createMany({
        data: [
            { name: 'Hanya Yanagihara', bio: 'Hanya Yanagihara (born 1974) is an American novelist, editor, and travel writer. She grew up in Hawaii. She is best known for her bestselling novel A Little Life, which was shortlisted for the 2015 Booker Prize, and for being the editor-in-chief of T Magazine.' },
            { name: 'Victor Hugo', bio: 'Victor-Marie Hugo (French:; 26 February 1802 – 22 May 1885) was a French Romantic writer and politician. During a literary career that spanned more than sixty years, he wrote in a variety of genres and forms. He is considered to be one of the greatest French writers of all time.' },
            { name: 'Fyodor Dostoevsky', bio: 'Dostoyevsky was a Russian novelist, short story writer, essayist and journalist. Numerous literary critics regard him as one of the greatest novelists in all of world literature, as many of his works are considered highly influential masterpieces.' },
            { name: 'Franz Kafka', bio: 'Franz Kafka was a German-speaking Bohemian novelist and short-story writer based in Prague, who is widely regarded as one of the major figures of 20th-century literature. His work fuses elements of realism and the fantastic.' },
            { name: 'Julio Cortázar', bio: 'Julio Cortázar was an Argentine, nationalized French novelist, short story writer, essayist, and translator. Known as one of the founders of the Latin American Boom, Cortázar influenced an entire generation of Spanish-speaking readers and writers in America and Europe' },
        ]
      })
  console.log({ author })
}