import DealCarousel from '@components/product/deal-carousel'

export default function Loading() {
  return (
    <>
      <DealCarousel products={[]} store='us' title='Deals Of The Day On Amazon USA' moreHref='/deals/us' />
      <DealCarousel products={[]} store='de' title='Deals Of The Day On Amazon Germany' moreHref='/deals/de' />
      <DealCarousel products={[]} store='jp' title='Deals Of The Day On Amazon Japan' moreHref='/deals/jp' />
      <DealCarousel products={[]} store='uk' title='Deals Of The Day On Amazon UK' moreHref='/deals/uk' />
    </>
  )
}
