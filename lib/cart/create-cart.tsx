import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { CreateCartDetailRequest, CreateCartDetailResponse } from '@lib/model/cartDetail/create-cart-detail'

export const addToCart = async (
  accessToken: string,
  variables: CreateCartDetailRequest
): Promise<ResponseBody<CreateCartDetailResponse>> => {
  
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      headers: {
        Authorization: accessToken
      },
      body: variables
    }
    const res = await fetcher(`${process.env.BACKEND}/cart-detail/create`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
