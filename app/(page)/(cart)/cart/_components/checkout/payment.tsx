'use client'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Checkbox from '@mui/material/Checkbox'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'

export default function CheckoutPayment({ setIsChecked }: { setIsChecked: any }) {
  const paymentList = [
    {
      id: 1,
      name: 'VN PAY'
    }
  ]
  return (
    <>
      <Typography
        variant='h6'
        sx={{
          fontWeight: '700'
        }}
      >
        Payment
      </Typography>
      {paymentList.map(payment => (
        <div
          style={{
            border: '2px solid #e3364e',
            borderRadius: '4px',
            marginTop: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            padding: '5px 10px'
          }}
          key={payment.id}
        >
          <CardMedia
            component='img'
            src={'/assets/images/VNPAY.jpg'}
            sx={{
              width: '3rem',
              height: '3rem',
              marginRight: '1rem'
            }}
          />
          <Typography
            sx={{
              fontWeight: '700'
            }}
          >
            {payment.name}
          </Typography>
          <Box flexGrow={1}></Box>
          <Checkbox
            color='success'
            onChange={(event, checked) => {
              setIsChecked(checked)
            }}
          />
        </div>
      ))}
    </>
  )
}
