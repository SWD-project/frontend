'use client'
import Card1 from '@components/common/theme/card1'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const Filter = () => {
  return (
    <Card1>
      <Stack spacing={3}>
        <Typography variant='h5'>Filter By</Typography>

        <div>
          <Typography variant='h6'>Skills</Typography>

          <FormGroup>
            <FormControlLabel control={<Checkbox />} label='Account Managerment' />
            <FormControlLabel required control={<Checkbox />} label='Accounting' />
            <FormControlLabel required control={<Checkbox />} label='Accounting Software' />
            <FormControlLabel required control={<Checkbox />} label='Accounts Payable' />
          </FormGroup>
        </div>
        <div>
          <Typography variant='h6'>Levels</Typography>

          <FormGroup>
            <FormControlLabel control={<Checkbox />} label='Beginers' />
            <FormControlLabel required control={<Checkbox />} label='Intermediate' />
            <FormControlLabel required control={<Checkbox />} label='Advanced' />
          </FormGroup>
        </div>
      </Stack>
    </Card1>
  )
}
