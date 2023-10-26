import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { GetCourseByLectureRequest, GetCourseByLectureResponse } from '@lib/model/course/get-course-lecture'

export const getAdminCourse = async (
  accessToken: string,
  request: GetCourseByLectureRequest
): Promise<ResponseBody<GetCourseByLectureResponse>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      headers: {
        Authorization: accessToken
      },
      body: request
    }
    const res = await fetcher(`${process.env.BACKEND}/course/get-by-lecture`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
