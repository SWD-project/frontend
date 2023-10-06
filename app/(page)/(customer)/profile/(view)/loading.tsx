import { H5 } from "@components/common/theme/typography"
import { TableRowItem } from "./_components/profile/profile-table-item"
import FlexBetween from "@components/common/theme/flex-box/flex-between"
import FlexBox from "@components/common/theme/flex-box/flex-box"
import { ProfileTable } from "./_components/profile/profile-table"
import Skeleton from "@mui/material/Skeleton"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import Avatar from "@mui/material/Avatar"

export default async function Loading() {
    const ProfileLoading = (
        <>
            <TableRowItem
                title="First Name"
                value={<Skeleton width={100} />}
            />
            <TableRowItem
                title="Last Name"
                value={<Skeleton width={100} />}
            />
            <TableRowItem
                title="Email"
                value={<Skeleton width={100} />}
            />
            <TableRowItem
                title="Account"
                value={<Skeleton width={100} />}
            />
        </>
    )
    const AvatarLoading = (
        <Box mb={4}>
            <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                    <Card
                        sx={{
                            display: 'flex',
                            p: '14px 32px',
                            height: '100%',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar alt="" sx={{ height: 64, width: 64 }} />

                        <Box ml={1.5} flex="1 1 0">
                            <FlexBetween flexWrap="wrap">
                                <div>
                                    <H5 my="0px">
                                        <Skeleton width={100} />
                                    </H5>
                                    <FlexBox alignItems="center">
                                    </FlexBox>
                                </div>
                            </FlexBetween>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
    return (
        <>
            {AvatarLoading}
            <ProfileTable>
                {ProfileLoading}
            </ProfileTable>
        </>
    )
}

