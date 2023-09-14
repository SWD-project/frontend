'use client'
import NextImage, { ImageProps } from 'next/image'
import {
  bgcolor,
  compose,
  spacing,
  borderRadius,
  SpacingProps,
  BordersProps,
  styled
} from '@mui/system/'

type Props = ImageProps & BordersProps & SpacingProps

const LazyImage = styled(({ borderRadius, ...rest }: Props) => <NextImage {...rest} />)(
  compose(spacing, borderRadius, bgcolor)
)

export default LazyImage
