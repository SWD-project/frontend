import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody } from '@lib/model'
import { CreateCourseRequest, CreateCourseRespone } from '@lib/model/course/create-course'

export const useCreateNewCourse = async (variables: CreateCourseRequest): Promise<ResponseBody<CreateCourseRespone>> => {
  const fetcherProps: FetcherProps = {
    method: 'POST',
    body: variables
  }
  const res = await fetcher('/api/course/create-course', fetcherProps)
  return res
}
