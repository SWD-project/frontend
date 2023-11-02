import UserDashboardHeader from '@components/common/header/user-dashboard-header'
import Card1 from '@components/common/theme/card1'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibrary'

import Button from '@mui/material/Button'
import Link from 'next/link'
import { ReactNode } from 'react'

export default async function Layout({ children }: { children: ReactNode }) {
  const HEADER_LINK = (
    <Link href={'/admin/course/page=1&limit=10'}>
      <Button color='primary' sx={{ px: 4, bgcolor: 'primary.light' }}>
        Back to course
      </Button>
    </Link>
  )
  return (
    <>
      <UserDashboardHeader icon={LocalLibraryOutlinedIcon} title='Create Course' button={HEADER_LINK} />
      <Card1>{children}</Card1>
    </>
  )
}
