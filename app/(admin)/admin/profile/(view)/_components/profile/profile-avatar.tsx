import Card from '@components/common/theme/card'
import FlexBetween from '@components/common/theme/flex-box/flex-between'
import FlexBox from '@components/common/theme/flex-box/flex-box'
import { H5 } from '@components/common/theme/typography'
import { User } from '@lib/model/user'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default async function ProfileAvatar({ customer }: { customer?: User }) {
  return (
    <>
      {/* USER PROFILE INFO */}
      <Box mb={4}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Card
              sx={{
                display: 'flex',
                p: '14px 32px',
                height: '100%',
                alignItems: 'center'
              }}
            >
              <Avatar alt={customer?.firstName} sx={{ height: 64, width: 64 }} />

              <Box ml={1.5} flex='1 1 0'>
                <FlexBetween flexWrap='wrap'>
                  <div>
                    <H5 my='0px'>{`${customer?.firstName} ${customer?.lastName}`}</H5>
                    <FlexBox alignItems='center'></FlexBox>
                  </div>
                </FlexBetween>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
