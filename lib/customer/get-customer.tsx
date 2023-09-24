import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { User } from '@lib/model/user'
import { GetUserRequest, GetUserResponse } from '@lib/model/user/get-user'

export const getCustomer = async (accessToken: string, request: GetUserRequest) : Promise<ResponseBody<GetUserResponse>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      headers: {
        Authorization: accessToken
      }
    }
    const res = await fetcher(`${process.env.BACKEND}/user/get-user-by-uuid`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
