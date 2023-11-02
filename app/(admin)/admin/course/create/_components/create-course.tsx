'use client'
'use client'
import FlexBetween from '@components/common/theme/flex-box/flex-between'
import Image from '@components/common/theme/image'
import TextField from '@components/common/theme/text-field'
import { CreateCourseRequest } from '@lib/model/course/create-course'
import LoadingButton from '@mui/lab/LoadingButton'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { Formik } from 'formik'
import { useCreateNewCourse } from 'hook/use-create-new-course'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import * as yup from 'yup'
import TextInput from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import { Small } from '@components/common/theme/typography'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { InputOutcome } from './input-outcome'
const categoryList = [
  {
    _id: '651e06337d2c1c9dcd655edb',
    name: 'Cartoon and comic',
    createdAt: '2023-10-05T00:41:23.118Z',
    updatedAt: '2023-10-05T00:41:23.118Z',
    __v: 0
  },
  {
    _id: '652019ee22caeb1c0334d6a5',
    name: 'Art History and Theory',
    createdAt: '2023-10-06T14:30:06.805Z',
    updatedAt: '2023-10-06T14:30:06.805Z',
    __v: 0
  },
  {
    _id: '65201a0722caeb1c0334d6a8',
    name: 'Foundational',
    createdAt: '2023-10-06T14:30:31.516Z',
    updatedAt: '2023-10-06T14:30:31.516Z',
    __v: 0
  },
  {
    _id: '65201a1722caeb1c0334d6ab',
    name: 'Digital',
    createdAt: '2023-10-06T14:30:47.050Z',
    updatedAt: '2023-10-06T14:30:47.050Z',
    __v: 0
  },
  {
    _id: '65201a2922caeb1c0334d6ae',
    name: 'Specialized',
    createdAt: '2023-10-06T14:31:05.595Z',
    updatedAt: '2023-10-06T14:31:05.595Z',
    __v: 0
  }
]
export default function CreateCourse() {
  const [submitting, setSubmitting] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()
  const [level, setLevel] = useState(1)
  const [outcome, setOutcome] = useState<string[]>([])
  const [categoryId, setCategoryId] = useState('65201a2922caeb1c0334d6ae')
  const handleUpdateOutcome = (index: number, value: string) => {
    const newOutcome = [...outcome]
    newOutcome[index] = value
    setOutcome(newOutcome)
  }
  const handleDeleteOutcome = (index: number) => {
    const newOutcome = [...outcome]
    newOutcome.splice(index, 1)
    setOutcome(newOutcome)
  }
  const handleFormSubmit = async (data: any) => {
    try {
      setSubmitting(true)
      const res = await useCreateNewCourse({ ...data, outcome: outcome.join('-'), level, categoryId })
      if (res.status === 'success') {
        router.push('/admin/course/page=1&limit=10')
        enqueueSnackbar(res.message, {
          variant: 'success'
        })
      } else {
        enqueueSnackbar(res.message, { variant: 'error' })
      }
    } catch (error: any) {
      if (error instanceof Error) {
        enqueueSnackbar(error.message, { variant: 'error' })
      }
    }
    console.log(data)
  }
  return (
    <Formik
      onSubmit={handleFormSubmit}
      enableReinitialize
      initialValues={INITIAL_VALUES}
      validationSchema={checkoutSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name='title'
                size='small'
                type='text'
                variant='outlined'
                onBlur={handleBlur}
                value={values.title}
                onChange={handleChange}
                label='Course Title'
                error={!!touched.title && !!errors.title}
                helperText={(touched.title && errors.title) as string}
              />
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  name='thumbnailUrl'
                  size='small'
                  type='text'
                  variant='outlined'
                  onBlur={handleBlur}
                  value={values.thumbnailUrl}
                  onChange={handleChange}
                  label='Course Image'
                  error={!!touched.thumbnailUrl && !!errors.thumbnailUrl}
                  helperText={(touched.thumbnailUrl && errors.thumbnailUrl) as string}
                />
                <Image
                  src={values.thumbnailUrl}
                  alt=''
                  width={250}
                  height={200}
                  sx={{
                    border: '1px solid gray',
                    borderRadius: 1,
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name='price'
                    size='small'
                    type='number'
                    variant='outlined'
                    onBlur={handleBlur}
                    value={values.price}
                    onChange={handleChange}
                    label='Course Price'
                    error={!!touched.price && !!errors.price}
                    helperText={(touched.price && errors.price) as string}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name='discountPercent'
                    size='small'
                    type='number'
                    variant='outlined'
                    onBlur={handleBlur}
                    value={values.discountPercent}
                    onChange={handleChange}
                    label='Course Discount'
                    error={!!touched.discountPercent && !!errors.discountPercent}
                    helperText={(touched.discountPercent && errors.discountPercent) as string}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextInput
                    fullWidth
                    name='description'
                    size='small'
                    type='number'
                    variant='outlined'
                    multiline
                    minRows={9}
                    onBlur={handleBlur}
                    value={values.description}
                    onChange={handleChange}
                    placeholder='Course Description'
                    error={!!touched.description && !!errors.description}
                    helperText={(touched.description && errors.description) as string}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Small display='block' mb={1} textAlign='left' fontWeight='600' color='grey.700'>
                Course Ourcome
              </Small>
              <Stack spacing={1}>
                {outcome.map((value, id) => (
                  <InputOutcome
                    deleteValue={handleDeleteOutcome}
                    key={id}
                    value={value}
                    setValue={handleUpdateOutcome}
                    index={id}
                  />
                ))}
                <Button
                  variant='outlined'
                  color='primary'
                  fullWidth
                  sx={{ height: 44 }}
                  onClick={() => {
                    const newOutcome = [...outcome, '']
                    setOutcome(newOutcome)
                  }}
                >
                  Add new outcome
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <Small display='block' mb={1} textAlign='left' fontWeight='600' color='grey.700'>
                  Course Level
                </Small>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={level}
                  size='small'
                  sx={{
                    height: 44
                  }}
                  onChange={event => {
                    setLevel(event.target.value as number)
                  }}
                >
                  <MenuItem key={1} value={1}>
                    Beginner
                  </MenuItem>
                  <MenuItem key={2} value={2}>
                    Intermediate
                  </MenuItem>
                  <MenuItem key={3} value={3}>
                    Advanced
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <Small display='block' mb={1} textAlign='left' fontWeight='600' color='grey.700'>
                  Course Category
                </Small>
                <Select
                  id='select-category'
                  value={categoryId}
                  size='small'
                  sx={{
                    height: 44
                  }}
                  onChange={event => {
                    setCategoryId(event.target.value as string)
                  }}
                >
                  {categoryList.map(value => (
                    <MenuItem key={value._id} value={value._id}>
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FlexBetween>
                <div></div>
                <LoadingButton color='primary' sx={{ textAlign: 'center' }} variant='contained' type='submit'>
                  Create new course
                </LoadingButton>
              </FlexBetween>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  )
}
const checkoutSchema = yup.object().shape({
  title: yup.string().required('required'),
  description: yup.string().required('required'),
  price: yup.number().required('required'),
  discountPercent: yup.number().min(0, 'min 0').max(100, 'max 100').required('required'),
  thumbnailUrl: yup.string().required('required')
})

const INITIAL_VALUES = {
  description: '',
  discountPercent: 0,
  price: 0,
  thumbnailUrl: '',
  title: ''
}
