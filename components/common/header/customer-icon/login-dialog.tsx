'use client'
import User from '@components/common/theme/icons/user'
import PersonOutline from '@mui/icons-material/PersonOutline'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Login from 'app/(page)/_components/auth/login'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
export const LoginDialog = ({ accessToken }: { accessToken: string }) => {
  const theme = useTheme()
  const [dialogOpen, setDialogOpen] = useState(false)
  const router = useRouter()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const downMd = useMediaQuery(theme.breakpoints.down(1150))
  const toggleDialog = () => {
    setDialogOpen(!dialogOpen)
  }
  const handleClickUser = async () => {
    if (accessToken !== '') {
      router.push('/profile')
    } else {
      setDialogOpen(true)
    }
  }

  const DIALOG_DRAWER = (
    <Dialog scroll='body' open={dialogOpen} fullWidth={isMobile} onClose={toggleDialog} sx={{ zIndex: 9999 }}>
      <Login onClose={toggleDialog} />
    </Dialog>
  )
  if (downMd) {
    const ICON_STYLE = { color: 'grey.600', fontSize: 20 }
    return (
      <>
        <Box component={IconButton} onClick={handleClickUser}>
          <User sx={ICON_STYLE} />
        </Box>
        {DIALOG_DRAWER}
      </>
    )
  }
  return (
    <>
      <Box component={IconButton} p={1.25} bgcolor='#F3F5F9' onClick={handleClickUser}>
        <PersonOutline />
      </Box>
      {DIALOG_DRAWER}
    </>
  )
}
