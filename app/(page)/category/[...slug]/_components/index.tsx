'use client'
import ProductCard13 from '@components/product/product-card-13'
import ProductCard20 from '@components/product/product-card-20'
import { Course } from '@lib/model/course'
import { Grid } from '@mui/material'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import CategoryPaging from './category-paging'

export default function CategoryPage({ categoryId, courses }: { categoryId: string; courses: Course[] }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const handleEnterWaypoint = async () => {
    console.log("current page", currentPage)
    if (isLoading) {
      return
    }
    setCurrentPage(lastPage => lastPage + 1)
  }
  const handleLoaded = (data: any) => {
    if (!data) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 5000)
    } else {
      setIsLoading(false)
    }
  }

  const pages = []
  for (let page = 2; page <= currentPage; page++) {
    pages.push(<CategoryPaging key={`page_${page}`} page={page} categoryId={categoryId} onData={handleLoaded} />)
  }
  return (
    <>
      <Grid container spacing={3} sx={{ minHeight: 'auto' }} minHeight={500}>
        {courses.map(item => (
          <Grid item lg={2} md={3} sm={4} xs={6} key={item._id}>
            <ProductCard13 product={item} price={true} />
          </Grid>
        ))}
        {pages}
        {isLoading && (
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <ProductCard20 skeleton />
          </Grid>
        )}
      </Grid>
      <Waypoint onEnter={handleEnterWaypoint} />
    </>
  )
}
