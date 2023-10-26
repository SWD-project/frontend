import UserDashboardHeader from '@components/common/header/user-dashboard-header'
import Person from '@mui/icons-material/Person'
import { ReactNode } from 'react'

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <UserDashboardHeader icon={Person} title={'My Course'} />
      {children}
    </>
  )
}
