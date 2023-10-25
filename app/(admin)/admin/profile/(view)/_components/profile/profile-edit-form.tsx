'use client'
import { Formik } from 'formik'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import * as yup from 'yup'

import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/navigation'
import { User } from '@lib/model/user'
import { useUpdateAccount } from 'hook/use-update-account'

const ProfileEditForm = ({ user }: { user?: User }) => {
  const [submitting, setSubmitting] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()
  const updateCustomer = useUpdateAccount()
  const INITIAL_VALUES = {
    email: user?.email || '',
    lastName: user?.lastName || '',
    firstName: user?.firstName || ''
  }

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup.string().email('invalid email').required('required')
  })

  const handleFormSubmit = async (values: any) => {
    try {
      setSubmitting(true)
      const data = await updateCustomer({ firstName: values.firstName, lastName: values.lastName, email: values.email })
      if (data.error === undefined) {
        router.refresh()
        enqueueSnackbar(data.res.body.data.updateAccount.message, {
          variant: 'success'
        })
      } else {
        enqueueSnackbar(data.error.message, { variant: 'error' })
      }
    } catch (error) {
      if (error instanceof Error) {
        enqueueSnackbar(error.message, { variant: 'error' })
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* PROFILE EDITOR FORM */}
      <Formik
        onSubmit={handleFormSubmit}
        enableReinitialize
        initialValues={INITIAL_VALUES}
        validationSchema={checkoutSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Box mb={4}>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    name='firstName'
                    label='First Name'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={(touched.firstName && errors.firstName) as string}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    name='lastName'
                    label='Last Name'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={(touched.lastName && errors.lastName) as string}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    name='email'
                    type='email'
                    label='Email'
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    error={!!touched.email && !!errors.email}
                    helperText={(touched.email && errors.email) as string}
                  />
                </Grid>
              </Grid>
            </Box>

            <LoadingButton loading={submitting} type='submit' variant='contained' color='primary'>
              Save Changes
            </LoadingButton>
          </form>
        )}
      </Formik>
    </>
  )
}

export default ProfileEditForm
