"use client"
import Box, { BoxProps } from '@mui/material/Box'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { Small } from './typography'

type Props = TextFieldProps & BoxProps

const MyTextField = ({ label, InputProps, ...props }: Props) => {
  const boxProps: BoxProps = {}
  const textFieldProps: TextFieldProps = {}

  const objKeys = Object.keys(props) as Array<keyof Props>
  objKeys.forEach((key: keyof Props) => {
    if (spacePropList.includes(key)) {
      // @ts-ignore
      boxProps[key] = props[key]
    } else {
      // @ts-ignore
      textFieldProps[key] = props[key]
    }
  })

  return (
    <Box {...boxProps}>
      {label && (
        <Small
          display="block"
          mb={1}
          textAlign="left"
          fontWeight="600"
          color="grey.700"
        >
          {label}
        </Small>
      )}

      <TextField
        InputProps={{
          ...InputProps,
          style: { ...InputProps?.style, height: 44 },
        }}
        {...textFieldProps}
      />
    </Box>
  )
}

const spacePropList = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingX',
  'paddingY',
]

export default MyTextField
