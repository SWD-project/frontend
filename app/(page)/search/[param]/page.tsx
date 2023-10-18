import Grid from '@mui/material/Grid'
import { Filter } from './_components'
import Card1 from '@components/common/theme/card1'
import { H4 } from '@components/common/theme/typography'
import Container from '@mui/material/Container'

export default async function Page({ params }: { params: { param: string } }) {
  return (
    <Container>
      <Grid container spacing={3} marginTop={1}>
        <Grid item xs={12}>
          <Card1>
            <H4>Search for "{params.param}"</H4>
          </Card1>
        </Grid>
        <Grid item xs={2.67}>
          <Filter />
        </Grid>
      </Grid>
    </Container>
  )
}
