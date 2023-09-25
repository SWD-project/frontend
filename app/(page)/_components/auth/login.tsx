'use client'
import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'
import Card, { CardProps } from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useSnackbar } from 'notistack'
import { useCallback, useState } from 'react'
import * as yup from 'yup'

import Image from '@components/common/theme/image'
import { H1, H6 } from '@components/common/theme/typography'

import TextField from '@components/common/theme/text-field'
import { useLogin } from 'hook/use-login'
import { usePathname, useRouter } from 'next/navigation'
import EyeToggleButton from './eye-toggle-button'
import FlexBox from '@components/common/theme/flex-box/flex-box'
import SocialButtons from './social-button'

const fbStyle = { background: '#3B5998', color: 'white' }
const googleStyle = { background: '#4285F4', color: 'white' }

type WrapperProps = { passwordVisibility?: boolean }

export const Wrapper = styled(({ children, passwordVisibility, ...rest }: WrapperProps & CardProps) => (
  <Card {...rest}>{children}</Card>
))<CardProps>(({ theme, passwordVisibility }) => ({
  width: 500,
  padding: '2rem 3rem',
  [theme.breakpoints.down('sm')]: { width: '100%' },
  '.passwordEye': {
    color: passwordVisibility ? theme.palette.grey[600] : theme.palette.grey[400]
  },
  '.facebookButton': { marginBottom: 10, ...fbStyle, '&:hover': fbStyle },
  '.googleButton': { ...googleStyle, '&:hover': googleStyle },
  '.agreement': { marginTop: 12, marginBottom: 24 }
}))

type LoginProps = {
  onClose?: () => void
}

const Login = ({ onClose }: LoginProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const login = useLogin()
  const router = useRouter()
  const pathName = usePathname()
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility(visible => !visible)
  }, [])

  const handleFormSubmit = async (values: any) => {
    try {
      setSubmitting(true)
      const res = await login(values.email, values.password)
      if (res.error === undefined) {
        router.refresh()
        onClose && onClose()
        enqueueSnackbar('Login success', { variant: 'success' })
      } else {
        enqueueSnackbar('Login fails', { variant: 'error' })
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        enqueueSnackbar(error.message, { variant: 'error' })
      }
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: formSchema
  })

  return (
    <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
      <form onSubmit={handleSubmit}>
        <Image src='/assets/images/logo-v2.png' alt='Fado168' sx={{ m: 'auto', height: '44px' }} />

        <H1 textAlign='center' mt={1} mb={4} fontSize={16}>
          Welcome to DrawDemy
        </H1>

        <TextField
          mb={1.5}
          fullWidth
          name='email'
          size='small'
          type='email'
          variant='outlined'
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label='Email'
          placeholder='example@mail.com'
          error={!!touched.email && !!errors.email}
          helperText={(touched.email && errors.email) as string}
        />

        <TextField
          mb={2}
          fullWidth
          size='small'
          name='password'
          label='Password'
          autoComplete='on'
          variant='outlined'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          placeholder='*********'
          type={passwordVisibility ? 'text' : 'password'}
          error={!!touched.password && !!errors.password}
          helperText={(touched.password && errors.password) as string}
          InputProps={{
            endAdornment: <EyeToggleButton show={passwordVisibility} click={togglePasswordVisibility} />
          }}
        />

        <LoadingButton
          loading={submitting}
          fullWidth
          type='submit'
          color='primary'
          variant='contained'
          sx={{
            height: 44,
            backgroundColor: `#E3364E`
          }}
        >
          Login
        </LoadingButton>
        <SocialButtons />
        <FlexBox justifyContent='center' bgcolor='grey.200' borderRadius='4px' py={2.5} mt='1.25rem'>
          <Box>Dont have account?</Box>
          <Link href={`/sign-up?redirectTo=${pathName}`}>
            <H6 ml={1} borderBottom='1px solid' borderColor='grey.900'>
              Sign Up
            </H6>
          </Link>
        </FlexBox>
      </form>
    </Wrapper>
  )
}

const initialValues = {
  email: '',
  password: ''
}

const formSchema = yup.object().shape({
  password: yup.string().required('Password is required'),
  email: yup.string().email('Invalid email').required('Email is required')
})

export default Login
