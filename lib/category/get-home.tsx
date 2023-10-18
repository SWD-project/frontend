import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { HomeRequest, HomeResponse } from '@lib/model/category/get-category-course'

export const getHomePage = async (request: HomeRequest): Promise<ResponseBody<HomeResponse>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
    }
    const res = await fetcher(`${process.env.BACKEND}/category/home`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
