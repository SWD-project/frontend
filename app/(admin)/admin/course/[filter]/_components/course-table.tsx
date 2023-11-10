'use client'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import Paper from '@mui/material/Paper'
import Rating from '@components/common/theme/rating'
import { GetCourseByLectureResponse } from '@lib/model/course/get-course-lecture'
import { Pagination } from './paging'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { styled } from '@mui/material/styles'
import TableRow from '@mui/material/TableRow'
import LoadingButton from '@mui/lab/LoadingButton'
import { config } from '@lib/model'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useUpdateCourseStatus } from 'hook/use-update-course-status'
import { useSnackbar } from 'notistack'

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  },
  borderBottom: '1px solid #cbc4c4'
}))

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

export default function CourseTable({ data }: { data: GetCourseByLectureResponse[] }) {
  const router = useRouter()
  const [loading, setIsLoading] = useState<string | null>(null)
  const { enqueueSnackbar } = useSnackbar()
  const handleClick = async (courseId: string) => {
    try {
      setIsLoading(courseId)
      const res = await useUpdateCourseStatus({ courseId })
      enqueueSnackbar(res.message, { variant: res.status })
    } catch (error) {
    } finally {
      setIsLoading(null)
      router.refresh()
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Course Title</StyledTableCell>
            <StyledTableCell align='right'>Rating</StyledTableCell>
            <StyledTableCell align='right'>Price ($)</StyledTableCell>
            <StyledTableCell align='right'>Total Enrolled</StyledTableCell>
            <StyledTableCell align='right'>Total Money</StyledTableCell>
            <StyledTableCell align='right'>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <StyledTableRow
              sx={{
                cursor: 'pointer',
                ':hover': {
                  backgroundColor: '#e2e2e2'
                }
              }}
              key={row._id}
              onClick={() => {
                router.push(`/admin/course/update/${row._id}`)
              }}
            >
              <StyledTableCell component='th' scope='row'>
                {row.title}
              </StyledTableCell>
              <StyledTableCell align='right'>
                <Rating defaultValue={row.rating} precision={0.5} readOnly />
              </StyledTableCell>
              <StyledTableCell align='right'>{row.price}</StyledTableCell>
              <StyledTableCell align='right'>{row.totalEnrolled}</StyledTableCell>
              <StyledTableCell align='right'>{row.totalMoney}</StyledTableCell>
              <StyledTableCell align='right'>
                <LoadingButton
                  sx={{ color: 'white', width: '85px' }}
                  color={row.courseStatus === config.courseActive ? 'success' : 'error'}
                  variant='contained'
                  loading={loading === row._id}
                  onClick={() => {
                    handleClick(row._id)
                  }}
                >
                  {row.courseStatus === config.courseActive ? 'Active' : 'Inactive'}
                </LoadingButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination />
    </TableContainer>
  )
}
