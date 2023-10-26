import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { ActiveCourseRequest, ActiveCourseResponse } from '@lib/model/course/active-course'

export const updateCourseStatus = async (
  request: ActiveCourseRequest
): Promise<ResponseBody<ActiveCourseResponse>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      body: request
    }
    const res = await fetcher(`${process.env.BACKEND}/course/active`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
