"use client"
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import SearchOutlined from '@mui/icons-material/SearchOutlined'

export const SearchOutlinedIcon = styled(SearchOutlined)(({ theme }) => ({
  color: theme.palette.grey[600],
  marginRight: 6,
}))

export const SearchResultCard = styled(Card)({
  zIndex: 99,
  top: '100%',
  width: '100%',
  position: 'absolute',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
})
