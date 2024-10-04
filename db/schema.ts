import { pgTable, serial, varchar, pgEnum } from 'drizzle-orm/pg-core'

// Define PostgreSQL enums for role and status
export const userRoleEnum = pgEnum('user_role', ['user', 'admin'])
export const userStatusEnum = pgEnum('user_status', [
  'active',
  'inactive',
  'pending',
  'blocked'
])

// Define the users table schema
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  role: userRoleEnum('role').notNull(),
  bio: varchar('bio', { length: 1024 }).default(''),
  status: userStatusEnum('status').notNull()
})
