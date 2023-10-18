import ProductCard20 from '@components/product/product-card-20'
import { Grid } from '@mui/material'

export default function Loading() {
  const data = ['1', '2', '3', '4', '5', '6']
  return (
    <Grid sx={{ minHeight: 'auto' }} container spacing={3} minHeight={500}>
      {data.map(data => (
        <Grid item lg={2} md={3} sm={4} xs={6} key={data}>
          <ProductCard20 skeleton />
        </Grid>
      ))}
    </Grid>
  )
}
