import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { User } from '@lib/model/user'
import { CreateUserRequest } from '@lib/model/user/create-user'

export const createCustomer = async (variables: CreateUserRequest): Promise<ResponseBody<User>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      body: variables
    }
    const res = await fetcher(`${process.env.BACKEND}/user/create-user`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
