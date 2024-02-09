import md5 from 'md5'
import { db } from 'utils/firebase'

const usersRef = db.collection('users')

const LOGGED_USER_KEY = 'loggedUser'

const getUserAuth = async (loginID: string, password: string) => {
  let result: any[] = []
  const snapshot = await usersRef
    .where('login', '==', loginID)
    .where('password', '==', md5(password))
    .get()

  snapshot.forEach((doc) => {
    result.push({ ...doc.data() })
  })
  return result[0]
}

export const UsersService = {
  getUserAuth,
  LOGGED_USER_KEY,
}
