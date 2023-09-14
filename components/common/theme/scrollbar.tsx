"use client"
import { ReactNode } from 'react'
import { alpha, styled, SxProps } from '@mui/material/styles'

import SimpleBar from 'simplebar-react'

const StyledScrollBar = styled(SimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&.simplebar-visible:before': { opacity: 1 },
    '&:before': { backgroundColor: alpha(theme.palette.grey[400], 0.6) },
  },
  '& .simplebar-track.simplebar-vertical': { width: 9 },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': { height: 6 },
  '& .simplebar-mask': { zIndex: 'inherit' },
}))

// =============================================================
// @ts-ignore
interface ScrollbarProps extends SimpleBar.Props {
  sx?: SxProps
  children: ReactNode
}

// =============================================================

const Scrollbar = ({ children, sx, ...props }: ScrollbarProps) => {
  return (
    <StyledScrollBar sx={sx} {...props}>
      {children}
    </StyledScrollBar>
  )
}

export default Scrollbar
