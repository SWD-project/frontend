import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { GetCategoryCourseRequest, GetCategoryCourseResponse } from '@lib/model/category/get-category-course'

export const getACategory = async (
  request: GetCategoryCourseRequest
): Promise<ResponseBody<GetCategoryCourseResponse>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      body: request
    }
    const res = await fetcher(`${process.env.BACKEND}/category/get-a-category`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
