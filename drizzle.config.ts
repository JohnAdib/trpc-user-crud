import { defineConfig } from 'drizzle-kit'
import dotenv from 'dotenv'
import { hostname } from 'os'

dotenv.config()

const defaultConnection =
  'postgresql://ThisIsUser:ThisIsPassword@db:5432/trpc-user-crud'

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL || defaultConnection
  }
})
