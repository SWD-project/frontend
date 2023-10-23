import Card from '@components/common/theme/card';
import LazyImage from '@components/common/theme/lazy-image'
import { H1, Paragraph } from '@components/common/theme/typography'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from 'next/link'

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and BigCommerce.',
  title: "Success",
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
};

export default async function CheckoutSuccess() {
  return (
    <>
      {/*<SEO title="Order Confirmation" />*/}

      <Container sx={{ mt: 4, mb: 20 }}>
        <Card sx={{
            margin: 'auto',
            padding: '3rem',
            maxWidth: '630px',
            textAlign: 'center',
        }}>
          <LazyImage
            width={116}
            height={116}
            alt="complete"
            src="/assets/images/illustrations/party-popper.svg"
          />
          <H1 lineHeight={1.1} mt="1.5rem">
            Your order is completed!
          </H1>
{/* 
          <Paragraph color="grey.800" mt="0.3rem">
            You will be receiving confirmation email with order details")}.
          </Paragraph> */}

          <Link href="/" passHref>
            <Button
              color="primary"
              disableElevation
              variant="contained"
              className="button-link"
              sx={{
                marginTop: '2rem',
                padding: '11px 24px',
              }}
            >
              Browse courses
            </Button>
          </Link>
        </Card>
      </Container>
    </>
  )
}