'use client'
import Card1 from '@components/common/theme/card1'
import { config } from '@lib/model'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const getPage = (params: URLSearchParams) => {
  return {
    level: params.get('level') !== null ? (params.get('level') as string) : ''
  }
}

export const Filter = () => {
  const params = decodeURIComponent(useParams().param as string)
  const router = useRouter()
  const { level } = getPage(new URLSearchParams(params))
  let listLevel = level.split('-')

  const handleLevelRouter = (id: string, isChecked: boolean) => {
    const url = new URLSearchParams(params)
    if (isChecked) {
      listLevel = listLevel.filter(value => value !== id)
    } else {
      listLevel.push(id)
    }
    url.delete('level')
    url.append('level', listLevel.join('-'))
    router.push(`http://localhost:3000/search/${url.toString()}`)
  }
  return (
    <Card1>
      <Stack spacing={3}>
        <div>
          <Typography variant='h6'>Levels</Typography>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  id='1'
                  onClick={event => {
                    handleLevelRouter('1', listLevel.indexOf(config.basic + '') !== -1)
                  }}
                  checked={listLevel.indexOf(config.basic + '') !== -1}
                />
              }
              label='Beginers'
            />
            <FormControlLabel
              control={
                <Checkbox
                  id='2'
                  onClick={event => {
                    handleLevelRouter('2', listLevel.indexOf(config.intermediate + '') !== -1)
                  }}
                  checked={listLevel.indexOf(config.intermediate + '') !== -1}
                />
              }
              label='Intermediate'
            />
            <FormControlLabel
              control={
                <Checkbox
                  id='3'
                  onClick={event => {
                    handleLevelRouter('3', listLevel.indexOf(config.advanced + '') !== -1)
                  }}
                  checked={listLevel.indexOf(config.advanced + '') !== -1}
                />
              }
              label='Advanced'
            />
          </FormGroup>
        </div>
      </Stack>
    </Card1>
  )
}
