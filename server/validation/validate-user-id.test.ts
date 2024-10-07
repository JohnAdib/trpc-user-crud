import { describe, expect, it } from 'vitest'
import { validateUserId } from './validate-user-id'

describe('validateUserId schema', () => {
  it('should validate a valid user ID successfully', () => {
    const validUserIdData = {
      id: 123 // A positive number
    }

    const parsed = validateUserId.parse(validUserIdData)

    expect(parsed).toEqual(validUserIdData)
  })

  it('should fail validation when the user ID is zero', () => {
    const invalidUserIdData = {
      id: 0
    }

    expect(() => validateUserId.parse(invalidUserIdData)).toThrowError(
      'Please provide a valid user ID, it must be a positive number'
    )
  })

  it('should fail validation when the user ID is negative', () => {
    const invalidUserIdData = {
      id: -1
    }

    expect(() => validateUserId.parse(invalidUserIdData)).toThrowError(
      'Please provide a valid user ID, it must be a positive number'
    )
  })

  it('should fail validation when the user ID is not a number', () => {
    const invalidUserIdData = {
      id: 'abc' // A string instead of a number
    }

    expect(() => validateUserId.parse(invalidUserIdData)).toThrowError(
      'Expected number, received string'
    )
  })

  it('should fail validation when the user ID is missing', () => {
    const invalidUserIdData = {}

    expect(() => validateUserId.parse(invalidUserIdData)).toThrowError(
      'Required'
    )
  })
})
