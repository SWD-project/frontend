import { getConfig } from '@lib/handler/cookie'
import TanQueryProvider from 'context/tan-query'
import ThemeRegistry from 'context/ui'
import SnackbarProvider from 'hook/snackbar-provider'
import { cookies } from 'next/headers'
import { ReactNode } from 'react'

export default async function RootLayout({ children }: { children: ReactNode }) {
  const config = getConfig(cookies())
  console.log(config)
  return (
    <html>
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          <SnackbarProvider>
            <TanQueryProvider>{children}</TanQueryProvider>
          </SnackbarProvider>
        </ThemeRegistry>
      </body>
    </html>
  )
}
