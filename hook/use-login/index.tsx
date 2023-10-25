import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody } from '@lib/model'
import { GetUserResponse } from '@lib/model/user/get-user'
import { auth } from 'config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useLogin = () => async (email: string, password: string): Promise<ResponseBody<GetUserResponse>> => {
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
