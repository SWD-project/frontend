import UserDashboardHeader from '@components/common/header/user-dashboard-header'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined'
import Button from '@mui/material/Button'
import Link from 'next/link'
import { ReactNode } from 'react'

export default async function Layout({ children }: { children: ReactNode }) {
  const HEADER_LINK = (
    <Link href={'/course/create'}>
      <Button color='primary' sx={{ px: 4, bgcolor: 'primary.light' }}>
        Edit Profile
      </Button>
    </Link>
  )
  return (
    <>
      <UserDashboardHeader icon={LocalLibraryOutlinedIcon} title={'Enrolled Course'} button={HEADER_LINK}/>
    </>
  )
}
