import { cookies } from 'next/headers'
import ProfileAvatar from './_components/profile/profile-avatar'
import { getCustomer } from '@lib/customer/get-customer'
import { getAccessToken } from '@lib/handler/user-cookie'
import { ProfileTable } from './_components/profile/profile-table'
import ProfileInfo from './_components/profile/profile-info'

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and BigCommerce.',
  title: 'Profile',
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
}

export default async function Profile() {
  const accessToken = getAccessToken(cookies())
  const customer = await getCustomer(accessToken, {})
  return (
    <>
      <ProfileAvatar customer={customer.data[0]}/>
      <ProfileTable>
        <ProfileInfo customer={customer.data[0]}/>
      </ProfileTable>
    </>
  )
}
