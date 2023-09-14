import { getAccessToken } from "@lib/handler/user-cookie";
import { cookies } from "next/headers";
import { LoginDialog } from "./login-dialog";

export const revalidate = 0

export default async function CustomerIcon() {
    const acccessToken = getAccessToken(cookies())
    return (
      <LoginDialog accessToken={acccessToken}/>
    )
}
