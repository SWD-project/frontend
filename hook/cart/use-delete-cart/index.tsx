import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody } from '@lib/model'
import { DeleteCartDetailRequest, DeleteCartDetailResponse } from '@lib/model/cartDetail/delete-cart-detail'
export const useDeleteCart = async (
  variables: DeleteCartDetailRequest
): Promise<ResponseBody<DeleteCartDetailResponse>> => {
  const fetcherProps: FetcherProps = {
    method: 'POST',
    body: variables
  }

  const res = await fetcher('/api/cart/delete-cart', fetcherProps)
  return res
}
