import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'
import { getDbConnectionString } from './get-db-connection-string'

const connectionString = getDbConnectionString()
const pool = new Pool({ connectionString })

export const db = drizzle(pool, { schema })
