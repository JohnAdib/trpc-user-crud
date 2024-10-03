'use client'

import { BrowserFrame } from '@/components/layout/browser-frame'
import { IUser } from '@interfaces'

export default function Page() {
  const user: IUser = {
    id: 1,
    name: 'John Adib',
    email: 'hi@mradib.com',
    role: 'Admin' as any,
    bio: "I'm a software engineer and a full-stack developer!"
  }
  // convert the user object to a string
  const userString = JSON.stringify(user, null, 2)

  return <BrowserFrame>{userString}</BrowserFrame>
}
