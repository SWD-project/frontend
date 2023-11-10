import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import {
  GetCartDetailByCourseIdRequest,
  GetCartDetailByCourseIdResponse
} from '@lib/model/cartDetail/get-cart-detail-by-course-id'

export const getCartDetail = async (
  accessToken: string,
  request: GetCartDetailByCourseIdRequest
): Promise<ResponseBody<GetCartDetailByCourseIdResponse>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      headers: {
        Authorization: accessToken
      },
      body: request
    }
    let res = await fetcher(`${process.env.BACKEND}/cart-detail/get-by-course-id`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
