import { getAdminCourse } from '@lib/course/get-admin-course'
import CourseTable from './_components/course-table'
import { getAccessToken } from '@lib/handler/user-cookie'
import { cookies } from 'next/headers'

export default async function Course({ params }: { params: { filter: string } }) {
  const accessToken = getAccessToken(cookies())

  const decodedQueryString = decodeURIComponent(params.filter)
  const paramsArray = decodedQueryString.split('&')
  const filter: any = {}

  paramsArray.forEach(param => {
    const [key, value] = param.split('=')
    filter[key as string] = value
  })
  const res = await getAdminCourse(accessToken, filter)
  return <CourseTable data={res.data} />
}
