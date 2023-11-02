'use client'
import ProductCard13 from '@components/product/product-card-13'
import ProductCard20 from '@components/product/product-card-20'
import { Course } from '@lib/model/course'
import { SearchCourseRequest } from '@lib/model/course/search-course'
import { Grid } from '@mui/material'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import SearchPaging from './search-paging'

export default function SearchPage({ request, courses }: { request: SearchCourseRequest; courses: Course[] }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const handleEnterWaypoint = async () => {
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
    console.log(page)
    pages.push(<SearchPaging key={`page_${page}`} page={page} request={request} onData={handleLoaded} />)
  }
  return (
    <>
      <Grid container spacing={3} sx={{ minHeight: 'auto' }} minHeight={500}>
        {courses.map(item => (
          <Grid item xs={3} key={item._id}>
            <ProductCard13 product={item} price={true} />
          </Grid>
        ))}
        {pages}
        {isLoading && (
          <Grid item xs={3}>
            <ProductCard20 skeleton />
          </Grid>
        )}
      </Grid>
      <Waypoint onEnter={handleEnterWaypoint} />
    </>
  )
}
