'use client'
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import ProductCard13 from '@components/product/product-card-13'
import { Course } from '@lib/model/course'
import { useGetCategory } from 'hook/use-get-category'

// ===================================================
type CategoryPagingProps = {
  categoryId: string
  page: number
  // eslint-disable-next-line no-unused-vars
  onData?: (data: Course[]) => void
}
// ===================================================

const CategoryPaging = ({ categoryId, page, onData }: CategoryPagingProps) => {
  const res = useGetCategory({ page, categoryId })
  useEffect(() => {
    onData && onData(res.data[0]?.course as Course[])
  }, [res.data, onData])

  return res.data[0]?.course.map((item: Course) => (
    <Grid item lg={2} md={3} sm={4} xs={6} key={item._id}>
      <ProductCard13 product={item} price={true} />
    </Grid>
  ))
}

export default CategoryPaging
