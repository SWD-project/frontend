"use client"
import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import { ReactNode, useCallback, useState } from 'react'
import * as yup from 'yup'


import Image from '@components/common/theme/image'
import TextField from '@components/common/theme/text-field'
import { H1, H6 } from '@components/common/theme/typography'
import { useSignup } from 'hook/use-signup'
import { useRouter, useSearchParams } from 'next/navigation'
import EyeToggleButton from './eye-toggle-button'
import { Wrapper } from './login'
import FlexBox from '@components/common/theme/flex-box/flex-box'

const Register = ({children} : {
  children: ReactNode
}) => {
  const [submitting, setSubmitting] = useState(false)
  const signup = useSignup
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const searchParams = useSearchParams()
  const router = useRouter()
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible)
  }, [])

  const handleFormSubmit = async (values: any) => {
    try {
      setSubmitting(true)
      const data = await signup({
        email: values.email,
        firstName: values.first_name,
        lastName: values.last_name,
        password: values.password,
        redirectTo: searchParams.get("redirectTo")?.toString() || '/',
      })
      if (data.error === undefined) {
        console.log(data.res)
        enqueueSnackbar(data.res.body.data.customerRegister.message, { variant: 'success' })
        router.push(searchParams.get("redirectTo")?.toString() || '/')
      } else {
        enqueueSnackbar("Register fail", { variant: 'error' })
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

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    })

  return (
    <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
      <form onSubmit={handleSubmit}>
        <Image
          src="/assets/images/logo-v2.png"
          alt="Fado168"
          sx={{ m: 'auto', height: "44px" }}
        />

        <H1 textAlign="center" mt={1} mb={4} fontSize={16}>
          Create Your Account
        </H1>

        <TextField
          mb={1.5}
          fullWidth
          name="first_name"
          size="small"
          label="First Name"
          variant="outlined"
          onBlur={handleBlur}
          value={values.first_name}
          onChange={handleChange}
          placeholder="Ralph"
          error={!!touched.first_name && !!errors.first_name}
          helperText={(touched.first_name && errors.first_name) as string}
        />
        <TextField
          mb={1.5}
          fullWidth
          name="last_name"
          size="small"
          label="Last Name"
          variant="outlined"
          onBlur={handleBlur}
          value={values.last_name}
          onChange={handleChange}
          placeholder="Adwards"
          error={!!touched.last_name && !!errors.last_name}
          helperText={(touched.last_name && errors.last_name) as string}
        />

        <TextField
          mb={1.5}
          fullWidth
          name="email"
          size="small"
          type="email"
          variant="outlined"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label="Email"
          placeholder="example@mail.com"
          error={!!touched.email && !!errors.email}
          helperText={(touched.email && errors.email) as string}
        />

        <TextField
          mb={1.5}
          fullWidth
          size="small"
          name="password"
          label="Password"
          variant="outlined"
          autoComplete="on"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          type={passwordVisibility ? 'text' : 'password'}
          error={!!touched.password && !!errors.password}
          helperText={(touched.password && errors.password) as string}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            ),
          }}
        />

        <TextField
          fullWidth
          size="small"
          autoComplete="on"
          name="re_password"
          variant="outlined"
          label="Retype Password"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.re_password}
          type={passwordVisibility ? 'text' : 'password'}
          error={!!touched.re_password && !!errors.re_password}
          helperText={(touched.re_password && errors.re_password) as string}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            ),
          }}
        />

        <FormControlLabel
          name="agreement"
          className="agreement"
          onChange={handleChange}
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={values.agreement || false}
            />
          }
          label={
            <FlexBox
              flexWrap="wrap"
              alignItems="center"
              justifyContent="flex-start"
            >
              "By signing up, you agree to"
              <a href="/" target="_blank" rel="noreferrer noopener">
                <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
                  Terms & Condtion
                </H6>
              </a>
            </FlexBox>
          }
        />

        <LoadingButton
          loading={submitting}
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          sx={{ height: 44, backgroundColor: `#E3364E` }}
        >
          Create Account"
        </LoadingButton>
      </form>
      {children}
    </Wrapper>
  )
}

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  password: '',
  re_password: '',
  agreement: false,
}

const formSchema = yup.object().shape({
  first_name: yup.string().required('First Name is required'),
  last_name: yup.string().required('Last Name is required'),
  email: yup.string().email('invalid email').required('Email is required'),
  // phone: yup.string().required('Phone number is required'),
  password: yup.string().required('Password is required'),
  re_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please re-type password'),
  agreement: yup
    .bool()
    .test(
      'agreement',
      'You have to agree with our Terms and Conditions!',
      (value) => value
    )
    .required('You have to agree with our Terms and Conditions!'),
})

export default Register
