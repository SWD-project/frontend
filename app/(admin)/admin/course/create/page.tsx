'use client'

import { getCategories } from '@lib/category/get-all-category'
import CreateCourse from './_components/create-course'

export default async function Page() {
  const categories = await getCategories({ id: '12' })
  console.log(categories)
  return <CreateCourse categories={categories.data} />
}
