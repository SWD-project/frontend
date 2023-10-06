import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { UpdateUserRequest, UpdateUserResponse } from '@lib/model/user/update-user'

export const updateCustomer = async (
  variables: UpdateUserRequest,
  accessToken: string
): Promise<ResponseBody<UpdateUserResponse>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      headers: {
        Authorization: accessToken
      },
      body: variables
    }
    const res = await fetcher(`${process.env.BACKEND}/user/update-user`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
