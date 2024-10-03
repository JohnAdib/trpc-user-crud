import { z } from 'zod'
import { baseProcedure, createTRPCRouter } from '../init'
import { addUser } from '@server/services/add-user'
import { deleteUser } from '@server/services/delete-user'
import { getUserById } from '@server/services/get-user-by-id'
import { getUsers } from '@server/services/get-users'
import { validateAddUser } from '@server/validation/validate-add-user'
import { validateUserId } from '@server/validation/validate-user-id'
import { validatePagination } from '@server/validation/validate-pagination'

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string()
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`
      }
    }),
  getUsers: baseProcedure.input(validatePagination).query(({ input }) => {
    return getUsers(input)
  }),

  getUserById: baseProcedure.input(validateUserId).query(({ input }) => {
    return getUserById(input)
  }),

  addUser: baseProcedure.input(validateAddUser).mutation(({ input }) => {
    return addUser(input)
  }),

  deleteUser: baseProcedure.input(validateUserId).mutation(({ input }) => {
    return deleteUser(input)
  })
})

export type TRPCRouter = typeof appRouter
