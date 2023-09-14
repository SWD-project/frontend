"use client"
import Login from '@components/auth/login'
import Icon from '@components/common/theme/icons'
import { PersonOutline } from "@mui/icons-material"
import { Box, Dialog, IconButton, useMediaQuery, useTheme } from "@mui/material"
import { useRouter } from "next/navigation"
import { Fragment, useState } from "react"
export const LoginDialog = ({ accessToken }: {
  accessToken: string
}) => {
  const theme = useTheme()
  const [dialogOpen, setDialogOpen] = useState(false)
  const router = useRouter()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const downMd = useMediaQuery(theme.breakpoints.down(1150))
  const toggleDialog = () => {
    setDialogOpen(!dialogOpen)
  }
  const handleClickUser = async () => {
    if (accessToken !== "") {
      router.push('/profile')
    } else {
      setDialogOpen(true)
    }
  }

  const DIALOG_DRAWER = (
    <Fragment>
      <Dialog
        scroll="body"
        open={dialogOpen}
        fullWidth={isMobile}
        onClose={toggleDialog}
        sx={{ zIndex: 9999 }}
      >
        <Login onClose={toggleDialog} />
      </Dialog>
    </Fragment>
  )
  if (downMd) {
    const ICON_STYLE = { color: 'grey.600', fontSize: 20 }
    return (
      <>
        <Box component={IconButton} onClick={handleClickUser}>
          <Icon.User sx={ICON_STYLE} />
        </Box>
        {DIALOG_DRAWER}
      </>
    )
  }
  return (
    <>
      <Box
        component={IconButton}
        p={1.25}
        bgcolor="#F3F5F9"
        onClick={handleClickUser}
      >
        <PersonOutline />
      </Box>
      {DIALOG_DRAWER}
    </>
  )
}