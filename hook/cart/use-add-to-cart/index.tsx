import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody } from '@lib/model'
import { CreateCartDetailRequest, CreateCartDetailResponse } from '@lib/model/cartDetail/create-cart-detail'
// @ts-ignore

export const useAddToCart = async (
  variables: CreateCartDetailRequest
): Promise<ResponseBody<CreateCartDetailResponse>> => {
  const fetcherProps: FetcherProps = {
    method: 'POST',
    body: variables
  }

  const res = await fetcher('/api/cart/add-to-cart', fetcherProps)
  return res
}
