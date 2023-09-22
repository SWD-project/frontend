"use client"
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// custom styled components
const CardWrapper = styled(Box)<{ img: string; mode: string }>(({ theme, img, mode }) => ({
  minHeight: 400,
  display: 'flex',
  alignItems: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${img})`,
  backgroundColor: mode === 'dark' ? '#000' : '#fff',
  color: mode === 'light' ? theme.palette.dark.main : '#fff',
  [theme.breakpoints.down('md')]: {
    minHeight: 450,
    padding: 24,
    textAlign: 'center',
    backgroundImage: `url(${img})`,
    justifyContent: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: 200,
    padding: 24,
    textAlign: 'center',
    backgroundImage: `url(${img})`,
    justifyContent: 'center'
  }
}));

// ===============================================================
type CarouselCard4Props = {
  title?: string;
  bgImage?: string;
  category?: string;
  discount?: number;
  buttonLink?: string;
  buttonText?: string;
  description?: string;
  mode?: 'dark' | 'light';
};
// ===============================================================

const CarouselCard4 = ({
  bgImage,
  mode = 'dark'
}: CarouselCard4Props) => {
  return <CardWrapper img={bgImage || ''} mode={mode} />;
};

export default CarouselCard4;
