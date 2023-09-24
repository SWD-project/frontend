"use client"
import Card from '@components/common/theme/card';
import FlexBox from '@components/common/theme/flex-box/flex-box';
import Image from '@components/common/theme/image';
import { H2, Paragraph, Small } from '@components/common/theme/typography';
import { styled } from '@mui/material/styles';
import Link from 'next/link';


// import Product from "models/Product.model";

// styled components
const ContentWrapper = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '2px',
  boxShadow: theme.shadows[4]
}));

const StyledFlexBox = styled(FlexBox)({
  padding: '1rem',
  paddingTop: '3rem',
  alignItems: 'center',
  flexDirection: 'column'
});

const StyledShopButton = styled(Small)(({ theme }) => ({
  fontWeight: 900,
  lineHeight: 1.6,
  borderBottom: `2px solid ${theme.palette.primary.main}`
}));

// ==========================================================
type Props = { product: any };
// ==========================================================

const CarouselCard3 = ({ product }: Props) => {
  return (
    <ContentWrapper>
      <StyledFlexBox>
        <H2 mb="0.5rem" textAlign="center" lineHeight={1.2}>
          {product.name}
        </H2>

        <Paragraph color="grey.600" textAlign="center" mb="1.5rem">
          {/*Starting at ${product.price} & save upto {product.discount}%*/}
        </Paragraph>

        <Link href={`/product/${product.name}`}>
          <StyledShopButton>SHOP NOW</StyledShopButton>
        </Link>
      </StyledFlexBox>

      <Image width="100%" src={product.image.url} alt="shoes" />
    </ContentWrapper>
  );
};

export default CarouselCard3;
