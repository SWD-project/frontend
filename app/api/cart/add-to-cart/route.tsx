import { addToCart } from '@lib/cart/create-cart'
import { getAccessToken } from '@lib/handler/user-cookie'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const accessToken = getAccessToken(cookies())
    const body: any = await req.json()
    const res = await addToCart(accessToken, body)
    return NextResponse.json(res)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
