import { cookies } from 'next/headers'
import { getAccessToken } from '@lib/handler/user-cookie'
import { TableRowItem } from './profile-table-item'
import { getCustomer } from '@lib/customer/get-customer'
import { User } from '@lib/model/user'

export default async function ProfileInfo({ customer }: { customer?: User }) {
  return (
    <>
      <TableRowItem title='First Name' value={customer?.firstName} />
      <TableRowItem title='Last Name' value={customer?.lastName} />
      <TableRowItem title='Email' value={customer?.email} />
    </>
  )
}
