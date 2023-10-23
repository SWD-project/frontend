import { addToCart } from '@lib/cart/create-cart'
import { deleteCart } from '@lib/cart/delete-cart'
import { getAccessToken } from '@lib/handler/user-cookie'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: any = await req.json()
    const res = await deleteCart(body)
    return NextResponse.json(res)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
