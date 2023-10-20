'use client'
import FlexBox from '@components/common/theme/flex-box/flex-box'
import Image from '@components/common/theme/image'
import { Span } from '@components/common/theme/typography'
import { Course } from '@lib/model/course'
import Close from '@mui/icons-material/Close'
import LoadingButton from '@mui/lab/LoadingButton'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// styled components
const Wrapper = styled(Card)(({ theme }) => ({
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  position: 'relative',
  borderRadius: '10px',
  marginBottom: '1.5rem',
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,

  '@media only screen and (max-width: 425px)': {
    flexWrap: 'wrap',
    img: { height: 'auto', minWidth: '100%' }
  }
}))

// =========================================================
type ProductCardProps = {
  item: Course
}
// =========================================================

const ProductCard7 = ({ item }: ProductCardProps) => {
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false)
  const handleClose = () => {
    setOpenRemoveDialog(false)
  }
  const [isRemoveItem, setIsRemoveItem] = useState(false)

  const [isLoadingCart, setIsLoadingCart] = useState(false)
  const [cartAmount, setCartAmount] = useState(0)

  // handle change cart
  const handleCartAmountChange = (amount: number) => async () => {
    setCartAmount(cartAmount => cartAmount + amount)
  }

  return (
    <Wrapper>
      <Image alt={item.title} width={140} height={140} src={item.thumbnailUrl} />
      <IconButton size='small' sx={{ position: 'absolute', right: 15, top: 15 }}>
        <Close fontSize='small' />
      </IconButton>

      <FlexBox p={2} rowGap={2} width='100%' flexDirection='column'>
        <Link href={`/course/details/${item._id}`}>
          <Span ellipsis fontWeight='600' fontSize={18}>
            {item.title}
          </Span>
        </Link>

        <FlexBox gap={1} flexWrap='wrap' alignItems='center'>
          <Span fontWeight={600} color='primary.main'>
            ${item.price - (item.price * item.discountPercent) / 100}
          </Span>
        </FlexBox>
        
      </FlexBox>
      <Dialog
        sx={{
          zIndex: 9999
        }}
        open={openRemoveDialog}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Remove item</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Do you want to remove this product from the shopping cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <LoadingButton loading={isRemoveItem} color='error' sx={{ px: 4 }} autoFocus>
            Agree
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </Wrapper>
  )
}

export default ProductCard7
