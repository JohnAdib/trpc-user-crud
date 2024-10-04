import { defineConfig } from 'drizzle-kit'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/drizzle'
})
