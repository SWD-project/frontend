'use client'
import Image from '@components/common/theme/image'
import TextField from '@components/common/theme/text-field'
import { useFormik } from 'formik'
import { useCallback, useState } from 'react'
import * as yup from 'yup'
// import usePassword from '@framework/auth/use-reset-password'
import { H1, H6 } from '@components/common/theme/typography'
import { LoadingButton } from '@mui/lab'
import Box from '@mui/material/Box'
import Link from 'next/link'
import SocialButtons from './social-buttons'
import { useSnackbar } from 'notistack'
import FlexRowCenter from '@components/common/theme/flex-box/flex-grow-center'
import FlexBox from '@components/common/theme/flex-box/flex-box'

const initialValues = {
  email: ''
}
const formSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('Email is required')
})

const ForgotPassword = ({ setIsLogin }: any) => {
  const [submitting, setSubmitting] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const handleFormSubmit = useCallback(async (values: any) => {}, [])

  const onSubmit = async (values: any, gReCaptchaToken: string) => {
    try {
      setSubmitting(true)
      // const data = await resetPassword(values.email, gReCaptchaToken)
      // if (data.error === undefined) {
      //   enqueueSnackbar(data.res.body.data.forgotPassword.success, { variant: 'success' })
      // } else {
      //   enqueueSnackbar(data.error.error.message, { variant: 'error' })
      // }
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
    <>
      <form onSubmit={handleSubmit}>
        <Image src='/assets/images/logo-v2.png' alt='Fado168' sx={{ m: 'auto', height: '44px' }} />

        <H1 textAlign='center' mt={1} mb={4} fontSize={16}>
          'Welcome To DrawDemy'
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
          label='Email Reset'
          placeholder='example@mail.com'
          error={!!touched.email && !!errors.email}
          helperText={(touched.email && errors.email) as string}
        />

        <LoadingButton
          loading={submitting}
          fullWidth
          type='submit'
          color='primary'
          variant='contained'
          sx={{ height: 44, backgroundColor: `#E3364E` }}
        >
          'Reset'
        </LoadingButton>
      </form>
      <SocialButtons />

      <FlexRowCenter mt='1.25rem'>
        <Box>'Dont have account?</Box>
        <Link href={`/sign-up?redirectTo=`}>
          <H6 ml={1} borderBottom='1px solid' borderColor='grey.900'>
            'Sign Up'
          </H6>
        </Link>
      </FlexRowCenter>

      <FlexBox justifyContent='center' bgcolor='grey.200' borderRadius='4px' py={2.5} mt='1.25rem'>
        Already have an account?
        <H6
          ml={1}
          borderBottom='1px solid'
          borderColor='grey.900'
          sx={{
            cursor: 'pointer'
          }}
          onClick={() => {
            setIsLogin(true)
          }}
        >
          'Login'
        </H6>
      </FlexBox>
    </>
  )
}

export default ForgotPassword
