import { getAccessToken } from '@lib/handler/user-cookie'
import { cookies } from 'next/headers'
import { CartSideNav } from './cart-sidenav'
import { getCart } from '@lib/cart/get-cart'
import { GetCartResponse } from '@lib/model/cart/get-cart'

export const revalidate = 0

export default async function CartIcon() {
  const accessToken = getAccessToken(cookies())
  const cartData = await getCart(accessToken, {})
  console.log(cartData)
  return <CartSideNav cartData={cartData.data[0] as GetCartResponse} />
}
