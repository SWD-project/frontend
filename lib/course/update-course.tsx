import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { UpdateCourseRequest, UpdateCourseResponse } from '@lib/model/course/update-course'

export const updateCourse = async (request: UpdateCourseRequest): Promise<ResponseBody<UpdateCourseResponse>> => {
    try {
        const fetcherProps: FetcherProps = {
          method: 'POST',
          body: request
        }
        const res = await fetcher(`${process.env.BACKEND}/course/update`, fetcherProps)
        return res
      } catch (error: any) {
        console.log(error)
        return errorResponse(error.message)
      }
}
