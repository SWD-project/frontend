import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody } from '@lib/model'
import { CheckoutRequest, CheckoutResponse } from '@lib/model/user/checkout'
// @ts-ignore

export const useCheckout = async (
  variables: CheckoutRequest
): Promise<ResponseBody<CheckoutResponse>> => {
  const fetcherProps: FetcherProps = {
    method: 'POST',
    body: variables
  }

  const res = await fetcher('/api/user/checkout', fetcherProps)
  return res
}
