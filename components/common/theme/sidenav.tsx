"use client"
import Scrollbar from '@components/common/theme/scrollbar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import clsx from 'clsx'
import { ReactNode, cloneElement, useEffect, useState } from 'react'
// import Scrollbar from "components/Scrollbar";

// styled component
const Wrapper = styled(Box)({ '& .handle': { cursor: 'pointer' } })

// ================================================================
type SidenavProps = {
  open?: boolean
  width?: number
  children: ReactNode
  handle: React.ReactElement
  toggleSidenav?: () => void
  position?: 'left' | 'right'
}
// ================================================================

const Sidenav = (props: SidenavProps) => {
  const { position, open, width = 280, handle, children, toggleSidenav } = props

  const [sidenavOpen, setSidenavOpen] = useState(open)
  const handleToggleSidenav = () => setSidenavOpen(!sidenavOpen)

  useEffect(() => setSidenavOpen(open), [open])

  return (
    <Wrapper>
      <Drawer
        anchor={position}
        open={sidenavOpen}
        onClose={toggleSidenav || handleToggleSidenav}
        SlideProps={{ style: { width } }}
        sx={{ zIndex: 15001 }}
      >
        <Scrollbar>{children}</Scrollbar>
      </Drawer>

      {handle &&
        cloneElement(handle, {
          onClick: toggleSidenav || handleToggleSidenav,
          className: clsx(handle.props?.className, 'handle'),
        })}
    </Wrapper>
  )
}

// set default component props
Sidenav.defaultProps = { width: 280, position: 'left', open: false }

export default Sidenav
