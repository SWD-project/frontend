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
import { getAccessToken } from '@lib/handler/user-cookie'
import { cookies } from 'next/headers'
import { getCustomer } from '@lib/customer/get-customer'
import { config } from '@lib/model'
import Navigations from 'app/(page)/(customer)/_components/navigations'

// ======================================================
type Props = { children: ReactNode }
// ======================================================

export default async function ProfileLayout({ children }: Props) {
  const accessToken = getAccessToken(cookies())
  const user = await getCustomer(accessToken, {});
  return (
    <Container sx={{ my: '2rem' }}>
      <Grid container spacing={3}>
        <Grid item lg={3} xs={12} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <Navigations isLecture={user.data[0]?.roleId === config.lecture}/>
        </Grid>

        <Grid item lg={9} xs={12}>
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}
