'use client'
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import ProductCard13 from '@components/product/product-card-13'
import { Course } from '@lib/model/course'
import { SearchCourseRequest } from '@lib/model/course/search-course'
import { useSearchCourse } from 'hook/use-search-course'

// ===================================================
type CategoryPagingProps = {
  request: SearchCourseRequest
  page: number
  // eslint-disable-next-line no-unused-vars
  onData?: (data: Course[]) => void
}
// ===================================================

const SearchPaging = ({ request, page, onData }: CategoryPagingProps) => {
  const res = useSearchCourse({
    categories: request.categories,
    levels: request.levels,
    title: request.title,
    limit: 7,
    page
  })
  useEffect(() => {
    onData && onData(res?.data[0]?.courses as Course[])
  }, [res?.data, onData])

  return res?.data[0]?.courses.map((item: Course) => (
    <Grid item xs={3} key={item._id}>
      <ProductCard13 product={item} price={true} />
    </Grid>
  ))
}

export default SearchPaging
