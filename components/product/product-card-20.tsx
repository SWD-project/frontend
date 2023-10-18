'use client'
import Image from 'next/image'
import Link from 'next/link'

import { H4, Paragraph, Small } from '@components/common/theme/typography'
import { Box, IconButton, Rating, Skeleton, styled } from '@mui/material'
import { Course } from '@lib/model/course'
import { currency } from '@lib/utils'
import FlexRowCenter from '@components/common/theme/flex-box/flex-grow-center'

// custom styled components
const Card = styled(Box)(({ theme }) => ({
  borderRadius: '3px',
  transition: 'all 0.3s',
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[100]}`,
  ':hover': {
    '& .product-actions': { right: 5 },
    '& img': { transform: 'scale(1.1)' },
    border: `1px solid ${theme.palette.dark.main}`
  }
}))

const CardMedia = styled(Box)({
  width: '100%',
  maxHeight: 300,
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  '& img': { transition: '0.3s' }
})

const AddToCartButton = styled(IconButton)({
  top: 10,
  right: -40,
  position: 'absolute',
  transition: 'right 0.3s .1s'
})

const FavouriteButton = styled(IconButton)({
  top: 45,
  right: -40,
  position: 'absolute',
  transition: 'right 0.3s .2s'
})

// ==============================================================
type ProductCardProps = {
  product?: Course
  price?: boolean
  skeleton?: boolean
}
// ==============================================================

const initProductCard: any = {
  href: '',
  image: { alt: '', url: '' },
  id: '',
  sku: '',
  name: '',
  rating: 4,
  reviews: 0
}

const ProductCard20 = ({ product = initProductCard, price, skeleton = false }: ProductCardProps) => {
  // handle favourite

  return (
    <Card height='100%'>
      <CardMedia>
        {!skeleton ? (
          <>
            <Link href={`/course/details/${product._id}`}>
              <Image
                width={250}
                height={250}
                alt={product.title || 'product'}
                // objectFit="cover"
                // layout="responsive"
                className='product-img'
                src={product.thumbnailUrl}
                style={{
                  objectFit: 'cover'
                }}
              />
            </Link>

            <FavouriteButton className='product-actions'></FavouriteButton>
          </>
        ) : (
          <Skeleton variant='rectangular' width={300} height={190} />
        )}
      </CardMedia>

      <Box p={2} textAlign='center'>
        <Paragraph ellipsis={true}>{product.title}</Paragraph>
        <H4 fontWeight={700} py={0.5}>
          {product.price ? (
            currency(product.price - (product.price * product.discountPercent) / 100)
          ) : (
            <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
          )}
        </H4>

        <FlexRowCenter gap={1} mb={2}>
          {!skeleton ? (
            <Rating name='read-only' value={product.rating} readOnly sx={{ fontSize: 14 }} />
          ) : (
            <Skeleton variant='text' width={50} sx={{ fontSize: '1rem' }} />
          )}

          <Small fontWeight={600} color='grey.500'>
            {!skeleton ? (
              `(${(product.discountPercent * 10 + 1) * product.title?.length})`
            ) : (
              <Skeleton variant='text' width={50} sx={{ fontSize: '1rem' }} />
            )}
          </Small>
        </FlexRowCenter>
      </Box>
    </Card>
  )
}

export default ProductCard20
