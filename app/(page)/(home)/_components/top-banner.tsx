'use client'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { CSSObject } from '@mui/material/styles'
import Carousel from './carousel-cards/carousel/carousel'
import CarouselCard4 from './carousel-cards/carousel-card-4'
import { H1 } from '@components/common/theme/typography'
import { fontSize } from '@mui/system'

interface MainCarouselItem {
  title?: string
  imgUrl?: string
  category?: string
  discount?: number
  buttonLink?: string
  buttonText?: string
  description?: string
}

// ======================================================
type Props = { carouselData: MainCarouselItem[] }
// ======================================================

const TopBanner = ({ carouselData }: Props) => {
  const carouselStyles: CSSObject = {
    overflow: 'hidden',
    borderRadius: '3px',
    '& .carousel__dot-group': {
      mt: 0,
      left: 0,
      right: 0,
      bottom: 10,
      position: 'absolute',
      '& div': {
        borderColor: 'dark.main',
        '::after': { backgroundColor: 'dark.main' }
      }
    }
  }

  const OverLoad = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          width: '1328px',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.5)',
          position: 'absolute',
          zIndex: 1,
          alignItems: 'center',
          color: 'white',
          paddingLeft: '100px'
        }}
      >
        <H1 fontSize={50}>
          Draw Demy
          <br></br>
          <span style={{ fontSize: '25px', fontWeight: 400 }}>Unlock Your Creative Potential with Our Drawing Course!</span>
        </H1>
      </Box>
    )
  }
  return (
    <Box pt={3}>
      <Container sx={{ position: 'relative' }}>
        <OverLoad />
        <Carousel
          spacing='0px'
          infinite={true}
          showDots={true}
          autoPlay={true}
          visibleSlides={1}
          showArrow={false}
          sx={carouselStyles}
          totalSlides={carouselData.length}
          arrowButtonColor='secondary'
        >
          {carouselData.map((item, index) => (
            <CarouselCard4
              key={index}
              mode='light'
              title={item.title}
              bgImage={item.imgUrl}
              discount={item.discount}
              category={item.category}
              buttonLink={item.buttonLink}
              buttonText={item.buttonText}
              description={item.description}
            />
          ))}
        </Carousel>
      </Container>
    </Box>
  )
}

export default TopBanner
