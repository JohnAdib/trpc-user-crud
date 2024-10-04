import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'
import * as schema from './schema'

const connectionString = process.env.DATABASE_URL
console.log('connectionString', connectionString)

const dbConnection = new Client({ connectionString })

// Initialize the Drizzle ORM with pglite
export const db = drizzle(dbConnection, { schema })
