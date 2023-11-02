import FlexBox from '@components/common/theme/flex-box/flex-box'
import Close from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'

export const InputOutcome = ({
  value,
  setValue,
  deleteValue,
  index
}: {
  value: string
  setValue: any
  index: number
  deleteValue: any
}) => {
  return (
    <FlexBox>
      <TextField
        value={value}
        onChange={event => {
          setValue(index, event.target.value)
        }}
        variant='standard'
        fullWidth
      />
      <Close color='error' onClick={() => {
        deleteValue(index)
      }}/>
    </FlexBox>
  )
}
