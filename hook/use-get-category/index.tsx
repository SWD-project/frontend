import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody } from '@lib/model'
import { GetCategoryCourseRequest, GetCategoryCourseResponse } from '@lib/model/category/get-category-course'
import { useQuery } from '@tanstack/react-query'

export const useGetCategory = (variables: GetCategoryCourseRequest): ResponseBody<GetCategoryCourseResponse> => {
  const fetcherProps: FetcherProps = {
    method: 'POST',
    body: variables
  }
  const { data } = useQuery({
    queryKey: [`category${variables.limit}${variables.id}${variables.page}`],
    queryFn: () => fetcher('/api/category/get-a-category', fetcherProps),
    refetchOnWindowFocus: false
  })
  return data
}
