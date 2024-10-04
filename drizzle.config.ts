import { defineConfig } from 'drizzle-kit'
import { getDbConnectionString } from './db/get-db-connection-string'

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/drizzle',
  dbCredentials: { url: getDbConnectionString() }
})
