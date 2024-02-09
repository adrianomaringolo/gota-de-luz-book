import { db } from 'utils/firebase'

const usersRef = db.collection('users')

const getUserAuth = async (loginID: string, password: string) => {
  let result: any[] = []
  const snapshot = await usersRef
    .where('login', '==', loginID)
    .where('password', '==', password)
    .get()

  snapshot.forEach((doc) => {
    result.push({ ...doc.data() })
  })
  return result[0]
}

export const UsersService = {
  getUserAuth,
}
