'use client'
import { useState } from 'react'

import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import LogoutIcon from '@mui/icons-material/Logout'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'
import { useLogout } from 'hook/use-logout'
import FlexBetween from '@components/common/theme/flex-box/flex-between'

/**
 *  Used in:
 *  1. wish-list page
 *  2. address and address-details page
 *  3. orders and order-details page
 *  4. payment-methods and payment-method-details page
 *  5. profile and edit profile page
 *  6. support-tickets page
 */
// ======================================================
// ======================================================
const AuthContainer = styled(Card)(({ theme }) => ({
  marginTop: '1.5rem',
  paddingBottom: '0.5rem',

  [theme.breakpoints.down('md')]: {
    boxShadow: 'none',
    overflowY: 'auto',
    height: 'calc(100vh - 64px)'
  }
}))

const SignOut = () => {
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false)
  const signOut = useLogout
  const router = useRouter()
  const handleConfirmLogout = () => {
    setOpenLogoutDialog(true)
  }
  const handleClose = () => {
    setOpenLogoutDialog(false)
  }

  const handleSignOut = async () => {
    setOpenLogoutDialog(false)
    await signOut()
    router.refresh()
    router.replace('/')
  }
  return (
    <>
      <Button
        onClick={handleConfirmLogout}
        sx={{
          padding: 1.25,
          bgcolor: '#F3F5F9',
          cursor: 'pointer',
          width: 150
        }}
      >
        <FlexBetween>
          <LogoutIcon color='primary' sx={{marginRight: 1}} />
          <span >Log out</span>
        </FlexBetween>
      </Button>
      <Dialog
        open={openLogoutDialog}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Logout</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>Do you really want sign out?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button color='error' sx={{ px: 4 }} onClick={handleSignOut} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SignOut
