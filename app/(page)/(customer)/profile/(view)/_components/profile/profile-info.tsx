import { TableRowItem } from './profile-table-item'
import { User } from '@lib/model/user'

export default async function ProfileInfo({ customer }: { customer?: User }) {
  return (
    <>
      <TableRowItem title='First Name' value={customer?.firstName} />
      <TableRowItem title='Last Name' value={customer?.lastName} />
      <TableRowItem title='Email' value={customer?.email} />
      <TableRowItem title='Account' value={customer?.roleId === "1" ? "Lecture" : "Student" } />
    </>
  )
}
