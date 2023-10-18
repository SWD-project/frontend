import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody } from '@lib/model'
import { GetCategoryCourseResponse } from '@lib/model/category/get-category-course'
import { useQuery } from '@tanstack/react-query'

export const useGetCategory = ({
  categoryId,
  page
}: {
  categoryId: string
  page: number
}): ResponseBody<GetCategoryCourseResponse> => {
  const fetcherProps: FetcherProps = {
    method: 'POST',
    body: {
      categoryId,
      page
    }
  }
  const { data } = useQuery({
    queryKey: [`category${categoryId}${page}`],
    queryFn: () => fetcher('/api/deals/deal', fetcherProps),
    refetchOnWindowFocus: false
  })
  return data
}
