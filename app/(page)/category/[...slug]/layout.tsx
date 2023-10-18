import FlexBox from '@components/common/theme/flex-box/flex-box'
import { H1 } from '@components/common/theme/typography'
import Container from '@mui/material/Container'
import { ReactNode } from 'react'

export default async function Layout({ children, params }: { children: ReactNode; params: { slug: string[] } }) {
  return (
    <Container sx={{ mt: '2rem' }}>
      <FlexBox mb={4} flexWrap='wrap'>
        <H1 color='primary.main' mr={1} lineHeight='1'>
          {params.slug[0]?.toUpperCase().replaceAll("-", " ")}
        </H1>
      </FlexBox>
      {children}
    </Container>
  )
}
