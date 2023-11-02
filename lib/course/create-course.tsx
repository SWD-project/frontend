import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { CreateCourseRequest, CreateCourseRespone } from '@lib/model/course/create-course'

export const createNewCourse = async (
  accessToken: string,
  request: CreateCourseRequest
): Promise<ResponseBody<CreateCourseRespone>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      headers: {
        Authorization: accessToken
      },
      body: request
    }
    const res = await fetcher(`${process.env.BACKEND}/course/create-new-course`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}
