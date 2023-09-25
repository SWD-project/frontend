import FlexBox from "@components/common/theme/flex-box/flex-box"
import { Small } from "@components/common/theme/typography"
import { ReactNode } from "react"

export const TableRowItem = ({
    title,
    value,
}: {
    title: string
    value: string | ReactNode
}) => {
    return (
        <>
            <FlexBox flexDirection="column" p={1}>
                <Small color="grey.600" mb={0.5} textAlign="left">
                    {title}
                </Small>
                <span>{value}</span>
            </FlexBox>
        </>
    )
}