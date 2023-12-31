import { getConfig } from '@lib/handler/cookie'
import TanQueryProvider from 'context/tan-query'
import MuiTheme from 'context/theme/mui-theme'
import SnackbarProvider from 'hook/snackbar-provider'
import { cookies } from 'next/headers'
import { ReactNode } from 'react'

export default async function RootLayout({ children }: { children: ReactNode }) {
  const config = getConfig(cookies())
  return (
    <html>
      <body>
        <SnackbarProvider>
          <TanQueryProvider>
            <MuiTheme>{children}</MuiTheme>
          </TanQueryProvider>
        </SnackbarProvider>
      </body>
    </html>
  )
}
