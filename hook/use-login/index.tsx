import { FetcherProps, fetcher } from '@lib/fetcher'
import { auth } from 'config/firebase'
// @ts-ignore
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useLogin = () => async (email: string, password: string) => {
  const user = await signInWithEmailAndPassword(auth, email, password)
  const fetcherProps: FetcherProps = {
    method: 'POST',
    body: {
      accessToken: user.user.uid
    }
  }
  const res = await fetcher('/api/login', fetcherProps)
  return res
}
