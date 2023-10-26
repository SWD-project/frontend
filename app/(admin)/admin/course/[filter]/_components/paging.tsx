'use client'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { useParams, useRouter } from 'next/navigation'
import FlexBetween from '@components/common/theme/flex-box/flex-between'
import FlexBox from '@components/common/theme/flex-box/flex-box'

const pageOptions = [
  { value: 10, name: '10 dòng / trang' },
  { value: 20, name: '20 dòng / trang' },
  { value: 50, name: '50 dòng / trang' }
]
const getPage = (params: URLSearchParams) => {
  return {
    page: Number.parseInt(params.get('page') !== null ? (params.get('page') as string) : '1'),
    numberLine: Number.parseInt(params.get('limit') !== null ? (params.get('limit') as string) : '10')
  }
}
export const Pagination = () => {
  const router = useRouter()
  const filter = decodeURIComponent(useParams().filter as string)
  const { page, numberLine } = getPage(new URLSearchParams(filter))

  const handlePageChange = (page: number, numberLine: number) => {
    const url = new URLSearchParams(filter)
    url.delete('page')
    url.delete('limit')

    url.append('page', page.toString())
    url.append('limit', numberLine.toString())

    router.push(`/admin/course/${url.toString()}`)
  }
  return (
    <FlexBetween>
      <div></div>
      <FlexBox padding={1} alignItems='center' whiteSpace='nowrap'>
        <FormControl
          fullWidth
          sx={{
            marginRight: '1rem'
          }}
        >
          <Select
            value={numberLine}
            size='small'
            sx={{
              width: 'fit-content'
            }}
          >
            {pageOptions.map(item => (
              <MenuItem
                onClick={() => {
                  handlePageChange(1, item.value)
                }}
                value={item.value}
                key={item.value}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton
          disabled={page === 1}
          onClick={() => {
            handlePageChange(page - 1, numberLine)
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <Typography
          sx={{
            fontWeight: 400,
            margin: '0px 10px 0px 10px',
            fontSize: '1rem'
          }}
        >
          {page}
        </Typography>
        <IconButton
          onClick={() => {
            handlePageChange(page + 1, numberLine)
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </FlexBox>
    </FlexBetween>
  )
}
