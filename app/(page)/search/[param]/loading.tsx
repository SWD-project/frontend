import ProductCard13 from '@components/product/product-card-13'
import Grid from '@mui/material/Grid'

export default function Loading() {
  const data = ['1', '2', '3', '4', '5', '6', '7', '8']
  return (
    <Grid container spacing={3}>
      {data.map(data => (
        <Grid item lg={3} sm={4} xs={12} key={data}>
        <ProductCard13 skeleton />
      </Grid>
      ))}
    </Grid>
  )
}
