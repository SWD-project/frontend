"use client"
import Menu from '@mui/material/Menu'
import { SxProps } from '@mui/material/styles'
import { Children, cloneElement, Fragment, ReactElement, useState } from 'react'

// ===============================================================
type MenuProps = {
  sx?: SxProps
  open?: boolean
  className?: string
  elevation?: number
  handler: ReactElement
  shouldCloseOnItemClick?: boolean
  children: ReactElement | ReactElement[]
  direction?: 'left' | 'right' | 'center'
}
// ===============================================================

const AppMenu = ({
  open,
  handler,
  children,
  direction = 'left',
  shouldCloseOnItemClick = true,
  ...props
}: MenuProps) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event: any) => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  const handleMenuItemClick = (customOnClick: any) => () => {
    if (customOnClick) customOnClick()
    if (shouldCloseOnItemClick) handleClose()
  }

  return (
    <Fragment>
      {handler &&
        cloneElement(handler, {
          onClick: handler.props.onClick || handleClick,
        })}
      <Menu
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open !== undefined ? open : !!anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction || 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction || 'left' }}
        {...props}
      >
        {Children.map(children, (child: ReactElement) =>
          cloneElement(child, {
            onClick: handleMenuItemClick(child.props.onClick),
          })
        )}
      </Menu>
    </Fragment>
  )
}

export default AppMenu
