import { ReactNode } from 'react'
import Grid from '@mui/material/Grid'
import { Filter } from './_components/filter'
import Card1 from '@components/common/theme/card1'
import { H4 } from '@components/common/theme/typography'
import Container from '@mui/material/Container'

export default async function Layout({
  children,
  params
}: {
  children: ReactNode
  params: {
    param: string
  }
}) {
  const decodedQueryString = decodeURIComponent(params.param)
  const paramsArray = decodedQueryString.split('&')
  const filter: any = {}

  paramsArray.forEach(param => {
    const [key, value] = param.split('=')
    //@ts-ignore
    filter[key] = value
  })
  return (
    <Container>
      <Grid container spacing={3} marginTop={1}>
        <Grid item xs={12}>
          <Card1>
            <H4>Search for "{filter.name}"</H4>
          </Card1>
        </Grid>
        <Grid item xs={2.67}>
          <Filter />
        </Grid>
        <Grid item xs={12 - 2.67}>
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}
