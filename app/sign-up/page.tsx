import FlexRowCenter from "@components/common/theme/flex-box/flex-grow-center";
import { H6 } from "@components/common/theme/typography";
import { Box } from "@mui/material";
import Register from "app/(home)/_components/auth/register";
import Link from "next/link";


export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and BigCommerce.',
  title: "Register",
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
export default async function SignUp() {
  return (
    <FlexRowCenter flexDirection="column" minHeight="100vh">
      <Register>
          <FlexRowCenter mt="1.25rem">
            <Box>Already have an account?</Box>
            <Link href="/" passHref legacyBehavior>
              <H6 ml={1} borderBottom="1px solid" borderColor="grey.900" sx={{
                cursor: "pointer"
              }}>
                Login
              </H6>
            </Link>
          </FlexRowCenter>
      </Register>
    </FlexRowCenter>
  )
}
