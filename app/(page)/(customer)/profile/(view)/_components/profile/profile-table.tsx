"use client"
import { ReactNode } from "react"
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import TableRow from "@mui/material/TableRow"
export const ProfileTable = ({ children }: { children: ReactNode }) => {
    const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
    return (
        <TableRow
            sx={{
                cursor: 'auto',
                p: '0.75rem 1.5rem',
                ...(downMd && {
                    alignItems: 'start',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                }),
            }}
        >
            {children}
        </TableRow>
    )
}