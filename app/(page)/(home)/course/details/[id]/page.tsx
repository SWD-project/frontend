import Grid from '@mui/material/Grid'
import { CourseDetail } from './_components/course-detail'
import { CourseCheckout } from './_components/course-checkout'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

export default async function Page() {
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
        <Card>
          What you will learn
        </Card>
      </Grid>
    </Grid>
  )
}
