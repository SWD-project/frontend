'use client'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Card1 from '../theme/card1'
export default async function Footer() {
  return (
    <>
      <Card1 sx={{marginTop: 1}}>
        <Container maxWidth='lg'>
          <Grid container>
            <Grid item xs={3}>
              <Stack spacing={1}>
                <h2>Drawdemy</h2>
                <Link href='#'>About</Link>
                <Link href='#'>What we offer</Link>
                <Link href='#'>Leadership</Link>
                <Link href='#'>Catalog</Link>
                <Link href='#'>Drawdemy Plus</Link>
                <Link href='#'>Professional Cetificate</Link>
                <Link href='#'>MasterTrack Cetificate</Link>
                <Link href='#'>Degrees</Link>
                <Link href='#'>For Enterprise</Link>
                <Link href='#'>For Campus</Link>
                <Link href='#'>Become Link Partner</Link>
                <Link href='#'>Coronavirus Respone</Link>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={1}>
                <h2>Community</h2>
                <Link href='#'>Leaners</Link>
                <Link href='#'>Partners</Link>
                <Link href='#'>Beta Testers</Link>
                <Link href='#'>Translators</Link>
                <Link href='#'>Blog</Link>
                <Link href='#'>Tech Blog</Link>
                <Link href='#'>Teaching Center</Link>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={1}>
                <h2>More</h2>
                <Link href='#'>Press</Link>
                <Link href='#'>Investors</Link>
                <Link href='#'>Terms</Link>
                <Link href='#'>Privacy</Link>
                <Link href='#'>Help</Link>
                <Link href='#'>Acessibility</Link>
                <Link href='#'>Contact</Link>
                <Link href='#'>Acticles</Link>
                <Link href='#'>Affiliates</Link>
                <Link href='#'>Modern Slavery Statement</Link>
                <Link href='#'>Do Not Shell/share</Link>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={1}>
                <h2>Mobile App</h2>
                <Link href='#'>
                  <img src='../../app/img/app-store-png-logo-33109.png' alt='App Store Logo' height='auto' />
                </Link>

                <Link href='#'>
                  <img src='../../app/img/Google-Play-Logo-PNG-Cutout.png' alt='Google Play Logo' height='auto' />
                </Link>
              </Stack>
            </Grid>
          </Grid>
          <Stack spacing={1} sx={{ marginTop: '50px' }}>
            <Grid container>
              <Grid item xs={8}>
                <Typography>© 2023 Drawdemy Inc. All rights reserved.</Typography>
              </Grid>

              <Grid item xs={4}>
                <Stack spacing={1} direction='row'>
                  <Link href='https://www.facebook.com/'>
                    <FacebookIcon />
                  </Link>

                  <Link href='https://vn.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F'>
                    <LinkedInIcon />
                  </Link>

                  <Link href='https://twitter.com/'>
                    <TwitterIcon />
                  </Link>

                  <Link href='https://www.youtube.com/'>
                    <YouTubeIcon />
                  </Link>

                  <Link href='https://www.instagram.com/?hl=en'>
                    <InstagramIcon />
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Card1>
    </>
  )
}
