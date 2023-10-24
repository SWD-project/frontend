import { cookies } from 'next/headers'
import { getAccessToken } from '@lib/handler/user-cookie'
import Card1 from '@components/common/theme/card1'

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
  return <Card1>1</Card1>
}
