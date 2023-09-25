/**
 *  Used in:
 *  1. wish-list page
 *  2. address and address-details page
 *  3. orders and order-details page
 *  4. payment-methods and payment-method-details page
 *  5. profile and edit profile page
 *  6. support-tickets page
 */

import SignOut from '@components/common/auth/sign-out'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { ReactNode } from 'react'
import Navigations from './_components/navigations'

// ======================================================
type Props = { children: ReactNode }
// ======================================================

export default function ProfileLayout({ children }: Props) {
  return (
    <Container sx={{ my: '2rem' }}>
      <Grid container spacing={3}>
        <Grid item lg={3} xs={12} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <Navigations />
          <SignOut />
        </Grid>

        <Grid item lg={9} xs={12}>
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}
