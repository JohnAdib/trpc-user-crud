/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it, vi, beforeEach } from 'vitest'
import { addUser } from './add-user'
import { UserRole, UserStatus } from '@interfaces'
import { repositories } from '@server'

describe('addUser function', () => {
  const mockUserInput = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: UserRole.USER,
    bio: 'A sample bio'
  }

  beforeEach(() => {
    // Clear any previous mocks before each test
    vi.clearAllMocks()
  })

  it('should successfully add a user if they do not exist', async () => {
    // Mock getUserByEmail to return null (user does not exist)
    vi.spyOn(repositories.users, 'getUserByEmail').mockResolvedValue(
      null as any
    )

    // Mock addUser to return a success response
    vi.spyOn(repositories.users, 'addUser').mockResolvedValue(
      mockUserInput as any
    )

    const result = await addUser(mockUserInput)

    expect(result).toBe(true)
    expect(repositories.users.getUserByEmail).toHaveBeenCalledWith({
      email: mockUserInput.email
    })
    expect(repositories.users.addUser).toHaveBeenCalledWith({
      name: mockUserInput.name,
      email: mockUserInput.email,
      role: mockUserInput.role,
      bio: mockUserInput.bio,
      status: UserStatus.ACTIVE
    })
  })

  it('should throw an error if the user already exists', async () => {
    // Mock getUserByEmail to return a user (user exists)
    vi.spyOn(repositories.users, 'getUserByEmail').mockResolvedValue(
      mockUserInput as any
    )

    await expect(addUser(mockUserInput)).rejects.toThrow(
      'User with this email already exists, please use another email'
    )
    expect(repositories.users.getUserByEmail).toHaveBeenCalledWith({
      email: mockUserInput.email
    })
    expect(repositories.users.addUser).not.toHaveBeenCalled() // addUser should not be called
  })

  it('should handle adding a user with no bio', async () => {
    const userInputWithoutBio = { ...mockUserInput, bio: undefined }

    vi.spyOn(repositories.users, 'getUserByEmail').mockResolvedValue(
      null as any
    )
    vi.spyOn(repositories.users, 'addUser').mockResolvedValue(
      userInputWithoutBio as any
    )

    const result = await addUser(userInputWithoutBio as any)

    expect(result).toBe(true)
    expect(repositories.users.addUser).toHaveBeenCalledWith({
      name: userInputWithoutBio.name,
      email: userInputWithoutBio.email,
      role: userInputWithoutBio.role,
      bio: '',
      status: UserStatus.ACTIVE
    })
  })
})
