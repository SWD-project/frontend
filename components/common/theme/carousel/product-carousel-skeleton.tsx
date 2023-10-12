"use client"
import Carousel from '@components/common/theme/carousel/carousel'
import { carouselStyled } from '@components/common/theme/carousel/styles'
import ProductCard13 from '@components/product/product-card-13'
import useWindowSize from 'hook/use-window-size'
import { useEffect, useState } from 'react'


// ======================================================================
const ProductCarouselSkeleton = () => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(5);
  useEffect(() => {
    if (width === 0) {
      setVisibleSlides(5);
    } else {
      if (width < 426) setVisibleSlides(1);
      else if (width < 650) setVisibleSlides(2);
      else if (width < 1024) setVisibleSlides(3);
      else if (width < 1200) setVisibleSlides(4);
      else setVisibleSlides(5);
    }
  }, [width]);
  const data = ['1', '2', '3', '4', '5']
  return (
    <Carousel totalSlides={visibleSlides} visibleSlides={visibleSlides} sx={carouselStyled}>
        {data.map((data) => (
            <ProductCard13 skeleton key={data} />
        ))}
    </Carousel>
  );
};

export default ProductCarouselSkeleton;
