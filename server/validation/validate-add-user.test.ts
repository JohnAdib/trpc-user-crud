import { describe, expect, it } from 'vitest'
import { validateAddUser } from './validate-add-user'
import { UserRole, UserStatus } from '../../interfaces'

describe('validateAddUser schema', () => {
  it('should validate a valid user input successfully', () => {
    const validUserData = {
      name: 'John Doe',
      email: 'john@example.com',
      role: UserRole.ADMIN,
      bio: 'I am an admin user',
      status: UserStatus.ACTIVE
    }

    const parsed = validateAddUser.parse(validUserData)

    expect(parsed).toEqual(validUserData)
  })

  it('should fail validation with an invalid email', () => {
    const invalidUserData = {
      name: 'John Doe',
      email: 'invalid-email',
      role: UserRole.ADMIN,
      bio: 'I am an admin user',
      status: UserStatus.ACTIVE
    }

    expect(() => validateAddUser.parse(invalidUserData)).toThrowError(
      'Please provide a valid email'
    )
  })

  it('should fail validation with an invalid role', () => {
    const invalidUserData = {
      name: 'John Doe',
      email: 'john@example.com',
      role: 'INVALID_ROLE', // Invalid role
      bio: 'I am an admin user',
      status: UserStatus.ACTIVE
    }

    expect(() => validateAddUser.parse(invalidUserData)).toThrowError(
      'Please provide a valid user role'
    )
  })

  it('should pass validation when optional fields are missing', () => {
    const validUserData = {
      name: 'John Doe',
      email: 'john@example.com',
      role: UserRole.USER // Optional fields are not provided
    }

    const parsed = validateAddUser.parse(validUserData)

    expect(parsed).toEqual(validUserData)
  })

  it('should fail validation with an invalid status', () => {
    const invalidUserData = {
      name: 'John Doe',
      email: 'john@example.com',
      role: UserRole.ADMIN,
      status: 'INVALID_STATUS' // Invalid status
    }

    expect(() => validateAddUser.parse(invalidUserData)).toThrowError(
      'Please provide a valid user status'
    )
  })
})
