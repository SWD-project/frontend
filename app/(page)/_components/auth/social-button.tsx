'use client'
import FlexBox from '@components/common/theme/flex-box/flex-box'
import Image from '@components/common/theme/image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

type SocialButtonsProps = {
  handleGoogle?: () => void
  handleFacebook?: () => void
}

const SocialButtons = (props: SocialButtonsProps) => {
  return (
    <>
      <Box mb={3} mt={3.8}>
        <Box width='200px' mx='auto'>
          <Divider />
        </Box>

        <FlexBox justifyContent='center' mt={-1.625}>
          <Box color='grey.600' bgcolor='background.paper' px={2}>
            or
          </Box>
        </FlexBox>
      </Box>

      <Button className='googleButton' size='medium' fullWidth sx={{ height: 44 }}>
        <Image src='/assets/images/icons/google-1.svg' alt='facebook' />
        <Box fontSize='12px' ml={1}>
          Continue with Google
        </Box>
      </Button>
    </>
  )
}

export default SocialButtons
