import UserDashboardHeader from '@components/common/header/user-dashboard-header'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined'
import { ReactNode } from 'react'

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <UserDashboardHeader icon={LocalLibraryOutlinedIcon} title={'Enrolled Course'} />
    </>
  )
}
