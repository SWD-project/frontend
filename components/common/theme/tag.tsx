'use client'
import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'

const StyledChip = styled(Chip)({
  borderRadius: '5px',
  color: 'white',
  width: "fit-content"
})
export const LevelTag = ({ level }: { level: number }) => {
  switch (level) {
    case 1:
      return <StyledChip size='small' sx={{ backgroundColor: '#92d050' }} label='Beginner' />
    case 2:
      return <StyledChip size='small' sx={{ backgroundColor: '#ffc000' }} label='Intermediate' />
    case 3:
      return <StyledChip size='small' sx={{ backgroundColor: '#c00000' }} label='Advanced' />
  }
}
