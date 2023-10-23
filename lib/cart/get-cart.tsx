import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { GetCartRequest, GetCartResponse } from '@lib/model/cart/get-cart'

export const getCart = async (accessToken: string, request: GetCartRequest): Promise<ResponseBody<GetCartResponse>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      headers: {
        Authorization: accessToken
      },
      body: request
    }
    const res = await fetcher(`${process.env.BACKEND}/cart/get-a-cart`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
