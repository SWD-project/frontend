import UserDashboardHeader from "@components/common/header/user-dashboard-header"
import Person from "@mui/icons-material/Person"
import Button from "@mui/material/Button"
import Link from "next/link"
import { ReactNode } from "react"

export default async function Layout({ children }: { children: ReactNode }) {
    const HEADER_LINK = (
        <Link href={"/profile/info"}>
            <Button
                color="primary"
                sx={{ px: 4, bgcolor: 'primary.light' }}
            >
                Edit Profile
            </Button>
        </Link>
    )

    return (
        <>
            <UserDashboardHeader
                icon={Person}
                title={"My Profile"}
                button={HEADER_LINK}
            />
            {children}
        </>
    )
}