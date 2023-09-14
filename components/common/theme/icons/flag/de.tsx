import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

// const style = {
//   fill: '#FFFFFF',
// }
const DEFlag = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 55.2 38.4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <path d="M3.03 0h49.13c1.67 0 3.03 1.36 3.03 3.03v32.33c0 1.66-1.36 3.02-3.02 3.03H3.02C1.36 38.4 0 37.03 0 35.37V3.03C0 1.36 1.36 0 3.03 0z" />
        <path
          d="M0 12.8h55.2v22.57c0 1.67-1.36 3.03-3.03 3.03H3.03C1.36 38.4 0 37.04 0 35.37V12.8z"
          fill="#d00"
        />
        <path
          d="M0 25.6h55.2v9.77c0 1.66-1.36 3.02-3.02 3.03H3.03A3.04 3.04 0 010 35.37V25.6z"
          fill="#ffce00"
        />
      </g>
    </SvgIcon>
  )
}

export default DEFlag
