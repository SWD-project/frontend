import { FetcherProps, fetcher } from '@lib/fetcher'
import { UpdateUserRequest } from '@lib/model/user/update-user'

export const useUpdateAccount = () => async (variables: UpdateUserRequest) => {
  const fetcherProps: FetcherProps = {
    method: 'POST',
    body: variables
  }
  const res = await fetcher('/api/update-account', fetcherProps)
  return res
}
