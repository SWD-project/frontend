import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { H1, Span } from '@components/common/theme/typography'
import Typography from '@mui/material/Typography'
import CheckIcon from '@mui/icons-material/Check'
import FlexBox from '@components/common/theme/flex-box/flex-box'
import { CourseCheckout } from './_components/course-checkout'
import Container from '@mui/material/Container'
import { getCourse } from '@lib/course/get-course'
import Stack from '@mui/material/Stack'
import Rating from '@components/common/theme/rating'
import NewReleasesIcon from '@mui/icons-material/NewReleases'
import { GetCourseResponse } from '@lib/model/course/get-course'
import { formatDate } from '@lib/utils'
export default async function Page({ params }: { params: { id: string } }) {
  const course = await getCourse({ courseId: params.id })
  const detail = course.data[0] as unknown as GetCourseResponse
  console.log(detail)
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Box marginTop={5}>
            <Stack spacing={2}>
              <Typography fontSize={'3rem'}>{detail.title}</Typography>
              <Typography>{detail.description}</Typography>
              <FlexBox alignItems={'center'}>
                <Rating name='half-rating-read' defaultValue={detail.rating} precision={0.5} readOnly marginRight={1}/>
                {`(${(detail.discountPercent * 10 + 1) * detail.title.length})`}
              </FlexBox>
              <Box>
                Create By
                <Span color='red' fontSize={'1rem'}>
                  {" " + detail.lectureId.firstName + detail.lectureId.lastName}
                </Span>
              </Box>
              <FlexBox alignItems={'center'}>
                <NewReleasesIcon />
                Last Updated
                <Typography marginLeft={'10px'}> {formatDate(detail.updatedAt, "dd/MM/yyyy")}</Typography>
              </FlexBox>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <CourseCheckout course={detail}/>
        </Grid>
        <Card sx={{ marginBottom: 5, marginTop: 1, width: '100%', padding: '2rem' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <H1 sx={{ fontWeight: 500 }}>What you will learn</H1>
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={2}>
                {detail.outcome.split('-').map((value, index) => (
                  <Grid item xs={6} key={index}>
                    <FlexBox alignItems={'center'}>
                      <CheckIcon />
                      <Typography fontSize={'15px'} margin={'10px'}>
                        {value}
                      </Typography>
                    </FlexBox>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Container>
  )
}
