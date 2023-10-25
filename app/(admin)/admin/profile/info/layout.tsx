import UserDashboardHeader from '@components/common/header/user-dashboard-header'
import Card1 from '@components/common/theme/card1'
import FlexBox from '@components/common/theme/flex-box/flex-box'
import Person from '@mui/icons-material/Person'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Link from 'next/link'
import { ReactNode } from 'react'

export default async function Layout({ children }: { children: ReactNode }) {
  const HEADER_LINK = (
    <Link href={'/admin/profile'}>
      <Button color='primary' sx={{ px: 4, bgcolor: 'primary.light' }}>
        Back to Profile
      </Button>
    </Link>
  )
  return (
    <>
      <UserDashboardHeader icon={Person} title='Edit Profile' button={HEADER_LINK} />
      <Card1>
        <FlexBox alignItems='flex-end' mb={3}>
          <Avatar src='/assets/images/faces/ralph.png' sx={{ height: 64, width: 64 }} />
        </FlexBox>
        {children}
      </Card1>
    </>
  )
}
