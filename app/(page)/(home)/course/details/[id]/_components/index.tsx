'use client'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { CourseDetail } from './course-detail'
import { CourseCheckout } from './course-checkout'
import Card from '@mui/material/Card'
import { H1 } from '@components/common/theme/typography'
import Typography from '@mui/material/Typography'
import CheckIcon from '@mui/icons-material/Check'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
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
        <Card sx={{ marginBottom: 5 }}>
          <div style={{ padding: '40px' }}>
            <H1 sx={{ fontWeight: 900 }}>What you will learn</H1>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box sx={{ bgcolor: 'background.paper' }}>
                  <nav aria-label='main mailbox folders'>
                    <List>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CheckIcon />
                        <Typography fontSize={'17px'} margin={'10px'}>
                          Process data PROFESSIONALLY like a Data Analyst, Business Analyst or Data Scientist
                        </Typography>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CheckIcon />
                        <Typography fontSize={'17px'} margin={'10px'}>
                          Build a MACHINE LEARNING model with Scikit-Learn
                        </Typography>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CheckIcon />
                        <Typography fontSize={'17px'} margin={'10px'}>
                          Build a MACHINE LEARNING model with Scikit-Learn
                        </Typography>
                      </div>
                    </List>
                  </nav>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ bgcolor: 'background.paper' }}>
                  <nav aria-label='main mailbox folders'>
                    <List>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CheckIcon />
                        <Typography fontSize={'17px'} margin={'10px'}>
                          Proficient in VISUALIZING data for INSIGHT with Matplotlib and Seaborn.{' '}
                        </Typography>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CheckIcon />
                        <Typography fontSize={'17px'} margin={'10px'}>
                          Learn and practice on REAL data
                        </Typography>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CheckIcon />
                        <Typography fontSize={'17px'}>
                          Seize career opportunities in the fields of Data Analyst, Data Scientist and Business Analyst.
                        </Typography>
                      </div>
                    </List>
                  </nav>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Card>
      </Grid>
  )
}
