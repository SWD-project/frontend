import { getCourse } from '@lib/course/get-course'
import UpdateCourse from './_components/update-course'
import { getCategories } from '@lib/category/get-all-category'

export default async function Page({ params }: { params: { id: string } }) {
  const course = await getCourse({ courseId: params.id })
  const categories = await getCategories({ id: '12' })
  return <UpdateCourse categories={categories.data} course={course.data[0] as any} />
}
