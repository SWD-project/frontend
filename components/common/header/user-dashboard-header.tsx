"use client"
import FlexBox from '@components/common/theme/flex-box/flex-box'
import Sidenav from '@components/common/theme/sidenav'
import { H2 } from '@components/common/theme/typography'
import Menu from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import useWindowSize from 'hook/use-window-size'


const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(-2),
  marginBottom: theme.spacing(3),
  '& .headerHold': {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.up('md')]: {
    '& .sidenav': { display: 'none' },
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}))

// ==============================================================
type UserDashboardHeaderProps = {
  icon?: any
  button?: any
  title?: string | null
  navigation?: any
}
// ==============================================================

const UserDashboardHeader = ({
  title,
  button,
  navigation,
  ...props
}: UserDashboardHeaderProps) => {
  const width = useWindowSize()
  const isTablet = width < 1025

  return (
    <StyledBox>
      <FlexBox mt={2} className="headerHold">
        <FlexBox alignItems="center">
          {props.icon && <props.icon color="primary" />}
          <H2 ml={1.5} my="0px" lineHeight="1" whiteSpace="pre">
            {title}
          </H2>
        </FlexBox>

        <Box className="sidenav">
          <Sidenav position="left" handle={<Menu fontSize="small" />}>
            {navigation}
          </Sidenav>
        </Box>

        {!isTablet && button}
      </FlexBox>

      {isTablet && !!button && <Box mt={2}>{button}</Box>}
    </StyledBox>
  )
}

export default UserDashboardHeader
