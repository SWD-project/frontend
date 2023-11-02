import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { SearchCourseRequest, SearchCourseResponse } from '@lib/model/course/search-course'

export const searchCourseByName = async (request: SearchCourseRequest): Promise<ResponseBody<SearchCourseResponse>> => {
  try {
    //@ts-ignore
    if (request.levels[0] == '') {
      request.levels = []
    }
    const fetcherProps: FetcherProps = {
      method: 'POST',
      body: request
    }
    const res = await fetcher(`${process.env.BACKEND}/course/search`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
