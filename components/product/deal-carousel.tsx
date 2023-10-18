import NavLink3 from '@components/common/theme/nav-link/nav-link-3'
import { H2 } from '@components/common/theme/typography'
import ProductCarousel from '@components/product/product-carousel'
import Container from '@mui/material/Container'
import { ReactNode } from 'react'
import FlexBetween from '@components/common/theme/flex-box/flex-between'
import { Course } from '@lib/model/course'
import ProductCarouselSkeleton from '@components/common/theme/carousel/product-carousel-skeleton'

// ======================================================================
type DealCarouselProps = {
  title: string
  store: string
  products: Course[]
  moreHref: string
  children?: ReactNode
}
// ======================================================================

const DealCarousel = async ({ products, store, title, moreHref, children }: DealCarouselProps) => {
  return (
    <Container sx={{ py: 8 }}>
      <FlexBetween mb={3}>
        <H2 fontSize={20}>{title}</H2>
        <NavLink3 text='More Course' href={moreHref} hoverColor='dark.main' />
      </FlexBetween>
      {products.length === 0 ? <ProductCarouselSkeleton /> : <ProductCarousel products={products} store={store} />}
    </Container>
  )
}

export default DealCarousel
