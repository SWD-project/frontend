import UserDashboardHeader from '@components/common/header/user-dashboard-header'
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined'
import { ReactNode } from 'react'

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <UserDashboardHeader icon={ShoppingBagOutlined} title={'Transaction'} />
    </>
  )
}
