'use client'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { CourseDetail } from './course-detail'
import { CourseCheckout } from './course-checkout'
import Card from '@mui/material/Card'

export const CourseDetailPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Box marginTop={10}>
          <CourseDetail />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <CourseCheckout />
      </Grid>
      <Grid item xs={12}>
        <Card>What you will learn</Card>
      </Grid>
    </Grid>
  )
}
