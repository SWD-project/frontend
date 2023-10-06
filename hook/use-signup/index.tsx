import { FetcherProps } from '@lib/fetcher'
import { fetcher } from '@lib/fetcher'
import { auth } from 'config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
export const useSignup = () => async ({
  firstName,
  lastName,
  roleId,
  email,
  password
}: {
  firstName: string
  lastName: string
  roleId: string
  email: string
  password: string
}) => {
  let user  = null
  try {
    user = await createUserWithEmailAndPassword(auth, email, password)
  } catch (error) {
    user = await signInWithEmailAndPassword(auth, email, password)
  }
  const fetcherProps: FetcherProps = {
    method: 'POST',
    body: {
      firstName,
      lastName,
      email,
      roleId,
      password,
      uuid: user.user.uid
    }
  }
  const res = await fetcher('/api/signup', fetcherProps)
  return res
}
