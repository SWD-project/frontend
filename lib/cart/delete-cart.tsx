import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { DeleteCartDetailRequest, DeleteCartDetailResponse } from '@lib/model/cartDetail/delete-cart-detail'

export const deleteCart = async (
  variables: DeleteCartDetailRequest
): Promise<ResponseBody<DeleteCartDetailResponse>> => {
  
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      body: variables
    }
    const res = await fetcher(`${process.env.BACKEND}/cart-detail/delete`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}