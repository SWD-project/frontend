import { getACategory } from '@lib/category/get-a-category'
import CategoryPage from './_components'
import { Course } from '@lib/model/course'

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and BigCommerce.',
  title: 'Home Page',
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

export default async function Page({ params }: { params: { slug: string[] } }) {
  const res = await getACategory({ id: params.slug[1] as string, page: 1, limit: 6 })
  return <CategoryPage categoryId={params.slug[1] as string} courses={res.data[0]?.course as Course[]} />
}
