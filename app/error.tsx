'use client'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <Typography variant='h4' gutterBottom>
          Something went wrong.
        </Typography>
        <Button variant='contained' color='primary'>
          <Link href='/'>Go to Home</Link>
        </Button>
      </div>
    </div>
  )
}
