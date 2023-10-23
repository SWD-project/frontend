import { getCustomer } from '@lib/customer/get-customer'
import { setAccessToken } from '@lib/handler/user-cookie'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body: { accessToken: string } = await req.json()
  try {
    const res = await getCustomer(body.accessToken, {})
    if (res.data[0]) {
      setAccessToken(res.data[0].uuid, cookies())
    } else {
      throw new Error('Account not found')
    }
    return NextResponse.json({
      res
    })
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
