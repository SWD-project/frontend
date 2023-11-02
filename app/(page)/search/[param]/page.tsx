import { searchCourseByName } from '@lib/course/search-course-by-name'
import SearchPage from './_components'

export default async function Page({ params }: { params: { param: string } }) {
  const decodedQueryString = decodeURIComponent(params.param)
  const paramsArray = decodedQueryString.split('&')
  const filter: any = {}

  paramsArray.forEach(param => {
    const [key, value] = param.split('=')
    //@ts-ignore
    filter[key] = value
  })

  const request = {
    categories: filter.category?.split('-') || [],
    levels: filter.level?.split('-') || [],
    title: filter.name,
    limit: 8,
    page: 1
  }
  const res = await searchCourseByName(request)
  return <SearchPage request={request} courses={res.data[0]?.courses || []} />
}
