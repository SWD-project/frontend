import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody } from '@lib/model'
import { ActiveCourseRequest, ActiveCourseResponse } from '@lib/model/course/active-course'

export const useUpdateCourseStatus = async (variables: ActiveCourseRequest): Promise<ResponseBody<ActiveCourseResponse>> => {
  const fetcherProps: FetcherProps = {
    method: 'POST',
    body: variables
  }

  const res = await fetcher('/api/course/update-course-status', fetcherProps)
  return res
}
