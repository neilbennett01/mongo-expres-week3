import { MongoClient } from "mongodb"

export const getDb = async () => {
    const client = new MongoClient(process.env.MONGO_URL)
    await client.connect()

    return client.db("mongo-week3-express")
}

export const getBlockchainsCollection = async() => {
    const db = await getDb()

    return db.collection("blockchains")
}