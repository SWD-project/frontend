import { createCustomer } from '@lib/customer/create-customer'
import { updateCustomer } from '@lib/customer/update-customer'
import { getAccessToken } from '@lib/handler/user-cookie'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const accessToken = getAccessToken(cookies())
    const body: any = await req.json()
    const res = await updateCustomer(body, accessToken)
    return NextResponse.json({
      res
    })
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
