import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'
import * as schema from './schema'

const defaultConnection =
  'postgresql://ThisIsUser:ThisIsPassword@db:5432/trpc-user-crud'

const connectionString = process.env.DATABASE_URL || defaultConnection
console.log('connectionString', connectionString)

const dbConnection = new Client({ connectionString })

// Initialize the Drizzle ORM with pglite
export const db = drizzle(dbConnection, { schema })
