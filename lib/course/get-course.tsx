import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { GetCourseRequest, GetCourseResponse } from '@lib/model/course/get-course'

export const getCourse = async (
  request: GetCourseRequest
): Promise<ResponseBody<GetCourseResponse>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      body: request
    }
    const res = await fetcher(`${process.env.BACKEND}/course/get-a-course`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
