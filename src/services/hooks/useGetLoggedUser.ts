import { User } from 'interfaces/users'
import { useEffect, useState } from 'react'
import { UsersService } from 'services/UsersService'

export const useGetLoggedUser = () => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const storedUser = localStorage.getItem(UsersService.LOGGED_USER_KEY)
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return { user: user as User, isAdmin: user?.roles.includes('admin') }
}
