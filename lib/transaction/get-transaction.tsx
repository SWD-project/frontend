import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { GetTransactionRequest, GetTransactionResponse } from '@lib/model/transaction/get-transaction'

export const getTransaction = async (
  accessToken: string,
  request: GetTransactionRequest
): Promise<ResponseBody<GetTransactionResponse>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      headers: {
        Authorization: accessToken
      },
      body: request
    }
    const res = await fetcher(`${process.env.BACKEND}/transaction/get`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
