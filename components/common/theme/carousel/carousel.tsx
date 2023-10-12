"use client"
import { CSSProperties, Fragment, ReactNode, Children } from 'react';
import { SxProps } from '@mui/material/styles';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import clsx from 'clsx';
import { Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  StyledDot,
  StyledSlider,
  StyledDotGroup,
  StyledArrowBackButton,
  StyledArrowNextButton,
  StyledCarouselProvider
} from './styles';

// ===================================================================
export interface CarouselProps {
  children?: ReactNode;
  sx?: SxProps;
  step?: number;
  interval?: number;
  infinite?: boolean;
  autoPlay?: boolean;
  totalSlides: number;
  currentSlide?: number;
  visibleSlides?: number;
  naturalSlideWidth?: number;
  naturalSlideHeight?: number;
  isIntrinsicHeight?: boolean;
  hasMasterSpinner?: boolean;
  dotClass?: string;
  dotColor?: string;
  showDots?: boolean;
  dotGroupMarginTop?: string;
  spacing?: string;
  showArrow?: boolean;
  showArrowOnHover?: boolean;
  arrowButtonClass?: string;
  leftButtonClass?: string;
  rightButtonClass?: string;
  leftButtonStyle?: CSSProperties;
  rightButtonStyle?: CSSProperties;
  arrowButtonColor?: 'primary' | 'secondary' | 'inherit';
}

// ===================================================================

const Carousel = ({
  sx = {},
  step = 1,
  spacing = '1.5rem',
  infinite = false,
  children,
  autoPlay = false,
  interval = 2000,
  showDots = false,
  dotClass,
  dotColor,
  showArrow = true,
  totalSlides = 10,
  currentSlide,
  visibleSlides = 5,
  leftButtonClass,
  leftButtonStyle,
  arrowButtonClass,
  rightButtonClass,
  rightButtonStyle,
  hasMasterSpinner = false,
  isIntrinsicHeight = true,
  naturalSlideWidth = 100,
  dotGroupMarginTop = '2rem',
  naturalSlideHeight = 125
}: CarouselProps) => {
  return (
    <StyledCarouselProvider
      sx={sx}
      step={step}
      spacing={spacing}
      interval={interval}
      infinite={infinite}
      isPlaying={autoPlay}
      totalSlides={totalSlides}
      currentSlide={currentSlide}
      visibleSlides={visibleSlides}
      hasMasterSpinner={hasMasterSpinner}
      isIntrinsicHeight={isIntrinsicHeight}
      naturalSlideWidth={naturalSlideWidth || 100}
      naturalSlideHeight={naturalSlideHeight || 125}
    >
      <StyledSlider spacing={spacing}>
        {Children.map(children, (child, ind) => (
          <Slide index={ind}>{child}</Slide>
        ))}
      </StyledSlider>

      {showDots && (
        <StyledDotGroup
          className={clsx(dotClass)}
          dot_margin_top={dotGroupMarginTop}
          renderDots={(props: any) => renderDots({ ...props, step, dotColor })}
        />
      )}

      {showArrow && (
        <Fragment>
          <StyledArrowBackButton
            id="backArrowButton"
            sx={{ left: '-20px' }}
            style={leftButtonStyle || {}}
            className={clsx(leftButtonClass, arrowButtonClass)}
          >
            <ArrowBack fontSize="small" color="inherit" />
          </StyledArrowBackButton>

          <StyledArrowNextButton
            id="backForwardButton"
            sx={{ right: '-20px' }}
            style={rightButtonStyle || {}}
            className={clsx(arrowButtonClass, rightButtonClass)}
          >
            <ArrowForward fontSize="small" color="inherit" />
          </StyledArrowNextButton>
        </Fragment>
      )}
    </StyledCarouselProvider>
  );
};

const renderDots = ({
  step,
  dotColor,
  totalSlides,
  currentSlide,
  visibleSlides,
  carouselStore
}: any) => {
  const dots = [];
  const total = totalSlides - visibleSlides + 1;
  // handle dot button
  const handleClick = (currentSlide: any, autoplay: boolean) => {
    carouselStore.setStoreState({
      autoPlay: autoplay,
      currentSlide: currentSlide
    });
  };

  for (let i = 0; i < total; i += step) {
    dots.push(
      <StyledDot
        dot_color={dotColor}
        onClick={() => handleClick(i, false)}
        dot_active={currentSlide === i ? i + 1 : 0}
        key={(Math.random() * i + Date.now()).toString()}
      />
    );

    if (total - (i + 1) < step && total - (i + 1) !== 0) {
      dots.push(
        <StyledDot
          dot_color={dotColor}
          dot_active={totalSlides - visibleSlides}
          key={(Math.random() * i + Date.now()).toString()}
          onClick={() => handleClick(totalSlides - visibleSlides, false)}
        />
      );
    }
  }
  return dots;
};

export default Carousel;
