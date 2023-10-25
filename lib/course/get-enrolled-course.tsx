import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { GetEnrolledCourseRequest, GetEnrolledCourseResponse } from '@lib/model/enrolledCourse/get-enrolled-course'

export const getEnrolledCourse = async (
  accessToken: string,
  request: GetEnrolledCourseRequest
): Promise<ResponseBody<GetEnrolledCourseResponse>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      headers: {
        Authorization: accessToken
      },
      body: request
    }
    const res = await fetcher(`${process.env.BACKEND}/enrolled-course/get`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
