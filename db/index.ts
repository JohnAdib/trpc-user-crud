import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'
import * as schema from './schema'
import { getDbConnectionString } from './get-db-connection-string'

const connectionString = getDbConnectionString()
const dbConnection = new Client({ connectionString })

// Initialize the Drizzle ORM with pglite
export const db = drizzle(dbConnection, { schema })
