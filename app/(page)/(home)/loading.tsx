import DealCarousel from '@components/product/deal-carousel'

export default function Loading() {
  return (
    <>
      <DealCarousel products={[]} store='us' title='' moreHref='/' />
      <DealCarousel products={[]} store='de' title='' moreHref='' />
      <DealCarousel products={[]} store='jp' title='' moreHref='' />
      <DealCarousel products={[]} store='uk' title='' moreHref='' />
    </>
  )
}
