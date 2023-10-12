import DealCarousel from '@components/product/deal-carousel'
import { getHomePage } from '@lib/category/get-home'

// export const runtime = 'edge';
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

export default async function HomePage() {
  const home = (await getHomePage({})) || {}

  return (
    <>
      {home.data.map(value => (
        <DealCarousel
          products={value.course}
          store={value.name}
          title={value.name}
          moreHref={`/${value.name.toLowerCase().replaceAll(' ', '-')}/${value._id}`}
        />
      ))}
    </>
  )
}
