'use client'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { CourseDetail } from './course-detail'
import { CourseCheckout } from './course-checkout'
import Card from '@mui/material/Card'
import { H1 } from '@components/common/theme/typography'
import Typography from '@mui/material/Typography'
import CheckIcon from '@mui/icons-material/Check'
import FlexBox from '@components/common/theme/flex-box/flex-box'
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
      <Card sx={{ marginBottom: 5, marginTop: 1, width: '100%' }}>
        <div style={{ padding: '40px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <H1 sx={{ fontWeight: 500 }}>What you will learn</H1>
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FlexBox alignItems={'center'}>
                    <CheckIcon />
                    <Typography fontSize={'15px'} margin={'10px'}>
                      Process data PROFESSIONALLY like a Data Analyst, Business Analyst or Data Scientist
                    </Typography>
                  </FlexBox>
                </Grid>
                <Grid item xs={6}>
                  <FlexBox alignItems={'center'}>
                    <CheckIcon />
                    <Typography fontSize={'15px'} margin={'10px'}>
                      Process data PROFESSIONALLY like a Data Analyst, Business Analyst or Data Scientist
                    </Typography>
                  </FlexBox>
                </Grid>
                <Grid item xs={6}>
                  <FlexBox alignItems={'center'}>
                    <CheckIcon />
                    <Typography fontSize={'15px'} margin={'10px'}>
                      Process data PROFESSIONALLY like a Data Analyst, Business Analyst or Data Scientist
                    </Typography>
                  </FlexBox>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Card>
    </Grid>
  )
}
