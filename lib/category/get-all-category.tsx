import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { GetCategoryRequest, GetCategoryResponse } from '@lib/model/category/get-category'

export const getCategories = async (
  request: GetCategoryRequest
): Promise<ResponseBody<GetCategoryResponse>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      body: request
    }
    const res = await fetcher(`${process.env.BACKEND}/category/get`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
