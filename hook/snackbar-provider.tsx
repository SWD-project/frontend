"use client"
import { styled } from '@mui/material/styles'
import { SnackbarProvider as NotistackProvider } from 'notistack'

// styled component
const Provider = styled(NotistackProvider)(({ theme }) => ({
  '&.SnackbarContent-root.SnackbarItem-contentRoot': {
    boxShadow: theme.shadows[2],
    color: theme.palette.common.black,
    background: theme.palette.common.white,
    fontFamily: theme.typography.fontFamily,
  },

  '&.SnackbarItem-variantSuccess .MuiSvgIcon-root': {
    color: theme.palette.success.main,
  },
  '&.SnackbarItem-variantError .MuiSvgIcon-root': {
    color: theme.palette.error.main,
  },
}))

// ========================================
type Props = { children: any }
// ========================================

const SnackbarProvider = ({ children }: Props) => {
  return (
    <Provider
      maxSnack={4}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      classes={{
        containerRoot: 'z-alert',
      }}
    >
      {children}
    </Provider>
  )
}

export default SnackbarProvider
