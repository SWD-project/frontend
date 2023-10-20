import LazyImage from '@components/common/theme/lazy-image'
import { H5 } from '@components/common/theme/typography'
import { Course } from '@lib/model/course'
import Box from '@mui/material/Box'

export const ProductCard21 = ({ course }: { course: Course }) => {
  return (
    <Box>
      <LazyImage
        alt={course.title || 'product'}
        src={course.thumbnailUrl}
        width={250}
        height={250}
        style={{
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          maxHeight: '100px'
        }}
      />
      {/* @ts-ignore */}
      <H5 width={250} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap !important'}>
        {course.title}
      </H5>
    </Box>
  )
}
