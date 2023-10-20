/**
 *  Used in:
 *  1. wish-list page
 *  2. address and address-details page
 *  3. orders and order-details page
 *  4. payment-methods and payment-method-details page
 *  5. profile and edit profile page
 *  6. support-tickets page
 */

import Container from '@mui/material/Container'
import { ReactNode } from 'react'

// ======================================================
type Props = { children: ReactNode }
// ======================================================

export default function ProfileLayout({ children }: Props) {
  return <Container sx={{ my: '2rem' }}>{children}</Container>
}
