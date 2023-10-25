import { getCustomer } from '@lib/customer/get-customer'
import { getAccessToken } from '@lib/handler/user-cookie'
import { cookies } from 'next/headers'
import ProfileEditForm from '../(view)/_components/profile/profile-edit-form'

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

export default async function Information() {
  const accessToken = getAccessToken(cookies())
  const user = await getCustomer(accessToken, {})
  return <ProfileEditForm user={user.data[0]} />
}
