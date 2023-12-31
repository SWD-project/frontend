"use client"
import { styled } from '@mui/material/styles'
import {
    ReactElement,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'

import { slideDown } from '@components/common/theme/animations/keyframes'
import clsx from 'clsx'

// ============================================================
type StickyProps = {
  fixedOn: number
  children: ReactElement
  scrollDistance?: number
  notifyPosition?: number
  containerRef?: { current: any }
  onSticky?: (isFixed: boolean) => void
  notifyOnScroll?: (hasReachedPosition: boolean) => void
}

type StyledBoxProps = {
  fixed?: boolean
  fixedOn?: number
  children: ReactNode
  componentHeight?: number
}
// ============================================================

export const StyledBox = styled(
  ({ children, componentHeight, fixedOn, fixed, ...rest }: StyledBoxProps) => (
    <div {...rest}>{children}</div>
  )
)<StyledBoxProps>(({ theme, componentHeight, fixedOn, fixed }) => ({
  '& .hold': {
    zIndex: 5,
    boxShadow: 'none',
    position: 'relative',
  },

  '& .fixed': {
    left: 0,
    right: 0,
    zIndex: 1500,
    position: 'fixed',
    top: `${fixedOn}px`,
    boxShadow: theme.shadows[2],
    transition: 'all 350ms ease-in-out',
    animation: `${slideDown} 400ms ${theme.transitions.easing.easeInOut}`,
  },
  '& + .section-after-sticky': { paddingTop: fixed ? componentHeight : 0 },
}))

const Sticky = ({
  fixedOn,
  children,
  onSticky,
  containerRef,
  notifyPosition,
  notifyOnScroll,
  scrollDistance = 0,
}: StickyProps) => {
  const [fixed, setFixed] = useState(false)
  const [parentHeight, setParentHeight] = useState(0)
  const elementRef = useRef<any>(null)
  const positionRef = useRef(0)

  const scrollListener = useCallback(() => {
    if (!window) return

    // Distance of element from window top (-) minus value
    const distance = window.pageYOffset - positionRef.current

    if (containerRef?.current) {
      const containerDistance =
        containerRef.current.offsetTop +
        containerRef.current?.offsetHeight -
        window.pageYOffset

      if (notifyPosition && notifyOnScroll) {
        notifyOnScroll(
          distance <= notifyPosition && containerDistance > notifyPosition
        )
      }

      return setFixed(distance <= fixedOn && containerDistance > fixedOn)
    }

    if (notifyPosition && notifyOnScroll) {
      notifyOnScroll(distance >= notifyPosition)
    }

    let isFixed = distance >= fixedOn + scrollDistance

    if (positionRef.current === 0) {
      isFixed =
        distance >= fixedOn + elementRef.current?.offsetHeight + scrollDistance
    }

    setFixed(isFixed)
  }, [containerRef, fixedOn, notifyOnScroll, notifyPosition, scrollDistance])

  useEffect(() => {
    if (!window) return

    window.addEventListener('scroll', scrollListener)
    window.addEventListener('resize', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
      window.removeEventListener('resize', scrollListener)
    }
  }, [scrollListener])

  useEffect(() => {
    if (!positionRef.current) {
      positionRef.current = elementRef.current?.offsetTop
    }
    setParentHeight(elementRef.current?.offsetHeight || 0)
  }, [children])

  useEffect(() => {
    if (onSticky) onSticky(fixed)
  }, [fixed, onSticky])

  return (
    <StyledBox fixedOn={fixedOn} componentHeight={parentHeight} fixed={fixed}>
      <div className={clsx({ hold: !fixed, fixed: fixed })} ref={elementRef}>
        {children}
      </div>
    </StyledBox>
  )
}

export default Sticky

