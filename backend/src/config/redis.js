import { createClient } from "redis";
import { config } from "dotenv";

config()

const REDIS_USERNAME = process.env.REDIS_USERNAME
const REDIS_PASSWORD = process.env.REDIS_PASSWORD
const REDIS_HOST = process.env.REDIS_HOST
const REDIS_PORT = process.env.REDIS_PORT

const url = `redis://${REDIS_USERNAME}:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`
const client = createClient({url})
client.on('error', err => {
        console.log('Redis Client Error', err)
        client.connect()
    })
client.connect()

export default client