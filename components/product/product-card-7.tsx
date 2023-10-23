'use client'
import FlexBox from '@components/common/theme/flex-box/flex-box'
import Image from '@components/common/theme/image'
import Rating from '@components/common/theme/rating'
import { LevelTag } from '@components/common/theme/tag'
import { H1, H3, H4, Span } from '@components/common/theme/typography'
import { Course } from '@lib/model/course'
import Check from '@mui/icons-material/Check'
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
  position: 'relative',
  borderRadius: '10px',
  marginBottom: '1.5rem',
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.background.paper,

  '@media only screen and (max-width: 425px)': {
    flexWrap: 'wrap',
    img: { height: 'auto', minWidth: '100%' }
  }
}))

// =========================================================
type ProductCardProps = {
  item: Course
  isChecked: boolean
  onCheck: any
  onDelete: any
}
// =========================================================

const ProductCard7 = ({ item, isChecked, onCheck, onDelete }: ProductCardProps) => {
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false)
  const handleClose = () => {
    setOpenRemoveDialog(false)
  }
  const [isRemoveItem, setIsRemoveItem] = useState(false)
  return (
    <Wrapper>
      <Image alt={item.title} width={160} height={140} src={item.thumbnailUrl} />
      <FlexBox p={2} width='100%' flexDirection='column'>
        <Link href={`/course/details/${item._id}`}>
          <Span ellipsis fontWeight='600' fontSize={18}>
            {item.title}
          </Span>
        </Link>
        <FlexBox gap={1} alignItems='center' marginTop={2}>
          <Rating value={item.rating} color='warn' readOnly />
          <Span color='grey.600'>{`(${(item.discountPercent * 10 + 1) * item.title?.length})`}</Span>
        </FlexBox>
        <FlexBox alignItems={'center'} columnGap={1}>
          <LevelTag level={item.level} />
          <H4 color='primary.main'>${item.price - (item.price * item.discountPercent) / 100}</H4>
          {item.discountPercent !== 0 ? (
            <H4 sx={{ color: 'gray', textDecorationLine: 'line-through', fontWeight: 500 }}>${item.price}</H4>
          ) : (
            <></>
          )}
        </FlexBox>
      </FlexBox>
      <FlexBox p={2} flexDirection='column'>
        <IconButton sx={{ bgcolor: isChecked ? '#33d067' : '#F3F5F9' }} size='small' onClick={onCheck}>
          <Check sx={{ color: isChecked ? 'white' : '#707070' }} />
        </IconButton>
        <IconButton sx={{ bgcolor: '#F3F5F9' }} size='small' onClick={onDelete}>
          <Close color='error' />
        </IconButton>
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
