"use client"
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
import FlexBox from '../theme/flex-box/flex-box'


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
type Props = {}
// ======================================================
const AuthContainer = styled(Card)(({ theme }) => ({
  marginTop: '1.5rem',
  paddingBottom: '0.5rem',

  [theme.breakpoints.down('md')]: {
    boxShadow: 'none',
    overflowY: 'auto',
    height: 'calc(100vh - 64px)',
  },
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
    router.replace("/")
  }
  return (
    <>
      <AuthContainer>
        <FlexBox
          p="26px 30px 1rem"
          color="primary.main"
          alignItems="center"
          gap={1}
          onClick={handleConfirmLogout}
          sx={{
            cursor: "pointer"
          }}
        >
          <LogoutIcon color="inherit" fontSize="small" className="nav-icon" />
          <span>Log out</span>
        </FlexBox>
      </AuthContainer>
      <Dialog
        open={openLogoutDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Logout</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want sign out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button
            color="error"
            sx={{ px: 4 }}
            onClick={handleSignOut}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SignOut
