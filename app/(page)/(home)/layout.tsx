import { ReactNode } from 'react'
import { TOP_BANNER_SLIDER } from './_components/config'
import ServiceList from './_components/service-list'
import TopBanner from './_components/top-banner'

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopBanner carouselData={TOP_BANNER_SLIDER} />
      <ServiceList />
      {children}
    </>
  )
}
