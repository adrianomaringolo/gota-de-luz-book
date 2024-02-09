import { User } from 'interfaces/users'
import { useEffect, useState } from 'react'
import { UsersService } from 'services/UsersService'

export const useGetLoggedUser = (): User => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem(UsersService.LOGGED_USER_KEY)
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return user as User
}
