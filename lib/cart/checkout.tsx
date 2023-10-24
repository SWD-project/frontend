import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { CreateCartDetailRequest, CreateCartDetailResponse } from '@lib/model/cartDetail/create-cart-detail'
import { CheckoutRequest, CheckoutResponse } from '@lib/model/user/checkout'

export const checkout = async (
  accessToken: string,
  variables: CheckoutRequest
): Promise<ResponseBody<CheckoutResponse>> => {
  
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      headers: {
        Authorization: accessToken
      },
      body: variables
    }
    const res = await fetcher(`${process.env.BACKEND}/user/checkout`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
