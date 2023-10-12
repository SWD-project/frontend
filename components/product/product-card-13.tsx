'use client'
import Link from 'next/link';
// import Favorite from '@mui/icons-material/Favorite'
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Card from '@components/common/theme/card';
import FlexBetween from '@components/common/theme/flex-box/flex-between';
import FlexBox from '@components/common/theme/flex-box/flex-box';
import LazyImage from '@components/common/theme/lazy-image';
import { H3, Span } from '@components/common/theme/typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Course } from '@lib/model/course';
import Skeleton from '@mui/material/Skeleton';
import Rating from '@components/common/theme/rating';
import { currency } from '@lib/utils';


const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  margin: 'auto',
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '8px',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'all 250ms ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[2],
    '& .controller': { display: 'flex', bottom: 20 }
  }
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  textAlign: 'center',
  position: 'relative',
  padding: '0px',
  background: '#efefef',
  display: 'inline-block',
  [theme.breakpoints.down('sm')]: { display: 'block' }
}));

const HoverWrapper = styled(FlexBetween)(({ theme }) => ({
  left: 0,
  right: 0,
  width: 120,
  height: 25,
  bottom: -40,
  margin: 'auto',
  overflow: 'hidden',
  background: '#fff',
  borderRadius: '5px',
  position: 'absolute',
  boxShadow: theme.shadows[2],
  transition: 'bottom 0.3s ease-in-out',
  '& span, & a': {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '&:hover': { cursor: 'pointer', background: '#f3f5f9' }
  },
  '& span': { padding: '0px 10px' },
  '& svg': { fontSize: 18, color: theme.palette.grey[600] }
}));

const StyledChip = styled(Chip)({
  zIndex: 2,
  top: '10px',
  left: '10px',
  paddingLeft: 3,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: '10px',
  position: 'absolute'
});

const ContentWrapper = styled(FlexBox)({
  minHeight: 110,
  padding: '1rem',
  '& .title, & .categories': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
});

// ===============================================================
type ProductCardProps = {
  product?: Course;
  price?: Boolean;
  skeleton?: boolean;
};
// ===============================================================
const initProductCard: any = {
  href: '',
  image: { alt: '', url: '' },
  id: '',
  sku: '',
  name: '',
  rating: 4,
  reviews: 0
};
const ProductCard13 = ({
  product = initProductCard,
  price,
  skeleton = false
}: ProductCardProps) => {
  return (
    <StyledCard hovereffect="false">
      <ImageWrapper>
        {product && product.discountPercent && product.discountPercent !== 0 ? (
          <StyledChip color="primary" size="small" label={`${product.discountPercent}% off`} />
        ) : null}
        {!skeleton ? (
          <>
            <Link href={`/course/details/${product._id}`}>
              <LazyImage
                alt={product.title || 'product'}
                width={250}
                src={product.thumbnailUrl}
                height={250}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  maxHeight: '212px'
                }}
              />
            </Link>
          </>
        ) : (
          <Skeleton variant="rectangular" width={300} height={215} />
        )}
      </ImageWrapper>

      <ContentWrapper>
        <Box flex="1 1 0" minWidth="0px" mr={1}>
          <Link href={`/course/details/${product._id}`}>
            <H3
              mb={1}
              title={product.title}
              fontSize="14px"
              textAlign="left"
              fontWeight="600"
              className="title"
              color="text.secondary"
            >
              {product.title}
            </H3>
          </Link>

          <FlexBox gap={1} alignItems="center">
            <Rating value={product.rating + 4} color="warn" readOnly />
            <Span color="grey.600">{`(${(Math.random() * 100000).toFixed(0).toString()})`}</Span>
          </FlexBox>

          <FlexBox gap={1} alignItems="center" mt={0.5}>
            <Box fontWeight={600} color="primary.main">
              {product.price ? (
                currency(product.price - product.price * product.discountPercent / 100)
              ) : (
                <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
              )}
            </Box>

            {product && product.discountPercent !== 0 && (
              <Box color="grey.600" fontWeight={600}>
                <del>{currency(product.price || 0)}</del>
              </Box>
            )}
          </FlexBox>
        </Box>
      </ContentWrapper>
    </StyledCard>
  );
};

export default ProductCard13;
