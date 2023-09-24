import { FetcherProps } from '@lib/fetcher'
import { fetcher } from '@lib/fetcher'
import { auth } from 'config/firebase'
// @ts-ignore
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
export const useSignup = () => async ({
  firstName,
  lastName,
  birthDate,
  email,
  password
}: {
  firstName: string
  lastName: string
  birthDate: string
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
      birthDate,
      password,
      uuid: user.user.uid
    }
  }
  const res = await fetcher('/api/signup', fetcherProps)
  return res
}
