'use client'
import { H1 } from '@components/common/theme/typography'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
export const CourseDetail = () => {
  return (
    <>
      <H1>The Complete Python Bootcamp From Zero to Hero in Python</H1>
      <h4>Learning Python like a Profession Start ....</h4>
      <Rating name='half-rating-read' defaultValue={4.6} precision={0.5} readOnly />
      <Link>(480,973 ratings)</Link>
      <p>1,234,551 students</p>
      <p>Create By</p>
      <Link href='#'>Jose Portilla</Link>
      <Paper>
        <Typography variant='h3'>What you'll learn</Typography>
      </Paper>
      <h1>ádlkfjhasdhfk</h1>
      <Typography></Typography>
    </>
  )
}
