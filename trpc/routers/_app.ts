import {
  validatePagination,
  validateUserId,
  validateAddUser
} from '@server/validation'
import { baseProcedure, createTRPCRouter } from '../init'
import { services } from '@server/services'

export const appRouter = createTRPCRouter({
  getUsers: baseProcedure.input(validatePagination).query(({ input }) => {
    return services.users.getUsers(input)
  }),

  getUserById: baseProcedure.input(validateUserId).query(({ input }) => {
    return services.users.getUserById(input)
  }),

  addUser: baseProcedure.input(validateAddUser).mutation(({ input }) => {
    return services.users.addUser(input)
  }),

  deleteUser: baseProcedure.input(validateUserId).mutation(({ input }) => {
    return services.users.deleteUser(input)
  })
})

export type TRPCRouter = typeof appRouter
