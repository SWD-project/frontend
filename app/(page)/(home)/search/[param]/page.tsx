import Grid from '@mui/material/Grid'
import { Filter } from './_components'

export default async function Page() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Filter />
      </Grid>
    </Grid>
  )
}
