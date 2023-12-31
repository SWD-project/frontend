import UserDashboardHeader from '@components/common/header/user-dashboard-header'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibrary'

import Button from '@mui/material/Button'
import Link from 'next/link'
import { ReactNode } from 'react'

export default async function Layout({ children }: { children: ReactNode }) {
  const HEADER_LINK = (
    <Link href={'/admin/course/create'}>
      <Button color='primary' sx={{ px: 4, bgcolor: 'primary.light' }}>
        Create course
      </Button>
    </Link>
  )
  return (
    <>
      <UserDashboardHeader icon={LocalLibraryOutlinedIcon} title={'My Course'} button={HEADER_LINK}/>
      {children}
    </>
  )
}
