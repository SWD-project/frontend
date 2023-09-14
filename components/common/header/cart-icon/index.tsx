import { getAccessToken } from "@lib/handler/user-cookie";
import { cookies } from "next/headers";
import { CartSideNav } from "./cart-sidenav";

export const revalidate = 0

export default async function CartIcon() {
    const acccessToken = getAccessToken(cookies())
    const cartData = {}
    return (
        <CartSideNav cartData={cartData}/>
    )
}
