import { pgTable, serial, varchar, pgEnum, index } from 'drizzle-orm/pg-core'

export const userRoleEnum = pgEnum('user_role', ['user', 'admin'])
export const userStatusEnum = pgEnum('user_status', [
  'active',
  'inactive',
  'pending',
  'blocked'
])

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    role: userRoleEnum('role').notNull(),
    bio: varchar('bio', { length: 1024 }).default(''),
    status: userStatusEnum('status').notNull()
  },
  (table) => {
    return {
      emailIdx: index('email_idx').on(table.email),
      roleIdx: index('role_idx').on(table.role),
      statusIdx: index('status_idx').on(table.status),
      roleStatusIdx: index('role_status_idx').on(table.role, table.status)
    }
  }
)
