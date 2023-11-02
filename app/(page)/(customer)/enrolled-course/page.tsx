import { cookies } from 'next/headers'
import { getAccessToken } from '@lib/handler/user-cookie'
import { ItemList } from './_components/item-list'
import { getEnrolledCourse } from '@lib/course/get-enrolled-course'

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
  const res = await getEnrolledCourse(accessToken, {})
  console.log(res)
  return <ItemList itemList={res.data} />
}
