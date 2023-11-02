import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody } from '@lib/model'
import { UpdateCourseRequest, UpdateCourseResponse } from '@lib/model/course/update-course'

export const useUpdateCourse = async (variables: UpdateCourseRequest): Promise<ResponseBody<UpdateCourseResponse>> => {
  const fetcherProps: FetcherProps = {
    method: 'POST',
    body: variables
  }
  const res = await fetcher('/api/course/update', fetcherProps)
  return res
}
